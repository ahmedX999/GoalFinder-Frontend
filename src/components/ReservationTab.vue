<template>
  <div class="">
            <div class="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
            <button type="submit" class="rounded-md bg-border px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#8bd172] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border" @click="this.goToAll()" >Waiting</button>
            <button type="submit" class="rounded-md bg-border px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#8bd172] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border" @click="goToReserved()" >reserved</button>
            <button type="submit" class="rounded-md bg-border px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#8bd172] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border" @click="goToRefused()" >refused</button>
          </div>
           
</div>
<div class="px-2 md:px-5">
        <div class="py-5">
    <TableWrapper>
      <template v-slot:header >
        <TableHeader :titles="['ID', 'DATE', 'TIME', 'NUMBER OF PLAYERS', 'TOTAL PRICE', 'ACTIONS']" class="bg-body scrollbar-hide" ></TableHeader>
      </template>
      <template v-slot:body>
        <TableBody>
          <tr v-for="(field, indexfield) in listfields" :key="indexfield">
            <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6" >{{field.id}}</td>
            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 max-w-xs truncate ..." :title="field.reservationDate">{{field.reservationDate}}</td>
            
            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"> {{field.reservationTime}}</td>
            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"> {{field.numberOfPlayers}}</td>
            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"> {{field.totalPrice}} MAD</td>
              <td class=" py-4 text-sm  max-w-xs  right-0"> 
                <button class="pl-4" @click="deleteField(field.id)">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-green-500">
                  <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                </svg>
          
            </button>
              <button class="" v-on:click="goToAddFields()">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 ml-5 text-red-500">
                  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clip-rule="evenodd" />
                </svg>

            </button>
           
          </td>

          </tr>
          <!-- <tr v-else-if="!loadingfield && !listfields.length">
            <td colspan="6" class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">No Data Found</td>
          </tr>
          <tr v-else-if="loadingfield">
            <td colspan="6" class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center"><Loader></Loader></td>
          </tr> -->

        </TableBody>
      </template>
      <template v-slot:footer>
          <TableFooter class="sticky">
            <div class="basis-1/5">
              <button class="['bg-body border border-border rounded-xl btn-xl w-[100%] flex']"  >Load More</button>
            </div>
          </TableFooter>
      </template>
    </TableWrapper>
    </div>
    </div>
</template>
<script>
import TableWrapper from "@/src/scalify-ui/table/TableWrapper.vue";
import TableHeader from "@/src/scalify-ui/table/TableHeader.vue";
import TableBody from "@/src/scalify-ui/table/TableBody.vue";
import TableFooter from "@/src/scalify-ui/table/TableFooter.vue";
export default{

    name: "ReservationTab",
    components:{
        TableWrapper,
        TableHeader,
        TableBody,
        TableFooter,
    },

    data(){
        return {
          listfields: [],
          //loadingfields: false,
          error: false,
          //currentPage:1,
          //isLoadMore:false,
          //loadingLoadMore: false,
        }
    },

    methods:{
        async reservationData(){
          // this.loadingfield = true;
          try {
            console.log("get account");
            const datafield = await this.apiGet(`${this.endpoint}/reservations/waiting`);
            console.log("datafield: ", datafield);
            if (datafield && datafield.data) {
               this.listfields = datafield.data;

              //  if (this.listfields && this.listfields.length < datafield.data.count) {
              //     this.isLoadMore = true;
              //     this.currentPage = this.currentPage + 1;
              //  }
            }
          } catch (error) {
            console.log(error);
          }

          // this.loadingfield = false;

        },
        deleteField(id){
          window.alert("reservation accepted") 
          this.apiDelete(`${this.endpoint}/reservations/delete/${id}`);
          this.reservationData();
        
        },
        goToAddFields(){
            window.alert("reservation refused");

        },
        async goToAll(){
          try {
            this.listfields = null;
            console.log("get account");
            const datafield2 = await this.apiGet(`${this.endpoint}/reservations/waiting`);
            console.log("datafield: ", datafield2);
            if (datafield2 && datafield2.data) {
               this.listfields = datafield2.data;

              //  if (this.listfields && this.listfields.length < datafield.data.count) {
              //     this.isLoadMore = true;
              //     this.currentPage = this.currentPage + 1;
              //  }
            }
          } catch (error) {
            console.log(error);
          }

        },
        async goToRefused(){
          try {
            console.log("get account");
            const datafield2 = await this.apiGet(`${this.endpoint}/reservations/refused`);
            console.log("datafield: ", datafield2);
            if (datafield2 && datafield2.data) {
               this.listfields = datafield2.data;

              //  if (this.listfields && this.listfields.length < datafield.data.count) {
              //     this.isLoadMore = true;
              //     this.currentPage = this.currentPage + 1;
              //  }
            }
          } catch (error) {
            console.log(error);
          }

        },
        async goToReserved(){
          try {
            console.log("get account");
            const datafield2 = await this.apiGet(`${this.endpoint}/reservations/accepted`);
            console.log("datafield: ", datafield2);
            if (datafield2 && datafield2.data) {
               this.listfields = datafield2.data;

              //  if (this.listfields && this.listfields.length < datafield.data.count) {
              //     this.isLoadMore = true;
              //     this.currentPage = this.currentPage + 1;
              //  }
            }
          } catch (error) {
            console.log(error);
          }

        },
    },
    async mounted(){
      await  this.reservationData();

    }

}
</script>