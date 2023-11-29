<script setup>
  import BokehBanner from '../../../assets/bokeh-bg.jpg';

  import {
    FwbHeading,
    FwbP,
  } from 'flowbite-vue';
</script>

<template>
  <div
    class="h-[220px] sm:px-8"
    :style="{ 
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${BokehBanner})`, 
      backgroundRepeat: 'no-repeat', 
      backgroundPosition: 'center', 
      backgroundSize: 'cover' }">
    <div class="h-full flex flex-col py-[40px]">
      <fwb-heading tag="h3" class="text-white uppercase font-medium text-center">Visit Us Today</fwb-heading>
      <fwb-p class="text-white py-2" align="center">
        Join the ranks of our satisfied customers who have experienced the convenience and professionalism of Mail All Center. Visit us at 809 Cuesta Dr, Suite B, Mountain View, CA, and discover how we can make your life easier.
      </fwb-p>
      <fwb-p class="text-white py-2" align="center">
        For more information or to get in touch with our team, please call us at <strong>650-961-4646</strong> or email us at <strong>mailallcenter1@gmail.com</strong>.
      </fwb-p>
    </div>
  </div>
</template>