
<script setup lang="ts">

const props = defineProps({
  titles: {
    type: Array,
    default: [],
  }
})

</script>
<template>
  <thead >
    <tr class="devide-border bg-white rounded-lg shadow-md ">
      <th v-for="(title, indexTitle) in titles" :key="indexTitle" scope="col" :class="[indexTitle == 0 ? 'py-3 pl-4 pr-3 sm:pl-6' : indexTitle == titles.length - 1 ? 'py-3 pl-3 pr-4 sm:pr-6' : 'px-3 py-3' ,'text-left text-xs font-semibold uppercase tracking-wide text-gray-500 font-inter first:rounded-tl-lg last:rounded-tr-lg']">{{title}}</th>
    </tr>
  </thead>
</template>

