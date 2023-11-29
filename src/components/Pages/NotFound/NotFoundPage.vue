<script setup>
  import ChevronRightSvg from '../../../assets/chevron-right.svg';

  import { FwbButton } from 'flowbite-vue';
</script>

<template>
  <div class="bg-gray-200 h-screen mb-7">
    <div class="container mx-auto px-10 h-full">
      <div
        class="flex flex-col h-full justify-center items-center content-center">
        <div class="text-center">
          <div class="bg-white px-20 p-16">
            <h1 class="!text-9xl text-primary_light">404</h1>
            <h2 class=" uppercase text-center font-bold">Opps! Page not found</h2>
            <p class="py-3">Sorry, the page you're looking for doesn't exist. If you think something is broken, please contact us.</p>
            <div class="flex space-x-4 items-center py-3 justify-center">
              <fwb-button href="/" tag="router-link" class="bg-primary uppercase">
                Return Home
                <template #suffix>
                  <ChevronRightSvg />
                </template>
              </fwb-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>