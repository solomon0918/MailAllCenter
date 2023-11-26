<script setup>
  import { inject } from 'vue';

  import SectionHero from '../../../assets/section-one.png'
  import ChevronRightSvg from '../../../assets/chevron-right.svg';

  import { FwbButton, FwbHeading } from 'flowbite-vue';

  const emitter = inject('emitter');

  function goToAppointment() {
    emitter.emit('goToAppointmentSection');
  }
</script>

<template>
  <section
    class="h-[548px] sm:px-8"
    :style="{ 
      backgroundImage: `url(${SectionHero})`, 
      backgroundRepeat: 'no-repeat', 
      backgroundPosition: 'center', 
      backgroundSize: 'cover' }">
    <div class="flex flex-col space-y-2 py-36 container mx-auto text-center sm:text-start">
      <fwb-heading tag="h1" class="text-white uppercase font-medium">Notary Live Scan <br/>Center</fwb-heading>
      <small class="text-white font-thin text-[13px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</small>
      <div class="flex h-[53px] justify-center sm:justify-normal">
        <fwb-button class="uppercase bg-primary w-[323px] justify-center" @click="goToAppointment">
        Book Appointment
          <template #suffix>
            <ChevronRightSvg />
          </template>
        </fwb-button>
      </div>
      <small class="text-white font-thin text-[15px]">For Walk-ins we are open at xx:xx - xx:xx </small>
    </div>
  </section>
</template>