<template>
  <fwb-navbar>
    <template #logo>
      <fwb-a href="/" class="h-[70px]">
        <fwb-img :src="logo" width="110" height="120"></fwb-img>
      </fwb-a>
    </template>
    <template #default="{isShowMenu}">
      <fwb-navbar-collapse :is-show-menu="isShowMenu">
        <fwb-navbar-link link="/">
          <p class="text-[15px]">Home</p>
        </fwb-navbar-link>
        <fwb-navbar-link link="/services">
          <p class="text-[15px]">Services</p>
        </fwb-navbar-link>
        <fwb-navbar-link link="/faqs">
          <p class="text-[15px]">FAQS</p>
        </fwb-navbar-link>
        <fwb-navbar-link link="about-us">
          <p class="text-[15px]">About Us</p>
        </fwb-navbar-link>
        <fwb-navbar-link link="#" @click="goToContact">
          <p class="text-[15px]">Contact Us</p>
        </fwb-navbar-link>
      </fwb-navbar-collapse>
    </template>
  </fwb-navbar>
</template>

<script setup>
import { inject } from 'vue';

import {
  FwbNavbar,
  FwbNavbarCollapse,
  FwbNavbarLink,
  FwbImg,
  FwbA,
} from 'flowbite-vue'
import logo from '../../../assets/logo_transparent.png';

const emitter = inject('emitter');

function goToContact() {
  emitter.emit('goToContactSection');
}

</script>