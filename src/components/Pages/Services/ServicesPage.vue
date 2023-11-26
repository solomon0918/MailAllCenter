<script setup>
  import { ref, markRaw } from 'vue';
  import { useHead } from '@unhead/vue';

  import ServicesBanner from '../../../assets/services-banner.jpg';
  import FingerprintScanSVG from '../../../assets/fingerprint-scan.svg';
  import MailPinSVG from '../../../assets/mail-pin.svg';
  import PackageThinSVG from '../../../assets/package-thin.svg';
  import FileLockLightSVG from '../../../assets/file-lock-light.svg';

  import { 
    FwbHeading,
    FwbCard,
  } from 'flowbite-vue';

  useHead({
    title: 'Notary Live Scan Center - Services',
    meta: [
      {
        name: 'description',
        content: "Discover Notary Live Scan Center's comprehensive live scan fingerprinting services. Our certified notaries provide secure, swift solutions for background checks, licensing, and employment needs. Trust our expertise for professional results."
      }
    ]
  });

  const services = ref([
    {
      id: 1,
      title: 'Live Scan Fingerprintng',
      image: markRaw(FingerprintScanSVG),
      description: 'Donec a eros non quam rhoncus facilisis. In bibendum porttitor interdum.',
    },
    {
      id: 2,
      title: 'Mail Services',
      image: markRaw(MailPinSVG),
      description: 'Donec a eros non quam rhoncus facilisis. In bibendum porttitor interdum.'
    },
    {
      id: 3,
      title: 'Package Services',
      image: markRaw(PackageThinSVG),
      description: 'Donec a eros non quam rhoncus facilisis. In bibendum porttitor interdum.',
    },
    {
      id: 4,
      title: 'Notary Services',
      image: markRaw(FileLockLightSVG),
      description: 'Donec a eros non quam rhoncus facilisis. In bibendum porttitor interdum.'
    },
  ]);
</script>

<template>
  <section
    class="h-[500px] sm:px-8"
    :style="{ 
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${ServicesBanner})`, 
      backgroundRepeat: 'no-repeat', 
      backgroundPosition: 'center', 
      backgroundSize: 'cover' }">
    <div class="h-full flex items-center">
      <fwb-heading tag="h1" class="text-white text-bold uppercase text-center tracking-[8px]">Our Services</fwb-heading>
    </div>
  </section>
  <section class="container mx-auto pt-[30px] pb-[80px]">
    <div class="sm:px-8 grid sm:grid-cols-2 grid-cols-1 gap-8 justify-items-center">
      <fwb-card
        v-for="service in services"
        :key="service.id"
        variant="horizontal"
        
      >
        <div class="flex items-center space-x-4 py-[10px] px-[40px]">
          <div class="flex justify-center">
            <component :is="service.image" />
          </div>
          <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {{ service.title }}
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              {{ service.description }}
            </p>
          </div>
        </div>
      </fwb-card>
    </div>
  </section>
  <hr class="py-[30px]"/>
</template>