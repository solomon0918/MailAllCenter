<template>
  <fwb-navbar>
    <template #logo>
      <img :src="logo" width="120" height="120" />
    </template>
    <template #default="{isShowMenu}">
      <fwb-navbar-collapse :is-show-menu="isShowMenu">
        <fwb-navbar-link link="/">
          Home
        </fwb-navbar-link>
        <fwb-navbar-link link="/services">
          Services
        </fwb-navbar-link>
        <fwb-navbar-link link="/faqs">
          FAQS
        </fwb-navbar-link>
        <fwb-navbar-link link="about-us">
          About Us
        </fwb-navbar-link>
        <fwb-navbar-link link="contact-us">
          Contact Us
        </fwb-navbar-link>
      </fwb-navbar-collapse>
    </template>
  </fwb-navbar>
</template>

<script setup>
import {
  FwbNavbar,
  FwbNavbarCollapse,
  FwbNavbarLink,
} from 'flowbite-vue'
import logo from '../../../assets/logo_transparent.png';
</script>