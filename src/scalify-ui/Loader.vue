<script setup lang="ts">

import { ref } from 'vue';

const props = defineProps({
  isWhite: {
    type: Boolean,
    default: false,
  },
  withText: {
    type: Boolean,
    default: true,
  }
})

</script>

<template>
  <div class="inline-flex">
    <svg :class="[isWhite ? 'text-white' : 'text-blue-500','animate-spin -ml-1 h-5 w-5 self-center']" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
    <span v-if="withText" :class="[isWhite ? 'text-white' : 'text-dark-400','ml-3 self-center font-medium']">Processing...</span>
  </div>
</template>