<script setup>

</script>

<template>
  
  <component :is="layout">
  
  <RouterView />
</component>  
</template>

<script>
const default_layout = "default";
export default {
  data() {
    return {
      
    }
  },
  computed:{
    layout() {
      return `${this.$route.meta.layout || default_layout}-layout`;
    },
  }
}

</script>