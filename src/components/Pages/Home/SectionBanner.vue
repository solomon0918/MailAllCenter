<script setup>
  import SectionHero from '../../../assets/section-one.png'
  import ChevronRightSvg from '../../../assets/chevron-right.svg';

  import { FwbButton, FwbHeading } from 'flowbite-vue'
</script>

<template>
  <section
    class="h-[548px] sm:px-8"
    :style="{ 
      backgroundImage: `url(${SectionHero})`, 
      backgroundRepeat: 'no-repeat', 
      backgroundPosition: 'center', 
      backgroundSize: 'cover' }">
    <div class="flex flex-col space-y-2 py-36 container mx-auto">
      <fwb-heading tag="h1" class="text-white uppercase font-medium">Mail All Center</fwb-heading>
      <small class="text-white font-thin text-[13px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</small>
      <div class="flex h-[53px]">
        <fwb-button class="uppercase bg-primary w-[323px] justify-center">
        Book Appointment
        <template #suffix>
          <ChevronRightSvg />
        </template>
      </fwb-button>
      </div>
    </div>
  </section>
</template>