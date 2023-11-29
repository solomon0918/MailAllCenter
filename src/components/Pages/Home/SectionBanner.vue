<script setup>
  import SectionHero from '../../../assets/section-one.png'

  import { FwbHeading, FwbAlert } from 'flowbite-vue';
</script>

<template>
  <section
    class="h-[548px] sm:px-8"
    :style="{ 
      backgroundImage: `url(${SectionHero})`, 
      backgroundRepeat: 'no-repeat', 
      backgroundPosition: 'center', 
      backgroundSize: 'cover' }">
    <div class="flex flex-col space-y-2 py-36 container mx-auto text-center sm:text-start items-center sm:items-start">
      <fwb-heading tag="h1" class="text-white uppercase font-medium">Notary Live Scan <br/>Center</fwb-heading>
      <small class="text-white font-thin text-[15px]">Welcome to Mail All Center - Your Trusted Resource in Mountain View, CA</small>
      <fwb-alert class="border-t-4 rounded-none max-w-fit" type="success">
        <p class=" font-medium text-primary_dark">For Walk-ins we are open at xx:xx - xx:xx</p>
      </fwb-alert>
    </div>
  </section>
</template>