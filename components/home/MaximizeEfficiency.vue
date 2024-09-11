<template>
  <section class="w-full columnAlignCenter gap-4 px-3 py-4">
    <h2 class="text-center">Maximize efficiency</h2>
    <Accordion class="w-full accordionMaximize">
      <AccordionPanel
        v-for="(problem, index) in problems"
        :key="index"
        :value="problem.value"
      >
        <AccordionHeader>
          {{ problem.icon }}
          <p class="text-center">{{ problem.question }}</p>
        </AccordionHeader>
        <AccordionContent>
          <p>{{ problem.answer }}</p>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
    <NuxtLink to="/" class="secondaryButton">Explore Our Solutions</NuxtLink>
  </section>
</template>

<script>
export default {
  data() {
    return {
      problems: [
        {
          icon: "",
          question: "Are you struggling to hire top talent?",
          answer:
            "Stop sifting through unqualified candidates. ICONIC finds the right talent quickly, even for international hires, ensuring you get the best fit without the hassle.",
          value: 0,
        },
        {
          icon: "",
          question: "Is your hiring process taking too long?",
          answer:
            "Don't waste weeks on hiring. ICONIC speeds up the process, managing everything from job postings to candidate selection, so you can focus on growing your business.",
          value: 1,
        },
        {
          icon: "",
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

<style>
.accordionMaximize .p-accordionpanel, .accordionMaximize .p-accordionheader {
  border-width: 2px;
  border-image: linear-gradient(to right, var(--color-blue), var(--color-light-blue), 1);
  border-color: transparent;
}

.accordionMaximize .p-accordionheader-toggle-icon {
  display: none;
}
</style>