<template>
  <section class="hero columnAlignCenter gap-1 py-5 px-3">
    <div class="columnAlignCenter gap-3 px-3">
      <div>
        <p class="empower text-center text-light-blue">
          Empower your business.
        </p>
        <h1 class="column text-center">
          Meet your <span>Perfect Assistant</span>
        </h1>
      </div>
      <p class="starting text-center font-14">
        Starting at $11 an hour,
        <span>hire the top 1%</span> of Executive and Customer Service
        Assistants. Tailored solutions that drive growth and innovation.
      </p>
      <div class="w-full columnAlignCenter">
        <NuxtLink :to="routes.CONTACT_US" class="primaryButton"
          >Get Started</NuxtLink
        >
      </div>
    </div>
    <div class="w-full columnAlignCenter">
      <NuxtImg
        class="heroAssistant assistantMobile"
        src="/images/home/Iconic-Executive-Assistant-Recruitment-Mobile.webp"
        alt="Iconic-Executive-Assistant-Recruitment" />
      <NuxtImg
        class="heroAssistant assistantDeskop"
        src="/images/home/Iconic-Executive-Assistant-Recruitment-Desktop.webp"
        alt="Iconic-Executive-Assistant-Recruitment" />
      <NuxtImg
        class="heroAssistant assistantLargeDeskop"
        src="/images/home/Iconic-Executive-Assistant-Recruitment-Large.webp"
        alt="Iconic-Executive-Assistant-Recruitment" />
    </div>
  </section>
</template>

<script>
  import ROUTES_NAMES from "~/constants/ROUTES_NAMES.js";

  export default {
    data() {
      return {
        routes: ROUTES_NAMES,
      };
    },
  };
</script>

<style scoped>
  .heroAssistant {
    max-width: 350px;
    height: 16.875rem;
    object-fit: contain;
  }

  .empower {
    font-weight: 700;
  }

  h1 {
    font-weight: 800;
  }

  .starting {
    font-weight: 500;
    max-width: 320px;
  }

  .starting span {
    font-weight: 800;
  }

  .assistantLargeDeskop,
  .assistantDeskop {
    display: none;
  }

  @media (width >= 400px) {
    .heroAssistant {
      height: 21.875rem;
    }
  }

  @media (width >= 480px) {
    .hero {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: 1rem !important;
      padding: 1rem 2rem !important;
    }

    .hero > div {
      width: 50% !important;
    }

    .hero > div:first-of-type {
      align-items: flex-start;
      gap: 0.5rem !important;
      padding: 0 !important;
    }

    .hero > div:first-of-type > div {
      align-items: flex-start;
    }

    .empower {
      text-align: start !important;
      font-size: 1.25rem;
    }

    h1 {
      text-align: start !important;
      font-size: 1.75rem;
    }

    .starting {
      max-width: 100%;
      text-align: start !important;
    }

    .hero > div:first-child > div:last-of-type {
      margin-top: 0.5rem;
    }

    .heroAssistant {
      max-width: 100%;
      height: 17.5rem;
    }
  }

  @media (width >= 700px) {
    .hero {
      justify-content: center;
      gap: 1.25rem !important;
      padding: 2.5rem !important;
    }

    .hero > div:first-of-type {
      width: 46%;
      gap: 1rem !important;
    }

    .empower {
      font-size: 1.5rem;
    }

    h1 {
      font-size: 2rem;
    }

    .starting {
      font-size: 1rem;
    }

    .hero > div:first-child > div:last-of-type {
      margin-top: 0;
    }

    .hero > div:last-of-type {
      width: 54%;
    }

    .heroAssistant {
      height: 19rem;
    }
  }

  @media (width >= 850px) {
    .empower {
      font-size: 1.875rem;
    }

    h1 {
      font-size: 2.5rem;
    }

    .starting {
      font-size: 1.125rem;
    }

    .heroAssistant {
      height: 21rem;
    }
  }

  @media (width >= 1080px) {
    .hero {
      padding: 2.5rem 5rem !important;
    }

    .hero > div:first-of-type {
      width: 50%;
    }

    .hero > div:last-of-type {
      width: 50%;
    }

    .empower {
      font-size: 2rem;
    }

    h1 {
      font-size: 3.25rem;
    }

    .starting {
      font-size: 1.25rem;
    }

    .assistantMobile {
      display: none;
    }

    .assistantDeskop {
      display: block;
    }

    .heroAssistant {
      height: 25rem;
    }
  }

  @media (width >= 1280px) {
    .starting {
      max-width: 583px;
    }

    .heroAssistant {
      height: 27rem;
    }
  }

  @media (width >= 1440px) {
    .hero {
      padding: 2.5rem 8rem !important;
    }

    .hero > div:first-of-type {
      gap: 2rem !important;
    }

    .empower {
      font-size: 2.125rem;
    }

    h1 {
      font-size: 3.5rem;
      margin-top: 0.75rem;
    }

    .starting {
      font-size: 1.375rem;
    }

    .assistantDeskop {
      display: none;
    }

    .assistantLargeDeskop {
      display: block;
    }
  }

  @media (width >= 1600px) {
    .empower {
      font-size: 2.25rem;
    }

    h1 {
      font-size: 3.625rem;
    }

    .starting {
      font-size: 1.5rem;
    }

    .heroAssistant {
      max-width: 680px;
    }
  }

  @media (width >= 1920px) {
    .hero > div:first-of-type {
      gap: 2.5rem !important;
    }

    .empower {
      font-size: 2.375rem;
    }

    h1 {
      font-size: 3.625rem;
    }

    .starting {
      max-width: 605px;
      font-size: 1.625rem;
    }
  }
</style>
