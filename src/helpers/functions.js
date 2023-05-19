import axios from 'axios';

export default {

    data(){
        return{
            endpoint : 'http://localhost:8080',
            token : null,
        }
    },
    watch:{

    },
    computed:{


    },
   

    methods: {
        
        async apiGet(endpoint){
            console.log("this.endp: ",endpoint)
            try {
                const res = await axios.get(endpoint);
                console.log("res: ", res);
                
                return res

            } catch (error) {
                return error;
            }

        },
        async apiDelete(endpoint){
            console.log("this.endp: ",endpoint)
            try {
                await axios.delete(endpoint);
                
                

            } catch (error) {
                return error;
            }

        },
        async apiPut(endpoint){
            console.log("this.endp: ",endpoint)
            try {
                await axios.put(endpoint);

            } catch (error) {
                return error;
            }

        },
        
        
        

    },

};