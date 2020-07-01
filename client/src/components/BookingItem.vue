<template>
  <div class="booking-item">
      <p>Name: {{booking.name}}</p>
      <p>Email: {{booking.email}}</p>
      <p>Checked in? {{booking.isCheckedIn}}</p>
      <label for="delete-button">Delete</label><br>
      <button id="delete-button" type="button" class="delete-btn" v-on:click="deleteBooking"></button>
      <br>
    </div>
</template>

<script>
import { eventBus } from '@/main.js'
import BookingsService from '@/services/BookingsService.js'

export default {
    name: "BookingItem",
    props: ['booking'],
    methods: {
        deleteBooking(){
            BookingsService.deleteBooking(this.booking._id)
            .then(() => eventBus.$emit('deleted-booking', this.booking._id))
        }
    }


}
</script>

<style>

</style>