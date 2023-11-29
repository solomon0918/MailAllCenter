<script setup>
  import CalendarSVG from '../../../assets/calendar.svg';
  import FileSVG from '../../../assets/file.svg';
  import FingerprintSVG from '../../../assets/fingerprint.svg';

  import { FwbCard } from 'flowbite-vue'
</script>

<template>
  <section class="container mx-auto px-2 sm:px-[250px]">
    <div class="grid sm:grid-cols-3 grid-cols-1 sm:gap-6 gap-3 justify-items-center">
      <fwb-card class="py-[50px]">
        <div class="flex justify-center">
          <CalendarSVG />
        </div>
        <div class="p-5 text-center">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Same Day Appointment
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            Mail All Center is your one-stop-shop for dozens of business products and services that allow you to focus on what you do best, while we take care of the rest.
          </p>
        </div>
      </fwb-card>
      <fwb-card class="py-[50px]">
        <div class="flex justify-center">
          <FingerprintSVG />
        </div>
        <div class="p-5 text-center">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Live Scan Fingerprinting
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            Need fingerprinting services? We've got you covered with our live scan fingerprinting service.
          </p>
        </div>
      </fwb-card>
      <fwb-card class="py-[50px]">
        <div class="flex justify-center">
          <FileSVG />
        </div>
        <div class="p-5 text-center">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Notary Services
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            Our certified notaries are here to assist you with important document notarization, and we even offer mobile notary services for your convenience.
          </p>
        </div>
      </fwb-card>
    </div>
  </section>
</template>