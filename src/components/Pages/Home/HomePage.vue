<script setup>
  import SectionBanner from './SectionBanner.vue';
  import SectionService from './SectionService.vue';
  import SectionAbout from './SectionAbout.vue';
  import SectionAppointment from './SectionAppointment.vue';
  import SectionFAQ from './SectionFAQ.vue';
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