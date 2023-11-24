<script setup>
  import { FwbHeading, FwbA } from 'flowbite-vue';

  import FacebookSVG from '../../../assets/facebook.svg';
  import TwitterSVG from '../../../assets/twitter.svg';
  import LinkedInSVG from '../../../assets/linkedin.svg';
  import InstagramSVG from '../../../assets/instagram.svg';

  import PinSVG from '../../../assets/pin.svg';
  import EmailSVG from '../../../assets/email.svg';
  import PhoneSVG from '../../../assets/phone.svg';
</script>

<template>
  <footer>
    <div class="container mx-auto grid grid-cols-3 gap-3 pb-[80px]">
      <div class="flex flex-col space-y-4">
        <div class="flex flex-col space-y-3">
          <fwb-heading tag="h3" class="uppercase">Quick Links</fwb-heading>
          <fwb-a href="#" class=" text-gray_500">Home</fwb-a>
          <fwb-a href="#" class=" text-gray_500">Services</fwb-a>
          <fwb-a href="#" class=" text-gray_500">FAQs</fwb-a>
          <fwb-a href="#" class=" text-gray_500">About Us</fwb-a>
          <fwb-a href="#" class=" text-gray_500">Contact Us</fwb-a>
        </div>
        <div class="flex space-x-2">
          <fwb-a href="#"><FacebookSVG /></fwb-a>
          <fwb-a href="#"><TwitterSVG /></fwb-a>
          <fwb-a href="#"><LinkedInSVG /></fwb-a>
          <fwb-a href="#"><InstagramSVG /></fwb-a>
        </div>
      </div>
      <div class="col-span-2">
        <div class="flex flex-col space-y-4">
          <fwb-heading tag="h3" class="uppercase">Address & Contact </fwb-heading>

          <div class="flex space-x-2 items-baseline">
            <PinSVG />
            <p>Street Name 1234, Zip Code <br/> City, State, <br/> Country</p>
          </div>

          <div class="flex space-x-2 items-center">
            <EmailSVG />
            <p>office@yoursite.com</p>
          </div>

          <div class="flex space-x-2 items-center">
            <PhoneSVG />
            <p>(123)456-678</p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="border-t-2 border-t-gray_500">
      <div class="flex justify-between items-center py-4 container mx-auto">
        <p class="text-gray_500">Mail All Center, Live Scan Fingerprinting</p>
        <p class="text-gray_500">
          Copyright &copy; Mail All Center <br/> 2023 All rights reserved
        </p>
      </div>
    </div>
    
  </footer>
</template>