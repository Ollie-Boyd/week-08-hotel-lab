<template>
  <form v-on:submit="addBooking" method="post">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" required /><br>
      
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required /><br>


     <input type="radio" id="isCheckedIn" v-model="isCheckedIn" value="false">Not Checked In<br> 
      <input type="radio" id="isCheckedIn" v-model="isCheckedIn" value="true">Checked In <br>

      <input type="submit" value="Save booking" id="save">

     </form>
</template>

<script>
import { eventBus } from '@/main.js'
import BookingsService from '@/services/BookingsService.js'


export default {
    data(){
        return{
            name: "",
            email: "",
            isCheckedIn: ""
            
        }
    },
    methods: {

        addBooking(submitted){ 
            submitted.preventDefault()
            const booking = {
                name: this.name,
                email: this.email,
                isCheckedIn: this.isCheckedIn
            }
            BookingsService.postBooking(booking)
            .then(res => eventBus.$emit('added-booking', res))
        
    }
    }

}
</script>

<style>
.delete-btn{
    width: 30px;
    height: 30px;
}
</style>