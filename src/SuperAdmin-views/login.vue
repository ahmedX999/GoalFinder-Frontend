<template><div class="w-[350px] items-center m-auto ">
        <form>
            
            <a href="#" class="m-auto justify-center">
                        <img class="h-[50px]" src="@/src/img/logo2_PFA_1.png" alt="Description de l'image">
                        
                    </a>
            
            <input type="Email" class="w-full mt-10 h-10 border border-border rounded-md pl-4 hover:bg-white hover:border-blue-50  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 " placeholder="you@example.com">
            <input type="password" class="w-full mt-5 h-10 border border-border rounded-md pl-4 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 " >
            <button class="bg-[#113d01] w-full h-10 mt-5 text-white border-none rounded-lg hover:bg-[#e6ffe6]  " X type="submit"> SIGN IN</button>
            <!-- <button v-if="loading" :class="[loading ? 'disabled' : '', 'bg-blue-500 w-full h-10 mt-5 text-white border-none rounded-lg hover:bg-blue-400']" type="submit"> -->
                <!-- <Loader :isWhite="true"></Loader> -->
            <!-- </button> -->
            <!-- <p v-if="error" class="text-red-600 bg-red-100 p-3 w-full text-center mt-6 rounded-md">{{error}}</p> -->
        </form>

    </div>
</template>
<script>

import Loader from "@/src/scalify-ui/Loader.vue";
export default {
    name: "Login",

    components: {
        Loader
    },

   }


</script>