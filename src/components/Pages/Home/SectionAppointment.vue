<script setup>
  import { ref, inject } from 'vue';

  import AppointmentBanner from '../../../assets/appointment-banner.png';

  import { FwbImg, FwbHeading } from 'flowbite-vue';

  const appointment = ref();
  const emitter = inject('emitter');

  emitter.on('goToAppointmentSection', () => {
    appointment.value.scrollIntoView({ behavior: 'smooth' });
  });
</script>

<template>
  <section ref="appointment">
    <div class="container mx-auto">
      <fwb-heading tag="h2" class="font-bold uppercase text-primary_dark text-center pb-8">Book Appointment</fwb-heading>
    </div>
    <div class="grid grid-cols-2">
      <fwb-img alt="appointment-banner" :src="AppointmentBanner" class=" w-full"></fwb-img>
    </div>
  </section>
</template>