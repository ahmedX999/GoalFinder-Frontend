<template>
    <div class="px-8 space-y-5">
   
      <div class="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3 pb-10">
        <div class="px-4 sm:px-0">
          <h2 class="text-base font-semibold leading-7 text-gray-900">Field Information</h2>
          <p class="mt-1 text-sm leading-6 text-gray-600">Use a permanent address.</p>
        </div>
  
        <form class="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
          <div class="px-4 py-6 sm:p-8">
            <div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div class="sm:col-span-3">
                <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Name</label>
                <div class="mt-2">
                  <input type="text" name="name" id="name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-border sm:text-sm sm:leading-6" v-model="name"/>
                </div>
              </div>
  
              <div class="sm:col-span-3">
                <label for="heure-fin" class="block text-sm font-medium leading-6 text-gray-900">Capacité</label>
                <div class="mt-2">
                  <input type="text" name="heure-fin" id="heure-fin" class="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-border sm:text-sm sm:leading-6" v-model="capacity"/>
                </div>
              </div>
  
              <div class="sm:col-span-4">
                <label for="price" class="block text-sm font-medium leading-6 text-gray-900">Price pour personne</label>
                <div class="mt-2">
                  <input id="price" name="price" type="text" autocomplete="name" class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-border sm:text-sm sm:leading-6" v-model="price" />
                </div>
              </div>
  
              <div class="sm:col-span-4">
                <label for="country" class="block text-sm font-medium leading-6 text-gray-900">City</label>
                <div class="mt-2">
                  <select id="country" name="country" a class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-border sm:max-w-xs sm:text-sm sm:leading-6">
                    <option>Marrakech</option>
                    <option>Agadir</option>
                    <option>Tanger</option>
                    <option>Fes</option>
                    <option>Safi</option>
                    <option>Casa</option>
                    <option>Rabat</option>
                  </select>
                </div>
              </div>
  
              <div class="col-span-full">
                <label for="State" class="block text-sm font-medium leading-6 text-gray-900">State</label>
                <div class="mt-2">
                  <input type="text" name="State" id="State" class="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-border sm:text-sm sm:leading-6" v-model="state" />
                </div>
              </div>
  
              <div class="sm:col-span-2 sm:col-start-1">
                <label for="city" class="block text-sm font-medium leading-6 text-gray-900">Numero</label>
                <div class="mt-2">
                  <input type="text" name="city" id="city" class="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-border sm:text-sm sm:leading-6" />
                </div>
              </div>
  
              <div class="sm:col-span-2">
                <label for="region" class="block text-sm font-medium leading-6 text-gray-900">State / Province</label>
                <div class="mt-2">
                  <input type="text" name="region" id="region" autocomplete="address-level1" class="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-border sm:text-sm sm:leading-6" />
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
  import axios from 'axios'
  export default{
    name: "Form",
    data(){
        return {
          capacity: 5,
          name: "",
          
          price: 0,
          state:"",
          
        }
    },
    methods:{
         addField(){
            let result = axios.post(`${this.endpoint}/fields/save`,{
                name: this.name,
                capacity: this.capacilty,
                price_perslot: this.price,
                state: this.state,
                capacity: 5,  
                name: "Terrain 1",
                price_perslot: 120,
                state: 1
            }
            
            )
            console.log("res", result.data);
        }
    }
   
  }
  </script>