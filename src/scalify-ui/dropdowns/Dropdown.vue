<template>
  <Menu v-slot="{ open }" as="div" :class="[fullWidth ? 'w-full' : '' ,'relative text-left']" v-click-away="hideMenu">
    <!-- justify-center -->
    <div>
      <MenuButton v-if="isFbPixel && !loading" @click.stop="dropdownButton()" :class="[fullWidth ? 'w-full' : '' ,'flex rounded-md border shadow-sm px-4 py-2 bg-white dark:bg-dark-400 dark:border-dark-300 dark:text-dark-100 text-sm font-medium hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-300 truncate ... min-h-[45px] self-center']" >

        <div class="self-center" v-if="selectedOption && selectedOption.detected">
          <div class="flex  truncate ...">
            <span class="font-normal ">{{selectedOption.name}}</span>
            <span class="pl-1 text-gray-500 font-normal">- {{selectedOption.id}}</span>
          </div>
          <div class="flex">
            <i class="icon icon-check text-green-500 text-lg self-center" />
            <span class="pl-1 self-center font-normal">Detected on your store</span>
          </div>
        </div>
        <p v-else-if="selectedOption" class="self-center w-full text-left truncate ...">{{selectedOption.name}}</p>
        <p v-else class="self-center w-full text-left truncate ...">No Pixel Selected</p>

        <i v-if="dropdownIcon" class="-mr-1 ml-2 text-xl icon icon-selector text-dark-500 dark:text-dark-100 self-center" aria-hidden="true"></i>
      </MenuButton>
      <MenuButton v-else-if="!isFbPixel && !loading" @click.stop="dropdownButton()" :class="[fullWidth ? 'w-full' : '' ,'flex rounded-md border shadow-sm px-4 py-2 bg-white dark:bg-dark-400 dark:border-dark-300 dark:text-dark-100 text-sm font-medium hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-300 truncate ... min-h-[45px] self-center']" >

        <!-- Show Adaccount Status -->
        <span v-if="isAdaccount && selectedOption" :class="[selectedOption.account_status == 2 || selectedOption.account_status == 101 || selectedOption.account_status == 202 ? 'bg-red-500' : 'bg-green-500','w-2 h-2 rounded-full inline-block self-center mr-2 shrink-0']"></span>

        <div v-if="withImg && selectedOption" :class="[`mr-2 self-center w-7 rounded-full bg-blue-400 bg-cover bg-no-repeat bg-center shrink-0`]" :style="`background-image: url('${selectedOption.url}')`">
          <img class="w-full h-full" src="../../../public/images/1px.png" />
        </div>
        <span v-if="defaultText && defaultText.length" class="self-center w-full text-left truncate ... flex" v-html="defaultText"></span>
        <p v-else class="self-center w-full text-left truncate ...">{{selectedOption ? selectedOption.name : "No Result"}}</p>

        <i v-if="dropdownIcon" class="-mr-1 ml-2 text-xl icon icon-selector text-dark-500 dark:text-dark-100" aria-hidden="true"></i>
      </MenuButton>
      <MenuButton  v-else :class="[fullWidth ? 'w-full' : '' ,'flex rounded-md border shadow-sm px-4 py-2 bg-white dark:bg-dark-400 dark:border-dark-300 dark:text-dark-100 text-sm font-medium hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-300 min-h-[45px]']" >
        <Loader class="self-center" />
      </MenuButton>
    </div>

    <transition
      v-show="openMenu"
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <MenuItems v-if="!customMenu && !loading && list && list.length > 0" :static="openMenu"
        :class="[fullWidth ? 'w-full' : '' ,'origin-top-left absolute border z-10 left-0 mt-2 rounded-md shadow-lg bg-white dark:bg-dark-400 dark:border-dark-300 dark:text-dark-100 ring-1 ring-black ring-opacity-5 focus:outline-none w-max']"
      >
        <div v-if="inputSearch" :class="[list.length > 0 ? 'border-b' : '', 'p-2']">
          <input ref="search" v-model="textSearch" @keydown="checkInput($event)" type="text" class="flex-1 min-w-0 block w-full px-3 py-2 rounded-md focus:ring-blue-400 dark:bg-dark-400 dark:border-dark-300 dark:text-dark-100 focus:border-blue-300 sm:text-sm border" placeholder="Search" />
        </div>
        <div class="max-h-80 overflow-y-auto p-3 text-center" v-if="dropDownLoading">
          <Loader />
        </div>
        <div class="max-h-72 overflow-y-auto" v-if="!dropDownLoading && list && list.length > 0">
          <MenuItem v-for="(option,index) in list" :key="index" @click="selectOption(option)" :class="[(isAdaccount && (option.account_status == 2 || option.account_status == 101 || option.account_status == 202)) || (isFacebookPage && !option.is_published) ? 'disabled' : '','border-b cursor-pointer last:border-b-0 dark:border-dark-300 truncate ...']" v-slot="{ active }">
            <div v-if="!isFbPixel" :class="[active ? 'bg-blue-200 dark:bg-dark-300 first:rounded-t-md last:rounded-b-md' : '','px-4 py-2 text-sm flex']" >

              <!-- Show Adaccount Status -->
              <span v-if="isAdaccount && option" :class="[option.account_status == 2 || option.account_status == 101 || option.account_status == 202 ? 'bg-red-500' : option.account_status == 1 ? 'bg-green-500' : 'bg-yellow-500','w-2 h-2 rounded-full inline-block self-center mr-2 shrink-0']"></span>

              <div v-if="withImg && option" :class="[`mr-2 self-center w-7 rounded-full bg-blue-400 bg-cover bg-no-repeat bg-center shrink-0`]" :style="`background-image: url('${option.url}')`">
                <img class="w-full h-full" src="../../../public/images/1px.png" />
              </div>
              <span class="self-center text-truncate">{{option.name}}</span>

              <!-- If Dropdown for Adaccounts -->
              <span v-if="isAdaccount && option" class="px-2 self-center">-</span>
              <span v-if="isAdaccount && option" :class="[option.account_status == 1 ? 'text-green-500' : option.account_status == 2 || option.account_status == 101 || option.account_status == 202 ? 'text-red-500' : 'text-yellow-500' ,'self-center']">{{option.account_status == 1 ? "Active" : option.account_status == 2 ? "Disabled" : option.account_status == 3 ? "Unsettled" : option.account_status == 7 ? "Pending Risk Review" : option.account_status == 8 ? "Pending Settlement" : option.account_status == 9 ? "In Grace Period" : option.account_status == 100 ? "Pending Closure" : option.account_status == 101 ? "Closed" : option.account_status == 201 ? "Any Active" : option.account_status == 202 ? "Any CLosed" : ""}}</span>

              <!-- If Dropdown for Facebook Pages -->
              <span v-if="isFacebookPage && option && !option.is_published" class="px-2 self-center">-</span>
              <span v-if="isFacebookPage && option && !option.is_published" class="text-dark-200 self-center">Page Not Published</span>

            </div>
            <div v-else-if="isFbPixel" :class="[active ? 'bg-blue-200 dark:bg-dark-300 first:rounded-t-md last:rounded-b-md' : '','px-4 py-2 text-sm flex']" >

              <div v-if="option && option.detected" class="self-center">
                <div class="flex  truncate ...">
                  <span class="font-normal ">{{option.name}}</span>
                  <span class="pl-1 text-gray-500 font-normal">- {{option.id}}</span>
                </div>
                <div class="flex">
                  <i class="icon icon-check text-green-500 text-lg self-center" />
                  <span class="pl-1 self-center font-normal">Detected on your store</span>
                </div>
              </div>
              <span v-else class="self-center text-truncate">{{option.name}}</span>

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
      <MenuItems v-else-if="customMenu" :static="openMenu"
        :class="[fullWidth ? 'w-full' : '' ,'overflow-hidden origin-top-left absolute border z-10 left-0 mt-2 rounded-md shadow-lg bg-white dark:bg-dark-400 dark:border-dark-300 dark:text-dark-100 ring-1 ring-black ring-opacity-5 focus:outline-none w-max']"
      >
        <slot />
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
  fullWidth: Boolean,
  withImg: Boolean,
  loading: Boolean,
  value: Object,
  isFbPixel: Boolean,
  isAdaccount: Boolean,
  isFacebookPage: Boolean,
  defaultText: String,
  dropdownIcon: {
    type: Boolean,
    default: true
  },
  customMenu: {
    type: Boolean,
    default: false
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
    default: false,
  },
  closeAtClick: {
    type: Boolean,
    default: true,
  },
  dropDownLoading: Boolean,
})

const emit = defineEmits(["change", "load-more", "search"]);

let openMenu: boolean = ref(false);

function hideMenu() {
  console.log("!props.loadingLoadMore: ", !props.loadingLoadMore);
  if (!props.loadingLoadMore) {
    openMenu.value = false
  }
}
let selectedOption = ref(null); //props.list[0] ||
let textSearch: string = ref("");

watch(textSearch, ()=>{
  clearTimeout(window.myTimeout);
  let timeout: number = ref(1000);
  window.myTimeout = setTimeout(() => {
    emit('search', textSearch.value);
  }, timeout.value);
})

if (props.isAdaccount) {
  selectedOption.value = props.list.find((obj)=> obj.account_status != 2 && obj.account_status != 101 && obj.account_status != 102)
}else if(props.isFacebookPage){
  selectedOption.value = props.list.find((obj)=> obj.is_published);
}else{
  selectedOption.value = props.list && props.list.length ? props.list[0] : null;
}

watch(()=> props.list, (newList, oldList)=>{

  let isTheSame: boolean = JSON.stringify(newList) == JSON.stringify(oldList) ? true : false;
  if (!newList.length) {
    selectedOption.value = null;
    emit('change', selectedOption.value);
  }else if (newList && newList.length && (!isTheSame || !selectedOption.value)) {
    if (props.value) {
      let exist = newList.find((obj)=> JSON.stringify(obj) == JSON.stringify(props.value))
      if (exist) {
        selectedOption.value = exist;
      }else{
        if (props.isAdaccount) {
          selectedOption.value = newList.find((obj)=> obj.account_status != 2 && obj.account_status != 101 && obj.account_status != 102)
        }else if(props.isFacebookPage){
          selectedOption.value = newList.find((obj)=> obj.is_published);
        }else{
          selectedOption.value = newList[0];
        }
      }
    }else{
      if (props.isAdaccount) {
        selectedOption.value = newList.find((obj)=> obj.account_status != 2 && obj.account_status != 101 && obj.account_status != 102)
      }else if(props.isFacebookPage){
        selectedOption.value = newList.find((obj)=> obj.is_published);
      }else{
        selectedOption.value = newList[0];
      }
    }
    emit('change', selectedOption.value);
  }
})

watch(()=> props.value, (newValue, oldValue)=>{

  let isTheSame: boolean = JSON.stringify(newValue) == JSON.stringify(oldValue) ? true : false;
  if (newValue && (!isTheSame || !selectedOption.value)) {

    selectedOption.value = newValue;
    emit('change', selectedOption.value);
  }
})

function checkInput(e){
  if (e.code === "Space") {
    e.stopPropagation();
  }
}

function selectOption(option) {
  selectedOption.value = option;
  openMenu.value = false;
  emit('change', option);
}

function loadMoreData(){
  emit('load-more', props.isLoadMore);
  openMenu.value = true;
  console.log("openMenu.value: ", JSON.stringify(openMenu.value));
}

function dropdownButton(){
  openMenu.value = !openMenu.value;
}

</script>
