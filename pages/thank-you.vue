<template>
  <main class="w-full columnAlignCenter">
    <div class="w-full columnAlignCenter">
      <NuxtImg
        src="/images/Iconic-Assistants-Logo.svg"
        alt="Iconic Assistants Logo"
        class="logoThank"
      />
      <h1 class="text-center">
        Thank you for completing our form.
        <span>Our team will contact you shortly</span>
      </h1>
      <p class="text-center">
        In the meantime, feel free to explore more about how Iconic Assistants
        can empower your business.
      </p>
    </div>
    <ThankSwiper />
  </main>
</template>

<script setup>
definePageMeta({
  layout: "no-default",
});
</script>

<style scoped>
main {
  height: 100vh;
  gap: 1.5rem;
  background: #0d1529;
}

main > div:first-of-type {
  gap: 1.5rem;
  padding: 3.75rem 1rem 0 1rem;
}

.logoThank {
  width: 6.25rem;
}

h1 {
  font-size: 1.063rem;
}

@media (width >=700px) {
  main {
    gap: 2rem;
  }

  main > div:first-of-type {
    gap: 2rem;
    padding: 5rem 2.5rem 0 2.5rem;
  }

  .logoThank {
    width: 7.5rem;
  }

  h1 {
    font-size: 1.5rem;
  }

  main > div:first-of-type p {
    padding: 0 1rem
  }
}

@media (width >=1080px) {
  main {
    justify-content: center;
    gap: 3rem;
  }

  main > div:first-of-type {
    padding: 0
  }

  .logoThank {
    width: 9.375rem;
  }

  h1 {
    font-size: 2rem;
  }

  main > div:first-of-type p {
    font-size: 1.25rem
  }
}
</style>
