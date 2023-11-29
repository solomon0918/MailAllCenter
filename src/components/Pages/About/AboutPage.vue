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
        <fwb-p class="first-letter:text-5xl first-letter:text-primary first-letter:pr-1">
          Are you looking for a reliable partner to handle all your packing, shipping, printing, and business service needs in Mountain View, CA? Look no further! Mail All Center, conveniently located at 809 Cuesta Dr, Suite B, Mountain View, CA, is your go-to destination.
        </fwb-p>

        <div class="py-2">
          <fwb-heading tag="h6" class="text-primary_dark">
            Our Comprehensive Services
          </fwb-heading>
          <fwb-p>
            Praesent imperdiet pulvinar libero non rutrum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse mattis vehicula lorem nec condimentum. Nunc ultricies gravida urna, varius congue risus facilisis et. 
          </fwb-p>
        </div>

        <div class="py-2">
          <fwb-heading tag="h6" class="text-primary_dark">
            Mailbox Rental with 24x7 Access
          </fwb-heading>
          <fwb-p>
            Secure and convenient mailbox rental services with round-the-clock access for your convenience. 
          </fwb-p>
        </div>

        <div class="py-2">
          <fwb-heading tag="h6" class="text-primary_dark">
            Live Scan Fingerprinting
          </fwb-heading>
          <fwb-p>
            Need fingerprinting services? We've got you covered with our live scan fingerprinting service.
          </fwb-p>
        </div>

        <div class="py-2">
          <fwb-heading tag="h6" class="text-primary_dark">
            Notary / Mobile Notary
          </fwb-heading>
          <fwb-p>
            Our certified notaries are here to assist you with important document notarization, and we even offer mobile notary services for your convenience.
          </fwb-p>
        </div>

        <div class="py-2">
          <fwb-heading tag="h6" class="text-primary_dark">
            Passport Photos
          </fwb-heading>
          <fwb-p>
            High-quality passport photos that meet all the necessary requirements.
          </fwb-p>
        </div>

        <div class="py-2">
          <fwb-heading tag="h6" class="text-primary_dark">
            FedEx and UPS Shipping (Domestic and International)
          </fwb-heading>
          <fwb-p>
            We're your trusted partners for shipping parcels domestically and internationally through FedEx and UPS.
          </fwb-p>
        </div>

        <div class="py-2">
          <fwb-heading tag="h6" class="text-primary_dark">
            Fax (National and International)
          </fwb-heading>
          <fwb-p>
            Send and receive faxes with ease, whether it's national or international.
          </fwb-p>
        </div>

        <div class="py-2">
          <fwb-heading tag="h6" class="text-primary_dark">
            Copy (Color and Black and White)
          </fwb-heading>
          <fwb-p>
            Our advanced printing technology can handle both color and black-and-white printing needs, large or small.
          </fwb-p>
        </div>

        <div class="py-2">
          <fwb-heading tag="h6" class="text-primary_dark">
            USPS Drop-off and Shipping
          </fwb-heading>
          <fwb-p>
            Convenient USPS drop-off and shipping services for your postal needs.
          </fwb-p>
        </div>

        <div class="py-2">
          <fwb-heading tag="h6" class="text-primary_dark">
            Greeting Cards
          </fwb-heading>
          <fwb-p>
            Browse our selection of greeting cards for every occasion.
          </fwb-p>
        </div>

        <div class="py-2">
          <fwb-heading tag="h6" class="text-primary_dark">
            Why Choose Mail All Center?
          </fwb-heading>
          <fwb-p>
            We understand that your time and budget are precious, which is why we focus on delivering Super-Star Customer Care. When you visit Mail All Center, you can expect: 
          </fwb-p>
          <ul>
            <li><strong>Expertise:</strong> Our dedicated and professionally trained team is ready to assist you with your unique needs.</li>
            <li><strong>Convenience:</strong> Save time and money by getting the right products and services under one roof, in a single visit.</li>
            <li><strong>Worldwide Shipping:</strong> We can pack and ship almost anything to nearly anywhere in the world, making global logistics a breeze.</li>
            <li><strong>Printing and Document Services:</strong> As Mountain View's premier copy, print, and document services center, we handle all your printing needs, whether it's a large-scale project or a single document.</li>
          </ul>
        </div>

        <fwb-p>
          Mail All Center is your one-stop-shop for dozens of business products and services that allow you to focus on what you do best, while we take care of the rest.
        </fwb-p>

        <div class="py-2">
          <fwb-heading tag="h6" class="text-primary_dark">
            Visit Us Today
          </fwb-heading>
          <fwb-p>
            Join the ranks of our satisfied customers who have experienced the convenience and professionalism of Mail All Center. Visit us at 809 Cuesta Dr, Suite B, Mountain View, CA, and discover how we can make your life easier.
          </fwb-p>
          <fwb-p>
            For more information or to get in touch with our team, please call us at <strong>650-961-4646</strong> or email us at <strong>mailallcenter1@gmail.com</strong>.
          </fwb-p>
        </div>
      </div>
    </div> 
  </section>
  <hr class="py-[30px]"/>
</template>