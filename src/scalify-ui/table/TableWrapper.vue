<template>
  <div class="flex flex-col">
    <div class="overflow-x-auto">
      <div class="min-w-full align-middle">
        <div class="border border-border rounded-lg">
          <div class="relative overflow-hidden" >
            <div v-if="showShadows && scrollIn && scrollIn !== 'left'" class="h-full w-8 absolute left-0" style="box-shadow: inset 5px 0 5px rgb(42 140 255 / 20%); height: calc(100% + 20px); bottom: 0;"></div>
            <div class=" overflow-x-auto" id="table-body">
              <table class="min-w-full divide-y divide-border" id="table-row">
                <slot name="header"></slot>
                <slot name="body"></slot>
              </table>
            </div>
            <div v-if="showShadows && scrollIn && scrollIn !== 'right'" class="h-full w-8 absolute right-0" style="box-shadow: inset -5px 5px 5px rgb(42 140 255 / 20%); height: calc(100% + 20px); bottom: 0;"></div>
          </div>
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default{

    name: "TableWrapper",
    components:{

    },

    data(){
        return {
          showShadows: false,
          scrollIn: "left",
        }
    },

    methods:{
        getScrollPos({ target: { scrollLeft, clientWidth, scrollWidth } }) {
            var scroll = "left"

            if (parseInt(scrollLeft) == 0) {
                scroll = "left"
            }
            else if (parseInt(scrollLeft) + parseInt(clientWidth) < parseInt(scrollWidth)) {
                scroll = "middle"
            }
            if (parseInt(scrollLeft) + parseInt(clientWidth) >= parseInt(scrollWidth)) {
                scroll = "right"
            }
            this.scrollIn = scroll
        },
        handleShadows() {
            let container = document.getElementById("table-body")
            let row = document.getElementById("table-row")

            if (container && row) {
                if (parseInt(row.offsetWidth) > parseInt(container.offsetWidth)) {
                    this.showShadows = true
                }
                else {
                    this.showShadows = false
                }
            }
        },
    },
    async mounted(){

      let table = document.getElementById("table-body");
      if (table) {
          table.addEventListener("scroll", (e) => {
            this.getScrollPos(e)
            this.handleShadows()
          })
      }

    }

}
</script>

