<template>
    <TableWrapper>
      <template v-slot:header >
        <TableHeader :titles="['ID', 'NAME', 'STATE', 'CAPACITY PER TEAM', 'PRICE PER PLACE', 'ACTIONS']" class="bg-body scrollbar-hide" ></TableHeader>
      </template>
      <template v-slot:body>
        <TableBody>
          <tr v-for="(field, indexfield) in listfields" :key="indexfield">
            <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6" >{{field.id}}</td>
            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 max-w-xs truncate ..." :title="field.nom">{{field.name}}</td>
            <td class="whitespace-nowrap py-4 text-sm text-gray-500">
              <div :class="['flex']">
                <span :class="[field.state == '0' ? 'bg-red-500' : field.etat == '1' ? 'bg-green-500' : 'bg-gray-500','w-2 h-2 rounded-full self-center flex']"></span>
                <span  v-if="field.state == '1'" class="pl-2 self-center">available</span>
                <span  v-else class="pl-2 self-center">unavailable</span>
              </div>
            </td>
            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"> {{field.capacity}}</td>
            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"> {{field.price_perslot}}</td>
              <td class=" py-4 text-sm  max-w-xs text-blue-500 right-0">
              <button class="" v-on:click="deleteField(field.id)">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-red-500 ">
                 <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clip-rule="evenodd" />
              </svg>
            </button>
            <button class="pl-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-blue-500 ml-4">
  <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
  <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
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
</template>
<script>
import TableWrapper from "@/src/scalify-ui/table/TableWrapper.vue";
import TableHeader from "@/src/scalify-ui/table/TableHeader.vue";
import TableBody from "@/src/scalify-ui/table/TableBody.vue";
import TableFooter from "@/src/scalify-ui/table/TableFooter.vue";
export default{

    name: "fields",
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
        async feiledData(){
          // this.loadingfield = true;
          try {
            console.log("get account");
            const datafield = await this.apiGet(`${this.endpoint}/fields/all`);
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
          if (window.confirm("Are you sure you want to delete this field?")) {
          this.apiDelete(`${this.endpoint}/fields/delete/${id}`);
          this.feiledData();
        }
        },
        
    },
    async mounted(){
      await  this.feiledData();

    }

}
</script>