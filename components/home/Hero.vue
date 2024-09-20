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
    <div>
      <NuxtImg
        class="w-full"
        src="/images/home/Iconic-Executive-Assistant-Recruitment.png"
        alt="Iconic Executive Assistant Recruitment"
      />
    </div>
  </section>
</template>

<style scoped>
.empower {
  font-weight: 700;
}

h1 {
  font-weight: 800;
}

.starting {
  font-weight: 500;
}

.starting span {
  font-weight: 800;
}

@media (width >= 700px) {
  .hero {
    flex-direction: row;
    justify-content: center;
    padding: 2.5rem 0 2.5rem 2.5rem;
  }

  .hero > div:first-of-type {
    width: 46%;
    align-items: flex-start;
    gap: 1.25rem !important;
    padding: 0 !important;
  }

  .empower {
    text-align: start !important;
    font-size: 1.5rem;
  }

  h1 {
    text-align: start !important;
    font-size: 2rem;
  }

  .starting {
    text-align: start !important;
    font-size: 1rem;
  }

  .hero > div:first-of-type > div {
    align-items: flex-start;
  }

  
  .hero > div:last-of-type {
    width: 54%;
  }
}
</style>
