<template>
  <section class="column gap-1 my-4">
    <div class="columnAlignCenter gap-3 px-3">
      <div>
        <p class="subtitle text-center text-light-blue">
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
.subtitle {
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
</style>
