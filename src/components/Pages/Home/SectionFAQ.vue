<script setup>
  import { ref } from 'vue';

  import { 
    FwbA,
    FwbHeading,
    FwbAccordion,
    FwbAccordionHeader,
    FwbAccordionContent,
    FwbAccordionPanel,
  } from 'flowbite-vue';

  import ChevronRightSvg from '../../../assets/secondary-chevron-right.svg';

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
  <section class="container mx-auto py-[80px]">
    <div class="sm:px-8">
      <fwb-heading tag="h2" class="text-primary_dark text-bold uppercase text-center pb-6">Frequently Asked Questions</fwb-heading>
      <fwb-accordion flush :open-first-item="false">
        <fwb-accordion-panel v-for="faq in faqs" :key="faq.id">
          <fwb-accordion-header>{{ faq.title  }}</fwb-accordion-header>
          <fwb-accordion-content>
            {{  faq.content  }}
          </fwb-accordion-content>
        </fwb-accordion-panel>
      </fwb-accordion>
      <div class="flex justify-center">
        <fwb-a href="#" class="text-secondary uppercase font-semibold">
          <div class="flex items-center space-x-2">
            <span>More FAQS</span>
            <ChevronRightSvg />
          </div>
        </fwb-a>
      </div>
    </div>
  </section>
</template>