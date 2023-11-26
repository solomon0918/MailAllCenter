<script setup>
  import { useHead } from '@unhead/vue';

  import AboutPageBanner from '../../../assets/about-page-banner.jpg';

  import { 
    FwbHeading,
    FwbP,
  } from 'flowbite-vue';

  useHead({
    title: 'Notary Live Scan Center - About Us',
    meta: [
      {
        name: 'description',
        content: "Learn about Notary Live Scan Center - our dedicated team, mission, and commitment to providing top-quality live scan fingerprinting services. Experience our expertise and unwavering dedication to accuracy and security."
      }
    ]
  });
</script>

<template>
  <section
    class="h-[500px] sm:px-8"
    :style="{ 
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${AboutPageBanner})`, 
      backgroundRepeat: 'no-repeat', 
      backgroundPosition: 'center', 
      backgroundSize: 'cover' }">
    <div class="h-full flex items-center">
      <fwb-heading tag="h1" class="text-white text-bold uppercase text-center tracking-[8px]">About Us</fwb-heading>
    </div>
  </section>
  <section class="container mx-auto pt-[30px] pb-[80px]">
    <div class="sm:px-8">
      <fwb-heading tag="h2" class="text-primary_dark font-semibold uppercase pb-6 !text-left px-[15px]">Who Are We</fwb-heading>
      <div class="p-4 border-gray-200" style="border-width: 1px;">
        <fwb-p class="mb-4 first-letter:text-5xl first-letter:text-primary first-letter:pr-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ullamcorper facilisis turpis, eget efficitur dolor interdum ut. Vestibulum eleifend nibh nec arcu finibus gravida. Etiam et suscipit orci, laoreet accumsan magna. Nam rutrum lectus metus, at condimentum purus sodales sed. Etiam vitae ipsum lectus. Praesent eu magna quis elit pulvinar hendrerit. Donec eget blandit dui, ac cursus diam. Duis in massa rhoncus, porta justo a, tincidunt nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed non lacus elit. Aliquam auctor nibh vitae massa varius sollicitudin. Praesent hendrerit lacus id lectus suscipit molestie. Nam laoreet dui vitae mollis sodales. Aliquam elementum pellentesque laoreet. Nulla facilisi.
        </fwb-p>

        <fwb-p class="mb-4">
          Nulla faucibus rutrum ex, feugiat semper dui sollicitudin in. Aliquam tristique lobortis ornare. Phasellus commodo massa eros, eu tincidunt odio tincidunt ac. Praesent lacinia ante sit amet nisi feugiat convallis. Donec malesuada mauris quis varius ullamcorper. Maecenas sodales nec velit at viverra. Aliquam condimentum metus vitae eleifend venenatis. Maecenas vel porta magna. Fusce tempor varius enim, eget vulputate nisi luctus at. Donec turpis nisi, luctus eget ante ut, laoreet tristique felis. In laoreet sapien leo, eu lobortis lacus condimentum at. Quisque gravida nulla felis, eu vehicula orci vehicula ac.
        </fwb-p>
      </div>
    </div> 
  </section>
  <hr class="py-[30px]"/>
</template>