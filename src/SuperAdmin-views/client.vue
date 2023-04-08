<template>
    

  <h1 class="text-center text-6xl font-bold">Complexes List</h1> 


  <div class="flex flex-wrap">
    <div class="w-full md:w-1/2 px-2 mb-1" v-for="(complex, index) in complexes" :key="index">
      <ComplexeCard :name="complex.name" :photo="complex.photo" :description="complex.description" />
    </div>
  
  </div>







</template>

<script>

import ComplexeCard from '@/src/components/ComplexeCard.vue';
import axios from "axios";

  export default{

      components:{
        ComplexeCard,
      },
      data() {
    return {
      complexes: [],
    };
  },
  created() {
    axios
      .get("http://localhost:8080/complexes/all")
      .then((response) => (this.complexes = response.data))
      .catch((error) => console.log(error));
  },


  };

</script>