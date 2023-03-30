<template>
  <Switch v-model="enabled" :class="[enabled && color == 'blue' ? 'bg-blue-500 focus:ring-blue-500/80' : enabled && color == 'red' ? 'bg-red-500 focus:ring-red-500/80' : enabled && color == 'green' ? 'bg-green-500 focus:ring-green-500/80' : enabled && color == 'yellow' ? 'bg-yellow-500 focus:ring-yellow-500/80' : enabled && color == 'dark' ? 'bg-dark-500 focus:ring-dark-500/80' : 'bg-gray-400/80 focus:ring-gray-400/60', 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2']">

  <!-- [enabled && color == 'blue' ? 'bg-blue-500' : enabled && color == 'red' ? 'bg-red-500' : enabled && color == 'green' ? 'bg-green-500' : enabled && color == 'yellow' ? 'bg-yellow-500' : enabled && color == 'dark' ? 'bg-dark-500' : 'bg-gray-200', color == 'blue' ? 'focus:ring-blue-500/80' : color == 'red' ? 'focus:ring-red-500/80' : color == 'green' ? 'focus:ring-green-500/80' : color == 'yellow' ? 'focus:ring-yellow-500/80' : color == 'dark' ? 'focus:ring-dark-500/80' : '' , 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'] -->
    <span class="sr-only">Use setting</span>
    <span aria-hidden="true" :class="[enabled ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200']" />
  </Switch>
</template>

<script setup lang="ts">

import { ref, watch, watchEffect } from 'vue'
import { Switch } from '@headlessui/vue'

const props = defineProps({
  color: {
    type: String,
  },
  value:{
    type: Boolean,
  }
})

const emit = defineEmits(['change'])

const enabled: boolean = ref(props.value ? true : false);

watch(()=> props.value, ()=>{
  enabled.value = props.value;
  emit('change', enabled.value);
})

watch(enabled, ()=>{
  enabled.value = enabled.value;
  emit('change', enabled.value);
})

</script>