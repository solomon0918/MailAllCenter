<script setup>
  import { ref } from 'vue';
  import { useHead } from '@unhead/vue';

  import FAQBanner from '../../../assets/faq-banner.jpg'

  import { 
    FwbHeading,
    FwbAccordion,
    FwbAccordionHeader,
    FwbAccordionContent,
    FwbAccordionPanel,
  } from 'flowbite-vue';

  useHead({
    title: 'Notary Live Scan Center - FAQ',
    meta: [
      {
        name: 'description',
        content: "Explore comprehensive FAQs at Notary Live Scan Center, answering queries on background checks, licensing, fees, and scheduling. Get informed and simplify your fingerprinting process with our detailed answers."
      }
    ]
  });
  
  const faqs = ref([
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      content: ''
    },
    {
      id: 2,
      title: 'Donec a eros non quam rhoncus facilisis. In bibendum porttitor interdum.',
      content: ''
    },
    {
      id: 3,
      title: 'Maecenas at euismod purus, in fringilla mi. Praesent semper sem elit, a suscipit dolor gravida quis.',
      content: ''
    },
    {
      id: 4,
      title: 'Pellentesque cursus enim ac sem aliquet, in lobortis augue feugiat.',
      content: ''
    },
    {
      id: 5,
      title: 'Praesent imperdiet pulvinar libero non rutrum. Pellentesque habitant morbi tristique senectus et netus et.',
      content: ''
    },
    {
      id: 6,
      title: 'Suspendisse mattis vehicula lorem nec condimentum.',
      content: ''
    },
    {
      id: 7,
      title: 'Nunc ultricies gravida urna, varius congue risus facilisis et.',
      content: ''
    },
    {
      id: 8,
      title: 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      content: ''
    },
  ]);
</script>

<template>
  <section
    class="h-[500px] sm:px-8"
    :style="{ 
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${FAQBanner})`, 
      backgroundRepeat: 'no-repeat', 
      backgroundPosition: 'center', 
      backgroundSize: 'cover' }">
    <div class="h-full flex items-center">
      <fwb-heading tag="h1" class="text-white text-bold uppercase text-center">Frequently Asked Questions</fwb-heading>
    </div>
  </section>
  <section class="container mx-auto pt-[30px] pb-[80px]">
    <div class="sm:px-8">
      <fwb-heading tag="h2" class="text-primary_dark text-bold uppercase pb-6 !text-left px-[15px]">General</fwb-heading>
      <fwb-accordion flush :open-first-item="false">
        <fwb-accordion-panel v-for="faq in faqs" :key="faq.id">
          <fwb-accordion-header>{{ faq.title  }}</fwb-accordion-header>
          <fwb-accordion-content>
            {{  faq.content  }}
          </fwb-accordion-content>
        </fwb-accordion-panel>
      </fwb-accordion>
    </div>
  </section>
  <hr class="py-[30px]"/>
</template>