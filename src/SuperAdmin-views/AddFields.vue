<template>
  <div class="flex ml-9 mb-8">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10 text-[#11230a]">
  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clip-rule="evenodd" />
</svg>

            <span class="flex inter font-bold-900 pt-2 pl-4 text-2xl tracking-wide ">Add Field</span>
        </div>
    <Form></Form>
  </template>
  <script>
  import Form from '../components/Form.vue';
  export default{
  
      components:{
          Form,
      },
    }
      </script>