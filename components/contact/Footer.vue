<template>
  <footer class="bg-dark-blue">
    <NuxtImg
      class="logo"
      src="/images/Iconic-Assistants-Logo.svg"
      alt="Iconic Assistants Logo" />
  </footer>
</template>

<style scoped>
  footer {
    padding: 1.875rem 1rem;
  }

  .logo {
    width: 6.25rem;
  }

  @media (width >= 700px) {
    footer {
      padding: 2.5rem;
    }

    .logo {
      width: 9.375rem;
    }
  }

  @media (width >= 1080px) {
    footer {
      padding: 3.75rem 5rem !important;
    }
  }

  @media (width >= 1440px) {
    footer {
      padding: 3.75rem 8rem !important;
    }

    .logo {
      width: 11rem;
    }
  }
</style>
