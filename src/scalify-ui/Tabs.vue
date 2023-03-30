<script lang="ts">

import { ref , defineComponent } from 'vue';

// interface TabType{ value: string; name: string;}[]

export default defineComponent({


  props: {
    tabs: {
      required: true,
      type: Array,
      default: []
    }
  },

  setup(props, { emit }){

    let currentTabIndex = ref<number>(0);

    function selectTab(indexTab: number) {

      props.tabs.map((tab, index) => {

        if (indexTab == index) {

          currentTabIndex.value = index
          emit('change', {tab:tab, index:index});
        }

      })

    }

    return { selectTab , currentTabIndex }

  }

})

</script>


<template>
  <div class="flat-card rounded-b-none px-6 border-b dark:border-dark-400">
    <nav class="-mb-px flex space-x-8" aria-label="Tabs">
      <a v-for="(tab, indexTab) in tabs" :key="indexTab" @click="selectTab(indexTab)" :class="[currentTabIndex == indexTab ? 'border-yellow-500' : 'border-transparent', 'hover:cursor-pointer dark:text-dark-100 text-dark-400 whitespace-nowrap flex py-3 px-1 font-medium text-sm']" :aria-active="tab.active ? 'page' : undefined">
        {{ tab.name }}
      </a>
    </nav>
  </div>
</template>