<script setup>
  import { ref, markRaw } from 'vue';
  import { useHead } from '@unhead/vue';

  import ServicesBanner from '../../../assets/services-banner.jpg';
  import FingerprintScanSVG from '../../../assets/fingerprint-scan.svg';
  import MailPinSVG from '../../../assets/mail-pin.svg';
  import PackageThinSVG from '../../../assets/package-thin.svg';
  import FileLockLightSVG from '../../../assets/file-lock-light.svg';
  import CopySVG from '../../../assets/copy.svg';
  import DropOffShippingSVG from '../../../assets/dropoff-shipping.svg';
  import FaxSVG from '../../../assets/fax.svg';
  import PassportSVG from '../../../assets/passport.svg';
  import GreetingsCardSVG from '../../../assets/greetings-card.svg';

  import RibbonSection from '../../common/Ribbon/RibbonSection.vue';

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
      description: "Need fingerprinting services? We've got you covered with our live scan fingerprinting service.",
    },
    {
      id: 2,
      title: 'Mailbox Rental with 24x7 Access',
      image: markRaw(MailPinSVG),
      description: 'Secure and convenient mailbox rental services with round-the-clock access for your convenience.'
    },
    {
      id: 3,
      title: 'FedEx and UPS Shipping (Domestic and International)',
      image: markRaw(PackageThinSVG),
      description: "We're your trusted partners for shipping parcels domestically and internationally through FedEx and UPS.",
    },
    {
      id: 4,
      title: 'Notary / Mobile Notary',
      image: markRaw(FileLockLightSVG),
      description: 'Our certified notaries are here to assist you with important document notarization, and we even offer mobile notary services for your convenience.'
    },
    {
      id: 5,
      title: 'Passport Photos',
      image: markRaw(PassportSVG),
      description: 'High-quality passport photos that meet all the necessary requirements.'
    },
    {
      id: 6,
      title: 'Fax (National and International)',
      image: markRaw(FaxSVG),
      description: "Send and receive faxes with ease, whether it's national or international."
    },
    {
      id: 7,
      title: 'Copy (Color and Black and White)',
      image: markRaw(CopySVG),
      description: "Our advanced printing technology can handle both color and black-and-white printing needs, large or small."
    },
    {
      id: 8,
      title: 'USPS Drop-off and Shipping',
      image: markRaw(DropOffShippingSVG),
      description: "Convenient USPS drop-off and shipping services for your postal needs."
    },
    {
      id: 9,
      title: 'Greeting Cards',
      image: markRaw(GreetingsCardSVG),
      description: "Browse our selection of greeting cards for every occasion."
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
    <div class="sm:px-8 grid sm:grid-cols-3 grid-cols-1 gap-8 justify-items-center">
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
  <ribbon-section></ribbon-section>
  <hr class="py-[30px]"/>
</template>