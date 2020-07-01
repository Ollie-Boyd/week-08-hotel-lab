<template>
    <ul>
        <li v-for=" (booking, index) in bookings" :key = "index">{{booking.name}}</li>
    </ul>
  
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

    }


}
</script>

<style>

</style>