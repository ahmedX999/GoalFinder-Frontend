<template>
  <div class="px-8 space-y-5">
   <div class="flex">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10 text-[#113d01]">
                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
            </svg>
            <span class="flex inter font-bold-900 pt-2 pl-4 text-2xl tracking-wide ">Admin Dashboard</span>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div class="flat-card px-4 py-5 flex w-full">
                <div class=" ml-0 m-auto">
                    <h1 class="font-bold text-xl text-[#1a1a1a]">{{this.count}}</h1>
                    <p class="font-light text-[12px] text-gray-400">ACTIVE USERS <span class="font-normal text-sm">(LIFETIME)</span></p>
                </div>
            </div>
            <div class="flat-card px-4 py-3 flex w-full">
                <div class=" ml-0 m-auto">
                    <p class="font-light text-[12px] text-gray-400">Active users: <span class="font-bold text-dark-500 text-[16px] text-xl">19</span></p>
                    <p class="font-light text-[12px] text-gray-400">Churned users: <span class="font-bold text-[#1a1a1a] text-[16px] ">67</span><span class="font-bold text-[10px] text-[#1a1a1a] text-xl"></span></p>
                    <p class="font-light text-[12px] text-gray-400 mt-3">CHURN RATE <span class="font-normal text-[12px] text-sm ">(IN THIS PERIOD)</span></p>
                    
                </div>
            </div>
            <div class="flat-card px-4 py-3 flex w-full">
                <div class=" ml-0 m-auto">
                    <p class="font-light text-[12px] text-gray-400">Waiting reservation: <span class="font-bold text-[#1a1a1a] text-[16px] text-xl">{{ this.count1 }}</span></p>
                    <p class="font-light text-[12px] text-gray-400">Acceped reservation: <span class="font-bold text-[#1a1a1a] text-[16px] ">{{ this.count2 }}</span></p>
                    <p class="font-light text-[12px] text-gray-400">Refused reservation: <span class="font-bold text-[#1a1a1a] text-[16px] ">{{ this.count4 }}</span><span class="font-bold text-[10px] text-[#1a1a1a] text-xl"></span></p>
                    <p class="font-light text-[12px] text-gray-400 mt-3">RESERVATION RATE <span class="font-normal text-[12px] text-sm ">(IN THIS PERIOD)</span></p>
                    
                </div>
            </div>

        </div>
  </div>  
  

  
 
 



  
</template>

<script>
import TableWrapper from "@/src/scalify-ui/table/TableWrapper.vue";
import TableHeader from "@/src/scalify-ui/table/TableHeader.vue";
import TableBody from "@/src/scalify-ui/table/TableBody.vue";
import TableFooter from "@/src/scalify-ui/table/TableFooter.vue";
export default{

    
    components:{
       
    },

    data(){
        return {
          listfields: [],
          //loadingfields: false,
          error: false,
          //currentPage:1,
          //isLoadMore:false,
          //loadingLoadMore: false,
          count: Number,
          count1: Number,
          count2: Number,
          count4: Number,

        }
    },

    methods:{
        async feiledData(){
          // this.loadingfield = true;
          try {
            console.log("get account");
            const datafield = await this.apiGet(`${this.endpoint}/users/count`);
            this.count = datafield.data;
            const datafield1 = await this.apiGet(`${this.endpoint}/reservations/waiting/count`);
            this.count1 = datafield1.data;
            const datafield2 = await this.apiGet(`${this.endpoint}/reservations/accepted/count`);
            this.count2 = datafield2.data;
            const datafield4 = await this.apiGet(`${this.endpoint}/reservations/refused/count`);
            this.count4 = datafield4.data;
              //  if (this.listfields && this.listfields.length < datafield.data.count) {
              //     this.isLoadMore = true;
              //     this.currentPage = this.currentPage + 1;
              //  }
            
          } catch (error) {
            console.log(error);
          }

          // this.loadingfield = false;

        },
      
       
        
    },
    async mounted(){
      await  this.feiledData();

    }

}
</script>
