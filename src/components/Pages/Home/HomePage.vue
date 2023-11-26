<script setup>
  import { useHead } from '@unhead/vue';

  import SectionBanner from './SectionBanner.vue';
  import SectionService from './SectionService.vue';
  import SectionAbout from './SectionAbout.vue';
  import SectionAppointment from './SectionAppointment.vue';
  import SectionFAQ from './SectionFAQ.vue';

  useHead({
    title: 'Notary Live Scan Center - Home',
    meta: [
      {
        name: 'description',
        content: "Welcome to Notary Live Scan Center, your trusted source for swift, secure live scan fingerprinting services. Our certified notaries ensure accurate results for background checks, licensing, and more. Experience efficiency and reliability today!"
      }
    ]
  });
</script>

<template>
  <section-banner></section-banner>
  <div class="mt-[-102px]">
    <section-service></section-service>
  </div>
  <section-about></section-about>
  <section-appointment></section-appointment>
  <section-FAQ></section-FAQ>
</template>