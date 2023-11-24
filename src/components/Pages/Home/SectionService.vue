<script setup>
  import CalendarSVG from '../../../assets/calendar.svg';
  import FileSVG from '../../../assets/file.svg';
  import FingerprintSVG from '../../../assets/fingerprint.svg';

  import { FwbCard } from 'flowbite-vue'
</script>

<template>
  <section class="container mx-auto px-2 sm:px-[250px]">
    <div class="grid sm:grid-cols-3 grid-cols-1 sm:gap-6 gap-3 justify-items-center">
      <fwb-card class="py-[80px]">
        <div class="flex justify-center">
          <CalendarSVG />
        </div>
        <div class="p-5 text-center">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Same Day Appointment
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            Donec a eros non quam rhoncus facilisis. In bibendum porttitor interdum.
          </p>
        </div>
      </fwb-card>
      <fwb-card class="py-[80px]">
        <div class="flex justify-center">
          <FingerprintSVG />
        </div>
        <div class="p-5 text-center">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Live Scan Fingerprinting
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            Donec a eros non quam rhoncus facilisis. In bibendum porttitor interdum.
          </p>
        </div>
      </fwb-card>
      <fwb-card class="py-[80px]">
        <div class="flex justify-center">
          <FileSVG />
        </div>
        <div class="p-5 text-center">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Notary Services
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            Donec a eros non quam rhoncus facilisis. In bibendum porttitor interdum.
          </p>
        </div>
      </fwb-card>
    </div>
  </section>
</template>