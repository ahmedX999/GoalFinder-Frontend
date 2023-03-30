<template>
  <Menu as="div" v-slot="{ open }" :class="[fullWidth ? 'w-full' : '' ,'relative text-left']" v-click-away="hideMenu">
    <!-- justify-center -->
    <div>
      <MenuButton  @click.stop="openMenu = !openMenu" v-if="!loading" :class="[fullWidth ? 'w-full' : '' ,'flex rounded-md border shadow-sm px-4 py-2 bg-white dark:bg-dark-400 dark:border-dark-300 dark:text-dark-100 text-sm font-medium hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-300 truncate ...']" >

        <span v-if="defaultText && defaultText.length" class="self-center w-full text-left truncate ..." v-html="defaultText"></span>
        <p v-else class="self-center w-full text-left truncate ...">Select an option</p>

        <i v-if="dropdownIcon" class="-mr-1 ml-2 text-xl icon icon-selector text-dark-500 dark:text-dark-100" aria-hidden="true"></i>
      </MenuButton>
      <MenuButton  v-else :class="[fullWidth ? 'w-full' : '' ,'flex rounded-md border shadow-sm px-4 py-2 bg-white dark:bg-dark-400 dark:border-dark-300 dark:text-dark-100 text-sm font-medium hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-300']" >
        <Loader />
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
        <div class="max-h-80 overflow-y-auto">
          <MenuItem v-for="(option,index) in list" :key="index" @click.stop="selectOption(option)" :class="['border-b cursor-pointer last:border-b-0 dark:border-dark-300 truncate ...']" v-slot="{ active }">
            <div :class="[active ? 'bg-blue-200 dark:bg-dark-300 first:rounded-t-md last:rounded-b-md' : '','px-4 py-2 text-sm flex min-h-[45px]']" >

              <p class="self-center text-truncate grow truncate ...">{{option.name}}</p>

              <i v-if="selectedOptions.find((selectedOption) => selectedOption.id == option.id)" class="ml-2 text-lg icon icon-check text-dark-400 dark:text-dark-100" aria-hidden="true"></i>

            </div>
          </MenuItem>
        </div>
      </MenuItems>
      <MenuItems v-else-if="customMenu"
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
  value: {
    type: Array,
    default: []
  },
  fullWidth: Boolean,
  loading: Boolean,
  defaultText: String,
  dropdownIcon: {
    type: Boolean,
    default: true
  },
  customMenu: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['change'])

let openMenu: boolean = ref(false);
let selectedOptions: array = ref([]); //props.list[0] ||

watch(()=> props.list, (newList, oldList)=>{

  selectedOptions.value = [];
  emit('change', selectedOptions.value);
})

function hideMenu() {
  openMenu.value = false
}

function selectOption(selectedOption) {

  if (selectedOptions.value && selectedOptions.value.length) {

    let indexOption = selectedOptions.value.findIndex((option) => option && selectedOption && (option.id == selectedOption.id));
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
