<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div :class="[type == 'warning' ? 'bg-yellow-100/50 border-yellow-500' : type == 'error' ? 'bg-red-100/50 border-red-500' : type == 'primary' ? 'bg-blue-300/50 border-blue-500' : type == 'success' ? 'bg-green-100/50 border-green-500' : '', 'border-l-4 p-4']">
    <div class="flex">
      <div class="flex-shrink-0 self-start">
        <i :class="[type == 'warning' ? 'text-yellow-600 icon-warning' : type == 'error' ? 'text-red-600 icon-x' : type == 'primary' ? 'text-blue-600 icon-i' : type == 'success' ? 'text-green-600 icon-circle-check' : '','icon h-6 w-6']" />
      </div>
      <div class="ml-3 grow self-start">
        <p :class="[type == 'warning' ? 'text-yellow-600' : type == 'error' ? 'text-red-600' : type == 'primary' ? 'text-blue-600' : type == 'success' ? 'text-green-600' : '','text-sm ']" v-html="finalMessage">
        </p>
      </div>
      <button v-if="!buttonLoading && buttonText" :class="[type == 'warning' ? 'btn-yellow' : type == 'error' ? 'btn-red' : type == 'primary' ? 'btn-blue' : type == 'success' ? 'btn-green' : '','ml-3 btn-md self-center']" @click.stop="buttonClicked()">Fix</button>
      <button v-if="buttonLoading && buttonText" :class="[type == 'warning' ? 'btn-yellow' : type == 'error' ? 'btn-red' : type == 'primary' ? 'btn-blue' : type == 'success' ? 'btn-green' : '','ml-3 btn-md self-center whitespace-nowrap disabled']"><Loader :isWhite="true" /></button>
    </div>
  </div>
</template>

<script setup lang="ts">

import { ref } from 'vue'
// Import Loader
import Loader from "./Loader.vue";
const props = defineProps({
  type: {
    type: String,
    default: null
  },
  message: {
    type: String,
    default: null
  },
  link: {
    type: String,
    default: null
  },
  buttonText: {
    type: String,
    default: null
  },
  buttonLoading: {
    type: Boolean,
    default: false
  },
})

const emit = defineEmits(['button-clicked'])

let finalMessage: string = ref('');

if (props.link && props.message && props.message.includes('|') && props.message.includes('|')) {

  let messageList: array = ref(props.message.split('|'));
  finalMessage.value = `${messageList.value[0]}<a href="${props.link}" class="font-medium underline" >${messageList.value[1]}</a>${messageList.value[2]}`;

}else{

  finalMessage.value = props.message;

}

function buttonClicked() {
  emit('button-clicked', true);
}

</script>