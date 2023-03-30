<script setup lang="ts">

import { ref, onMounted, onUnmounted } from 'vue';

  const props = defineProps({
    steps: {
      required: true,
      type: Array,
      default: []
    }
  });

  let stepsScrollLeft: number = ref(0);
  let stepsScrollRight: number = ref(0);
  let scrollIn: string = ref("left");
  let hideShadows: boolean = ref(false);

  function getScrollPos ({ target: { scrollLeft ,clientWidth, scrollWidth }}) {

    let scroll = "left"
    stepsScrollLeft.value = scrollLeft;
    stepsScrollRight.value = scrollWidth - (scrollLeft + clientWidth);

    if(scrollLeft == 0){
      scroll = "left"
    }
    else if(scrollLeft+clientWidth+1 < scrollWidth){
      scroll = "middle"
    }
    if(scrollLeft+clientWidth+1 >= scrollWidth){
      scroll = "right"
    }
    scrollIn.value = scroll

  };
  function updateTableWidth(){

      let y = document.getElementById("steps-container");
      let x = document.getElementById("list-steps");
      let items = x && x.children ? x.children : [];

      let w = 0
      for(let i=0;i<items.length;i++){

        w = w + items[i].clientWidth;

      }

      if(x && parseInt(w) <= y.clientWidth){
        hideShadows.value = true
      }else{
        hideShadows.value = false
      }

  };


  onMounted(()=>{

    updateTableWidth();
    window.addEventListener('resize', function(event) {
      updateTableWidth();
    }, true);

  });

  onUnmounted(()=>{

     window.removeEventListener('resize', function(event) {
      updateTableWidth();
    }, true);

  });


</script>

<template>
  <div class="">
    <nav class="relative" id="steps-container" aria-label="Progress">
      <div v-show="!hideShadows && (scrollIn == 'right' || scrollIn == 'middle') && (steps.length)" class="absolute left-0 top-0 h-full bg-dark-200/40 w-1 blur-sm"></div>
      <ol v-if="steps.length" id="list-steps" @scroll="getScrollPos" role="list" class="overflow-x-auto flex ">
        <li v-for="(step, stepIdx) in steps" :key="step.id" class="relative w-max grow">
          <div :class="[stepIdx === 0 ? 'border-b-0 rounded-t-md' : '', stepIdx === steps.length - 1 ? 'border-t-0 rounded-b-md' : '', 'border-0 w-max']">

            <!-- Status Complete -->
            <a v-if="step.status === 'complete'" class="group">
              <span class="absolute top-0 left-0 w-1 h-full bg-transparent lg:w-full lg:h-1 lg:bottom-0 lg:top-auto" aria-hidden="true" />
              <span :class="[stepIdx !== 0 ? 'lg:pl-9' : '', 'px-6 py-5 flex items-start text-sm font-medium']">
                <span class="flex-shrink-0">
                  <span class="w-10 h-10 flex items-center justify-center bg-blue-500 rounded-full">
                    <i class="text-2xl icon icon-check text-white" aria-hidden="true"></i>
                  </span>
                </span>
                <span class="mt-0.5 ml-4 min-w-0 flex flex-col self-center">
                  <span class="dark:text-dark-200 text-sm font-medium tracking-wide">{{ step.name }}</span>
                </span>
              </span>
            </a>

            <!-- Status Current -->
            <a v-else-if="step.status === 'current'" aria-current="step">
              <!-- <span class="absolute top-0 left-0 w-1 h-full bg-blue-500 lg:w-full lg:h-1 lg:bottom-0 lg:top-auto" aria-hidden="true" /> -->
              <span :class="[stepIdx !== 0 ? 'lg:pl-9' : '', 'px-6 py-5 flex items-start text-sm font-medium']">
                <span class="flex-shrink-0">
                  <span class="w-10 h-10 flex items-center justify-center border-2 border-blue-500 rounded-full">
                    <span class="font-medium text-blue-500">{{ step.id }}</span>
                  </span>
                </span>
                <span class="mt-0.5 ml-4 min-w-0 flex flex-col self-center">
                  <span class="dark:text-white text-sm font-medium text-blue-500 tracking-wide">{{ step.name }}</span>
                </span>
              </span>
            </a>

            <!-- Status Upcoming -->
            <a v-else class="group">
              <span class="absolute top-0 left-0 w-1 h-full bg-transparent lg:w-full lg:h-1 lg:bottom-0 lg:top-auto" aria-hidden="true" />
              <span :class="[stepIdx !== 0 ? 'lg:pl-9' : '', 'px-6 py-5 flex items-start text-sm font-medium']">
                <span class="flex-shrink-0">
                  <span class="w-10 h-10 flex items-center justify-center border-2 border-dark-100 rounded-full">
                    <span class="font-medium text-dark-300">{{ step.id }}</span>
                  </span>
                </span>
                <span class="mt-0.5 ml-4 min-w-0 flex flex-col self-center">
                  <span class="dark:text-dark-200 text-sm font-medium text-dark-300 tracking-wide">{{ step.name }}</span>
                </span>
              </span>
            </a>

          </div>
        </li>
      </ol>
      <div v-show="!hideShadows && (scrollIn == 'left' || scrollIn == 'middle') && (steps.length)" class="absolute right-0 top-0 h-full bg-dark-200/40 w-1 blur-sm"></div>
    </nav>
  </div>
</template>