<template>
    <div class="mx-auto max-w-xs">
        <div class="bg-white rounded-lg shadow-lg">

            <img src="/src/img/logo2_PFA_1.png" alt="">

          <h2 class="text-center text-2xl font-bold mt-8">User Registration</h2>

          <div class="p-8">

            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2" for="username">
                Username
              </label>
              <input class="border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" v-model="username" placeholder="Enter your username">
            </div>
            
           
            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2" for="password">
                Password
              </label>
              <input class="border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" v-model="password" placeholder="Enter your password">
            </div>

            <div class="mb-4">
              <input class="mr-2 leading-tight" id="terms" type="checkbox" v-model="terms">
              <label class="text-gray-700 font-bold" for="terms">
                I agree to site terms and conditions
              </label>
            </div>

          </div>

          <div class="bg-gray-200 px-8 py-4">
            <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"  v-on:click="addUser()">
              Complete Registration
              <i class="mdi mdi-chevron-right ml-2"></i>
            </button>
          </div>

        </div>
      </div>
</template>

<script>
  export default {
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      addUser() {
        const data = {
        username: this.username,
          password: this.password
        }
        fetch('http://localhost:8080/users/save', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok')
          }
          // TODO: handle successful response
        })
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error)
          // TODO: handle error
        })
      }
    }
  }
</script>