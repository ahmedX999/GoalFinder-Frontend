<template>

<div class="mx-auto my-12 max-w-xs">
    <div v-if="loading" class="relative h-4">
      <div class="absolute inset-0 bg-deep-purple w-full h-full"></div>
      <div class="absolute inset-0 bg-deep-purple-light w-1/2 h-full"></div>
    </div>

    <img
      class="w-full h-48 object-cover" :src="photo" />

    <div class="bg-white p-4">
      <h2 class="text-lg font-medium mb-2">{{name}}</h2>

      <div class="flex items-center mb-2">
        <span class="mr-1">Sportive Complex</span>

        <i
          class="text-error mdi mdi-fire-circle-outline mdi-18px"
        ></i>
      </div>

      <div class="flex items-center mb-2">
        <div class="flex items-center">
          <i class="text-amber mdi mdi-star mdi-18px mr-1"></i>
    <span class="text-grey text-sm">
      <span class="inline-block">
        4.5
      </span>
      <span class="inline-block">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block text-amber" viewBox="0 0 20 20" fill="currentColor">
          <path
            fill-rule="evenodd"
            d="M9.073 1.62a1.5 1.5 0 012.854 0l1.136 3.682a1.5 1.5 0 001.423 1.018l3.773.275a1.5 1.5 0 01.832 2.565l-2.944 2.18a1.5 1.5 0 00-.597 1.417l1.098 3.74a1.5 1.5 0 01-2.296 1.59l-3.416-2.506a1.5 1.5 0 00-1.87 0l-3.416 2.506a1.5 1.5 0 01-2.296-1.59l1.098-3.74a1.5 1.5 0 00-.597-1.417l-2.944-2.18a1.5 1.5 0 01.832-2.565l3.773-.275a1.5 1.5 0 001.423-1.018l1.136-3.682z"
            clip-rule="evenodd"
          />
        </svg>
      </span>
    </span>
        </div>
      </div>

      <div class="mb-4 text-sm text-secondary">
        A partir de 20 MAD / Personne
      </div>

      <p class="text-sm mb-4">
        {{description}}
      </p>

      <hr class="my-1"/>

      <h3 class="text-sm font-medium mt-2 mb-1">Availability</h3>

      <div class="flex flex-wrap mt-2">
        <div class="mr-2 mb-2">
          <span class="px-2 py-1 border rounded-full cursor-pointer hover:bg-primary-light">
            5:30PM
          </span>
        </div>

        <div class="mr-2 mb-2">
          <span class="px-2 py-1 border rounded-full cursor-pointer hover:bg-primary-light">
            7:30PM
          </span>
        </div>

        <div class="mr-2 mb-2">
          <span class="px-2 py-1 border rounded-full cursor-pointer hover:bg-primary-light">
            8:00PM
          </span>
        </div>

        <div class="mr-2 mb-2">
          <span class="px-2 py-1 border rounded-full cursor-pointer hover:bg-primary-light">
            9:00PM
          </span>
        </div>
      </div>

      <div class="mt-4 text-center">
        <button
          class="py-2 px-4 bg-deep-purple-lighten-2 text-white rounded-lg hover:bg-deep-purple"
          @click="reserve"
        >
          Reserve
        </button>
      </div>
    </div>
  </div>


      
</template>



<script>
  export default {
    data: () => ({
      loading: false,
      selection: 1,
      complexes:[],
    }),

    mounted(){
        this.fetchData();
    },

    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    },

    props: {
    name: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },


  }
</script>