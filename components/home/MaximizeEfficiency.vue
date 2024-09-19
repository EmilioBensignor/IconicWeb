<template>
  <section class="w-full columnAlignCenter gap-4 px-3 py-5">
    <h2 class="text-center">Maximize efficiency</h2>
    <div class="w-full accordionMaximize columnAlignCenter gap-3">
      <div
        v-for="(problem, index) in problems"
        :key="index"
        class="w-full accordionMaximize bg-blue-light-gradient"
      >
        <div class="w-full panelContent columnAlignCenter bg-dark-blue">
          <div class="questionContent columnAlignCenter gap-2">
            <Icon
              :name="`mingcute:${problem.icon}`"
              style="color: var(--color-light-blue)"
              size="1.125rem"
            />
            <p class="text-center">{{ problem.question }}</p>
          </div>
          <div class="answerContent bg-dark-blue">
            <p class="text-center">{{ problem.answer }}</p>
          </div>
        </div>
      </div>
    </div>
    <NuxtLink to="/" class="secondaryButton">
      <div>
        <p>Explore Our Solutions</p>
      </div>
    </NuxtLink>
  </section>
</template>

<script>
export default {
  data() {
    return {
      problems: [
        {
          icon: "star-line",
          question: "Are you struggling to hire top talent?",
          answer:
            "Stop sifting through unqualified candidates. ICONIC finds the right talent quickly, even for international hires, ensuring you get the best fit without the hassle.",
          value: 0,
        },
        {
          icon: "alarm-1-line",
          question: "Is your hiring process taking too long?",
          answer:
            "Don't waste weeks on hiring. ICONIC speeds up the process, managing everything from job postings to candidate selection, so you can focus on growing your business.",
          value: 1,
        },
        {
          icon: "currency-dollar-line",
          question: "Are costs impacting your profits?",
          answer:
            "Don't waste weeks on hiring. ICONIC speeds up the process, managing everything from job postings to candidate selection, so you can focus on growing your business.",
          value: 2,
        },
      ],
    };
  },
};
</script>

<style scoped>
.accordionMaximize {
  border-radius: 12px;
  padding: 2px;
}

.panelContent {
  border-radius: 12px;
  transition: all 0.5s ease;
}

.panelContent:hover .questionContent {
  background: linear-gradient(90deg, var(--color-blue), var(--color-light-blue));
}

.questionContent {
  width: 100%;
  border-radius: 12px 12px 0 0;
  padding: 1rem 0.75rem;
  transition: all 0.5s ease;
}

.panelContent:hover .questionContent span {
  color: var(--color-white) !important;
}

.questionContent p {
  font-size: 0.875rem;
  font-weight: 600;
}

.answerContent {
  max-height: 0;
  border-radius: 0 0 12px 12px;
  overflow: hidden;
  transition: all 0.5s ease;
  padding: 0 1rem;
}

.panelContent:hover .answerContent {
  max-height: 1000px;
  padding: 1rem;
}

.answerContent p {
  font-size: 0.75rem;
}
</style>
