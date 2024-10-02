<template>
  <header class="headerGetStarted sticky top-0">
    <NuxtImg
      class="logo"
      src="/images/Iconic-Assistants-Logo.svg"
      alt="Iconic Assistants Logo" />
    <button @click="dialogHubspot = true" class="primaryButton">
      <div>
        <p>Get Started</p>
      </div>
    </button>
    <ContactModal
      :is-open="dialogHubspot"
      @update:is-open="dialogHubspot = $event" />
  </header>
</template>

<script setup>
  import { ref } from "vue";

  const dialogHubspot = ref(false);
</script>

<style scoped>
  .headerGetStarted {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #0a132a;
    padding: 1.125rem 1rem;
    z-index: 5;
  }

  .logo {
    width: 6.25rem;
  }

  .primaryButton {
    font-size: 0.875rem !important;
  }

  @media (width >= 700px) {
    .headerGetStarted {
      padding: 1.125rem 2.5rem;
    }

    .logo {
      width: 8.125rem;
    }
  }

  @media (width >= 1080px) {
    .headerGetStarted {
      padding: 1.156rem 5rem;
    }

    .primaryButton {
      font-size: 1.25rem !important;
    }
  }

  @media (width >= 1440px) {
    .headerGetStarted {
      padding: 1.156rem 8rem;
    }

    .logo {
      width: 9rem;
    }
  }
</style>
