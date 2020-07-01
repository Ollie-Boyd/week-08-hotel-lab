<template>
  <div>
      <booking-item v-for="(booking, index) in bookings" v-bind:booking="booking" :key="index"></booking-item>
  </div>
  
</template>

<script>
import { eventBus } from '@/main.js'
import BookingsService from '@/services/BookingsService.js'
import BookingItem from './BookingItem'

export default {
    data(){
        return {
            bookings: []
        }
    },
    mounted(){
        BookingsService.getBookings()
        .then(bookings => this.bookings = bookings);

        eventBus.$on('added-booking', (booking) => {
            this.bookings.push(booking)
        })

        eventBus.$on('deleted-booking', (id) =>{
            this.bookings = this.bookings.filter((bookingFromArr) => id !== bookingFromArr._id)
        })

        
    },
    components: {
        'booking-item': BookingItem
    }


}
</script>

<style>

</style>