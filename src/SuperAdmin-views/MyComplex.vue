<template>
    <div class="px-8 space-y-5">
        <div class="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3">
          <div class="px-4 sm:px-0">
            <h2 class="text-base font-semibold leading-7 text-gray-900">Add Logo</h2>
            <p class="mt-1 text-sm leading-6 text-gray-600">This information will be displayed publicly so be careful what you share.</p>
          </div>
    
          <form class="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
            <div class="px-4 py-6 sm:p-8">
              <div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
               
    
              
    
                <div class="col-span-full">
                  <label for="photo" class="block text-sm font-medium leading-6 text-gray-900">Logo</label>
                  <div class="mt-2 flex items-center gap-x-3">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-12 w-12 text-gray-300" aria-hidden="true">
                           <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
                      </svg>
  
                    <button type="button" class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Change</button>
                  </div>
                </div>
    
                <div class="col-span-full">
                  <label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900">Cover photo</label>
                  <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <div class="text-center">
                      <PhotoIcon class="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                      <div class="mt-4 flex text-sm leading-6 text-gray-600">
                        <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-semibold text-border focus-within:outline-none focus-within:ring-2 focus-within:ring-border focus-within:ring-offset-2 hover:text-[#8bd172]">
                          <span>Upload a file</span>
                          <input id="file-upload" name="file-upload" type="file" class="sr-only" />
                        </label>
                        <p class="pl-1">or drag and drop</p>
                      </div>
                      <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
              <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
              <button type="submit" class="rounded-md bg-border px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#8bd172] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border">Save</button>
            </div>
          </form>

          <div class="px-4 sm:px-0">
            <h2 class="text-base font-semibold leading-7 text-gray-900">Change your Complex Infos</h2>
            <p class="mt-1 text-sm leading-6 text-gray-600">This information will be displayed publicly so be careful what you share.</p>
          </div>

          <form class="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">

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