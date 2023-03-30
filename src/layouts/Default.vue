<template>
  <!-- <div class=""> -->
      <Sidebar></Sidebar>
       
                 <!-- <div class="py-5 bg-body flex ">
                    <a href="#" class="ml-[120px]">
                        <img class="h-[40px]" src="@/src/img/logo2_PFA_1.png" alt="Description de l'image">
                        
                    </a>
                </div> -->
      <div style="width: calc(100% - 90px);" class="pt-[60px] bg-body h-full w-full min-h-screen ml-[90px]">
          <div class="container m-auto">
              <div class="w-full">
                  <slot></slot>
              </div>
          </div>
      </div>
  <!-- </div> -->
</template>

<script>
import Sidebar from '@/src/components/Sidebar.vue'
  export default{

      components:{
          Sidebar,
      }
  }

</script>