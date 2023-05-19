<template>
    <div class="px-2 md:px-5">
    <div class="flex pb-8">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-[#113d01] shrink-0">
                                <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
                            </svg>
            <h1 class="flex inter font-bold-900 pl-4 text-2xl tracking-wide">Users</h1>
        </div>
        <div class="">
            <div class="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
            <button type="submit" class="rounded-md bg-border px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#8bd172] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border" @click="goToAddFields()" >All</button>
            <button type="submit" class="rounded-md bg-border px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#8bd172] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border" @click="goToAddFields()" >Paid</button>
            <button type="submit" class="rounded-md bg-border px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#8bd172] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border" @click="goToAddFields()" >Not Paid</button>
          </div>
           
</div>
    <div class="px-2 md:px-5">
        <div class="py-5">
            <TabUsers class=" "></TabUsers>
        </div>
    </div>
    </div>
</template>
<script>
import TabUsers from '../components/TabUsers.vue';
export default{

    components:{
        TabUsers,
    },

    data(){
        return{
         

        }
    },
    methods:{
        goToAddFields(){
          this.$router.push("/AddFields");

        }
    }
    

}

</script>