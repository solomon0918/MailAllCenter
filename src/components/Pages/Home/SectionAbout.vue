<script setup>
  import { FwbImg, FwbP, FwbHeading } from 'flowbite-vue';

  import AboutBanner from '../../../assets/about-banner.png'
</script>

<template>
  <section class="container mx-auto py-[80px]">
    <div class="sm:px-8 px-4 flex flex-col space-y-8">
      <fwb-heading tag="h2" class="font-bold uppercase text-primary_dark text-center">Who are we</fwb-heading>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-1">
        <div>
          <fwb-heading tag="h5">
            Welcome to Mail All Center - Your Trusted Resource in Mountain View, CA
          </fwb-heading>
          <fwb-p class="py-4">
            Are you looking for a reliable partner to handle all your packing, shipping, printing, and business service needs in Mountain View, CA? Look no further! Mail All Center, conveniently located at 809 Cuesta Dr, Suite B, Mountain View, CA, is your go-to destination.
          </fwb-p>

          <div class="py-4">
            <fwb-heading tag="h6">
              Our Comprehensive Services
            </fwb-heading>
            <fwb-p>
              Praesent imperdiet pulvinar libero non rutrum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse mattis vehicula lorem nec condimentum. Nunc ultricies gravida urna, varius congue risus facilisis et. 
            </fwb-p>
          </div>

          <div class="py-4">
            <fwb-heading tag="h6">
              Mailbox Rental with 24x7 Access
            </fwb-heading>
            <fwb-p>
              Secure and convenient mailbox rental services with round-the-clock access for your convenience. 
            </fwb-p>
          </div>

          <div class="py-4">
            <fwb-heading tag="h6">
              Why Choose Mail All Center?
            </fwb-heading>
            <fwb-p>
              We understand that your time and budget are precious, which is why we focus on delivering Super-Star Customer Care 
            </fwb-p>
          </div>

          <fwb-p>
            Join the ranks of our satisfied customers who have experienced the convenience and professionalism of Mail All Center. Visit us at 809 Cuesta Dr, Suite B, Mountain View, CA, and discover how we can make your life easier.
          </fwb-p>
        </div>

        <div class="flex justify-center">
          <fwb-img alt="who-are-we" :src="AboutBanner"></fwb-img>
        </div>
      </div>
    </div>
  </section>
</template>