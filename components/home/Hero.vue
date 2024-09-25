<template>
  <section class="hero column gap-1 py-5">
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
        <NuxtLink to="/" class="primaryButton">Get Started</NuxtLink>
      </div>
    </div>
    <div class="column">
      <NuxtImg
        class="w-full heroAssistant"
        src="/images/home/Iconic-Executive-Assistant-Recruitment.png"
        alt="Iconic Executive Assistant Recruitment" />
    </div>
  </section>
</template>

<style scoped>
  .heroAssistant {
    max-width: 400px;
    align-self: flex-end;
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

  @media (width >= 480px) {
    .hero {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: 1rem !important;
      padding: 1rem 0 1rem 2rem;
    }

    .hero > div {
      width: 50%;
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
    }
  }

  @media (width >= 700px) {
    .hero {
      justify-content: center;
      gap: 1.25rem !important;
      padding: 2.5rem 0 2.5rem 2.5rem;
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
  }

  @media (width >= 1080px) {
    .hero {
      padding: 2.5rem 0 2.5rem 5rem;
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
  }
</style>
