<template>
  <Menu v-slot="{ open }" as="div" :class="[fullWidth ? 'w-full' : '' ,'relative text-left']" v-click-away="hideMenu">
    <!-- justify-center -->
    <!-- <div> -->
      <MenuButton @click.stop="dropdownButton()" v-if="!loading" :class="[fullWidth ? 'w-full' : '' ,'flex rounded-md border shadow-sm px-4 py-2 bg-white dark:bg-dark-400 dark:border-dark-300 dark:text-dark-100 text-sm font-medium hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-300']" >

        <span v-if="defaultText && defaultText.length" class="self-center w-full text-left truncate ..." v-html="defaultText"></span>
        <p v-else class="self-center w-full text-left truncate ...">Select an option</p>

        <i class="-mr-1 ml-2 text-xl icon icon-selector text-dark-500 dark:text-dark-100" aria-hidden="true"></i>
      </MenuButton>
      <MenuButton  v-else :class="[fullWidth ? 'w-full' : '' ,'flex rounded-md border shadow-sm px-4 py-2 bg-white dark:bg-dark-400 dark:border-dark-300 dark:text-dark-100 text-sm font-medium hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-300']" >
        <Loader />
      </MenuButton>
    <!-- </div> -->

    <transition
      v-show="openMenu"
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <MenuItems
        :static="openMenu"
        :class="[fullWidth ? 'w-full' : '' ,'origin-top-left absolute border z-10 left-0 mt-2 rounded-md shadow-lg bg-white dark:bg-dark-400 dark:border-dark-300 dark:text-dark-100 ring-1 ring-black ring-opacity-5 focus:outline-none w-max']"
      >
        <div v-if="inputSearch" :class="[list.length > 0 ? 'border-b' : '', 'p-2']">
          <input ref="search" v-model="textSearch" @keydown="checkInput($event)" type="text" class="flex-1 min-w-0 block w-full px-3 py-2 rounded-md focus:ring-blue-400 dark:bg-dark-400 dark:border-dark-300 dark:text-dark-100 focus:border-blue-300 sm:text-sm border" placeholder="Search" />
        </div>
        <div class="max-h-80 overflow-y-auto p-3 text-center" v-if="dropDownLoading">
          <Loader />
        </div>
        <div class="max-h-72 overflow-y-auto" v-if="!dropDownLoading && list && list.length > 0">
          <MenuItem v-for="(option,index) in list" :key="index" @click="selectOption(option)" :class="['border-b last:border-b-0 dark:border-dark-300']" v-slot="{ active }">
            <div :class="[isLoadMore ? '' : 'last:rounded-b-md', active ? 'bg-blue-200 dark:bg-dark-300 first:rounded-t-md' : '','px-4 py-2 text-sm flex min-h-[45px]']" >

              <p class="self-center text-truncate grow truncate ...">{{option.name}}</p>
              <i v-if="option && option.id && selectedOptions.find((selectedOption) => selectedOption.id == option.id)" class="ml-2 text-lg icon icon-check text-dark-400 dark:text-dark-100" aria-hidden="true"></i>
              <i v-else-if="option && option.value && selectedOptions.find((selectedOption) => selectedOption.value == option.value)" class="ml-2 text-lg icon icon-check text-dark-400 dark:text-dark-100" aria-hidden="true"></i>
              <i v-else-if="option && option.key && selectedOptions.find((selectedOption) => selectedOption.key == option.key)" class="ml-2 text-lg icon icon-check text-dark-400 dark:text-dark-100" aria-hidden="true"></i>

            </div>
          </MenuItem>

        </div>
        <div class="max-h-80 overflow-y-auto" v-else-if="!dropDownLoading && list && list.length == 0">
          <MenuItem class="border-t dark:border-dark-300">
            <div :class="['px-4 py-2 text-sm text-center']" >
              <span class="self-center">No Results</span>
            </div>
          </MenuItem>
        </div>
        <MenuItem v-if="isLoadMore" @click="loadMoreData()" class="cursor-pointer border-t dark:border-dark-300" v-slot="{ active }">
          <div :class="[active ? 'bg-blue-200 dark:bg-dark-300 first:rounded-t-md last:rounded-b-md' : '','px-4 py-2 text-sm flex min-h-[45px]']" >
            <p v-if="!loadingLoadMore" class="text-center font-medium text-blue-500 self-center text-truncate grow truncate ...">Load More</p>
            <Loader v-else class="m-auto" />
          </div>
        </MenuItem>

      </MenuItems>
    </transition>
  </Menu>
</template>

<script setup lang="ts">

import { ref, watch } from "vue";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
// Import Loader
import Loader from "../Loader.vue";

const props = defineProps({
  list: {
    type: Array,
    default: []
  },
  value: {
    type: Array,
    default: []
  },
  isLoadMore: {
    type: String,
    default: null
  },
  loadingLoadMore: {
    type: Boolean,
    default: false
  },
  inputSearch: {
    type: Boolean,
    default: true,
  },
  fullWidth: Boolean,
  loading: Boolean,
  dropDownLoading: Boolean,
  defaultText: String,
})

let openMenu: boolean = ref(false);

function hideMenu() {
  openMenu.value = false
}

const emit = defineEmits(['change', "search", "load-more"])

let textSearch: string = ref("");
let selectedOptions = ref([]);

watch(textSearch, ()=>{
  clearTimeout(window.myTimeout);
  let timeout: number = ref(1000);
  window.myTimeout = setTimeout(() => {
    emit('search', textSearch.value);
  }, timeout.value);
})

let search = ref(null);
function dropdownButton(){
  openMenu.value = !openMenu.value;
  if (openMenu.value) {
    setTimeout(() => {
      search.value.focus();
    }, 200);
  }
}
// To stopPropagation when user tap Space
function checkInput(e){
  if (e.code === "Space") {
    e.stopPropagation();
  }
}
function loadMoreData(){
  emit('load-more', props.isLoadMore);
  openMenu.value = true;
}
function selectOption(selectedOption) {
  if (selectedOptions.value && selectedOptions.value.length) {

    let indexOption = selectedOption.id ? selectedOptions.value.findIndex((option) => option && (option.id == selectedOption.id)) : selectedOption.value ? selectedOptions.value.findIndex((option) => option && (option.value == selectedOption.value)) : selectedOption.key ? selectedOptions.value.findIndex((option) => option && (option.key == selectedOption.key)) : -1 ;
    if (indexOption >= 0) {
      selectedOptions.value.splice(indexOption, 1);
    }else{
      selectedOptions.value.push(selectedOption);
    }
  }else{
    selectedOptions.value.push(selectedOption);
  }

  emit('change', selectedOptions.value);

}

watch(()=> props.value, (newValue, oldValue)=>{

  let isTheSame: boolean = JSON.stringify(newValue) == JSON.stringify(oldValue) ? true : false;
  if (newValue && (!isTheSame || !selectedOptions.value)) {
    selectedOptions.value = newValue;
    emit('change', selectedOptions.value);
  }
})

</script>
