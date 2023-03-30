<template>
  <Menu v-slot="{ open }" as="div" :class="[fullWidth ? 'w-full' : '' ,'relative text-left']">
    <!-- justify-center -->
    <!-- <div> -->
      <MenuButton @click="dropdownButton(open)" v-if="!loading" :class="[fullWidth ? 'w-full' : '' ,'flex rounded-md border shadow-sm px-4 py-2 bg-white dark:bg-dark-400 dark:border-dark-300 dark:text-dark-100 text-sm font-medium hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-300']" >
        <div v-if="withImg && selectedOption" :class="[`mr-2 self-center w-7 rounded-full bg-blue-400 bg-cover bg-no-repeat bg-center`]" :style="`background-image: url('${selectedOption.url}')`">
          <img class="w-full h-full" src="../../../public/images/1px.png" />
        </div>
        <p class="self-center w-full text-left truncate ...">{{selectedOption ? selectedOption.name : "No Result"}}</p>

        <i class="-mr-1 ml-2 text-xl icon icon-selector text-dark-500 dark:text-dark-100" aria-hidden="true"></i>
      </MenuButton>
      <MenuButton  v-else :class="[fullWidth ? 'w-full' : '' ,'flex rounded-md border shadow-sm px-4 py-2 bg-white dark:bg-dark-400 dark:border-dark-300 dark:text-dark-100 text-sm font-medium hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-300']" >
        <Loader />
      </MenuButton>
    <!-- </div> -->

    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <MenuItems
        :class="[fullWidth ? 'w-full' : '' ,'origin-top-left absolute border z-10 left-0 mt-2 rounded-md shadow-lg bg-white dark:bg-dark-400 dark:border-dark-300 dark:text-dark-100 ring-1 ring-black ring-opacity-5 focus:outline-none w-max']"
      >
        <div :class="[list.length > 0 ? 'border-b' : '', 'p-2']">
          <input ref="search" v-model="textSearch" @keydown="checkInput($event)" type="text" class="flex-1 min-w-0 block w-full px-3 py-2 rounded-md focus:ring-blue-400 dark:bg-dark-400 dark:border-dark-300 dark:text-dark-100 focus:border-blue-300 sm:text-sm border" placeholder="Search" />
        </div>
        <div class="max-h-80 overflow-y-auto p-3 text-center" v-if="dropDownLoading">
          <Loader />
        </div>
        <div class="max-h-80 overflow-y-auto" v-if="!dropDownLoading && list && list.length > 0">
          <MenuItem v-for="(option,index) in list" :key="index" @click="selectOption(option)" class="border-b last:border-b-0 dark:border-dark-300" v-slot="{ active }">
            <div :class="[active ? 'bg-blue-200 dark:bg-dark-300 first:rounded-t-md last:rounded-b-md' : '','px-4 py-2 text-sm flex']" >
              <div v-if="withImg && option" :class="[`mr-2 self-center w-7 rounded-full bg-blue-400 bg-cover bg-no-repeat bg-center`]" :style="`background-image: url('${option.url}')`">
                <img class="w-full h-full" src="../../../public/images/1px.png" />
              </div>
              <span class="self-center">{{option.name}}</span>
            </div>
          </MenuItem>
        </div>
        <div class="max-h-80 overflow-y-auto" v-if="!dropDownLoading && list && list.length == 0">
          <MenuItem class="border-t dark:border-dark-300">
            <div :class="['px-4 py-2 text-sm text-center']" >
              <span class="self-center">No Results</span>
            </div>
          </MenuItem>
        </div>
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
  list: Array,
  fullWidth: Boolean,
  withImg: Boolean,
  loading: Boolean,
  value: Object,
  dropDownLoading: Boolean,
})

const emit = defineEmits(['change', "search"])

let textSearch: string = ref("");
let selectedOption = ref(props.list[0] || null);

watch(textSearch, ()=>{
  clearTimeout(window.myTimeout);
  let timeout: number = ref(1000);
  window.myTimeout = setTimeout(() => {
    emit('search', textSearch.value);
  }, timeout.value);
})

let search = ref(null);
function dropdownButton(dropDownStatus){
  if (!dropDownStatus) {
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

watch(()=> props.value, (newValue, oldValue)=>{

  let isTheSame: boolean = JSON.stringify(newValue) == JSON.stringify(oldValue) ? true : false;
  if (!isTheSame || !selectedOption.value) {
    selectedOption.value = props.value;
    emit('change', selectedOption.value);
  }

})

function selectOption(option) {
  selectedOption.value = option;
  emit('change', option);
}

</script>
