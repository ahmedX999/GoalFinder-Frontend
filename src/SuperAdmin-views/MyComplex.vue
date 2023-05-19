<template>
  <div class=" px-6 flex">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10 text-[#113d01]">
  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clip-rule="evenodd" />
</svg>

            <span class="flex inter font-bold-900 pt-2 pl-4 text-2xl tracking-wide ">Add Complex</span>
        </div>
    <div class="px-8 py-5 space-y-5 mt-7"><div class="px-4 sm:px-0">
            <h2 class="text-base font-semibold leading-7 text-gray-900">Change your Complex Infos</h2>
            <p class="mt-1 text-sm leading-6 text-gray-600">This information will be displayed publicly so be careful what you share.</p>
          </div>
        <div class=" gap-x-8 gap-y-8 md:grid-cols-3 m-auto">
    
        

          

          <form class="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2 w-auto">

            <div class="px-4 py-6 sm:p-8">
              <div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                <div class="sm:col-span-3">
                  <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Your Complex Id</label>
                  <div class="mt-2">
                    <input type="text" name="name" id="name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-border sm:text-sm sm:leading-6" v-model="apiData.id"/>
                  </div>
                </div>

                <div class="sm:col-span-6">
                  <label for="State" class="block text-sm font-medium leading-6 text-gray-900">Your Complex Name</label>
                  <div class="mt-2">
                    <input type="text" name="State" id="State" class="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-border sm:text-sm sm:leading-6" v-model="apiData.name" />
                  </div>
                </div>

                <div class="sm:col-span-6">
                  <label for="State" class="block text-sm font-medium leading-6 text-gray-900">Your Complex Address</label>
                  <div class="mt-2">
                    <input type="text" name="State" id="State" class="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-border sm:text-sm sm:leading-6" v-model="apiData.address"/>
                  </div>
                </div>

                <div class="sm:col-span-3">
                  <label for="State" class="block text-sm font-medium leading-6 text-gray-900">Your Complex Longitude</label>
                  <div class="mt-2">
                    <input type="text" name="State" id="State" class="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-border sm:text-sm sm:leading-6" v-model="apiData.longitude" />
                  </div>
                </div>

                <div class="sm:col-span-3">
                  <label for="State" class="block text-sm font-medium leading-6 text-gray-900">Your Complex Laltitude</label>
                  <div class="mt-2">
                    <input type="text" name="State" id="State" class="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-border sm:text-sm sm:leading-6" v-model="apiData.laltitude" />
                  </div>
                </div>





              </div>
            </div>


            <div class="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8 ">
            <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
            <button type="submit" class="rounded-md bg-border px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#8bd172] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border" v-on:click="addFeild()">Save</button>
          </div>


          </form>
  


        </div>




        



        
    </div>


    



      
       
  
    

    
</template>
<script>
import axios from 'axios';
export default{
  data() {
  return {
    apiData: {},
  };
},
  
mounted() {
  axios.get('http://localhost:8080/complexes/1').then(response => {
    this.apiData = response.data;
  }).catch(error => {
    console.log(error);
  });
},




  }

</script>