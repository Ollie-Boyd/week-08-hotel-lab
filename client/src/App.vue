<template>
  <div>
    <h1> Hotel Codifornia </h1>
    <bookings-list></bookings-list>
    <booking-form></booking-form>
  </div>
</template>

<script>

import BookingsList from "./components/BookingsList.vue"
import BookingForm from "./components/BookingForm.vue"

export default {
  name: 'app',
  components: {
    "bookings-list": BookingsList,
    "booking-form": BookingForm,
  }

}
</script>

<style>

</style>
