<template>
  <div :class="[fullWidth ? 'w-full' : '','relative z-0 inline-flex shadow-sm rounded-md']">

    <button v-for="(button,index) in list" :key="index" @click="selectButton(button)" type="button" :class="[fullWidth ? 'grow' : '',button.value == activeButton.value ? 'border-transparent bg-blue-500 text-white' : 'border-blue-300 border-r-0 last:border-r bg-white text-dark-600' ,'relative inline-flex items-center px-4 py-2 first:rounded-l-md last:rounded-r-md border text-sm font-medium focus:z-10 focus:outline-none focus:ring-1 justify-center']">{{button.name}}</button>

  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  list: {
    type: Array,
    default: []
  },
  fullWidth: {
    type: Boolean,
    default: false
  },
  defaultValue: {
    type: Object,
    default: null
  },
})

const emit = defineEmits(['change'])

let activeButton = ref(props && props.defaultValue ? props.defaultValue : props.list && props.list.length ? props.list[0] : null);

function selectButton(button) {
  activeButton.value = button;
  emit('change', button);
}

</script>