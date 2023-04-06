<template>
    <div class="px-2 md:px-5">
    <div class="flex pb-8">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-[#11230a]">
                <path d="M5.566 4.657A4.505 4.505 0 016.75 4.5h10.5c.41 0 .806.055 1.183.157A3 3 0 0015.75 3h-7.5a3 3 0 00-2.684 1.657zM2.25 12a3 3 0 013-3h13.5a3 3 0 013 3v6a3 3 0 01-3 3H5.25a3 3 0 01-3-3v-6zM5.25 7.5c-.41 0-.806.055-1.184.157A3 3 0 016.75 6h10.5a3 3 0 012.683 1.657A4.505 4.505 0 0018.75 7.5H5.25z" />
            </svg>
            <h1 class="flex inter font-bold-900 pl-4 text-2xl tracking-wide">Fields</h1>
        </div>
        <div class="">
            <div class="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
            <button type="submit" class="rounded-md bg-border px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#8bd172] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border" @click="goToAddFields()" >Add</button>
          </div>
           
</div>
    <div class="px-2 md:px-5">
        <div class="py-5">
            <TabField class=" "></TabField>
        </div>
    </div>
    </div>
</template>
<script>
import TabField from '../components/TabField.vue';
export default{

    components:{
        TabField,
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