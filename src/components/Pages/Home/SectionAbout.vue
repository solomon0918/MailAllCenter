<script setup>
  import { FwbImg, FwbP, FwbHeading } from 'flowbite-vue';

  import AboutBanner from '../../../assets/about-banner.png'
</script>

<template>
  <section class="container mx-auto py-[80px]">
    <div class="sm:px-8 flex flex-col space-y-8">
      <fwb-heading tag="h2" class="font-bold uppercase text-primary_dark text-center">Who are we</fwb-heading>
      <div class="grid grid-cols-2 gap-1">
        <div>
          <fwb-p class="py-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a eros non quam rhoncus facilisis.
          </fwb-p>
          <fwb-p class="py-8">
            In bibendum porttitor interdum. Nunc at pulvinar lacus. Duis dignissim interdum justo et consectetur. Maecenas at euismod purus, in fringilla mi. Praesent semper sem elit, a suscipit dolor gravida quis. Pellentesque cursus enim ac sem aliquet, in lobortis augue feugiat.
          </fwb-p>
          <fwb-p class="py-8">
            Praesent imperdiet pulvinar libero non rutrum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse mattis vehicula lorem nec condimentum. Nunc ultricies gravida urna, varius congue risus facilisis et. 
          </fwb-p>
          <fwb-p>
            Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam at elit aliquet, eleifend purus at, elementum dui. Aenean id dolor vitae ipsum iaculis vulputate eu non felis. In pellentesque luctus euismod. Morbi tempor felis id eleifend ullamcorper.
          </fwb-p>
        </div>

        <div class="flex justify-center">
          <fwb-img alt="who-are-we" :src="AboutBanner"></fwb-img>
        </div>
      </div>
    </div>
  </section>
</template>