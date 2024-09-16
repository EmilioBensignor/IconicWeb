<template>
  <section class="w-full columnAlignCenter gap-4 px-3 py-5">
    <h2 class="text-center">Maximize efficiency</h2>
    <Accordion class="w-full accordionMaximize columnAlignCenter gap-3">
      <AccordionPanel
        v-for="(problem, index) in problems"
        :key="index"
        :value="problem.value"
        class="w-full bg-blue-light-gradient"
      >
        <div class="w-full panelContent columnAlignCenter bg-dark-blue">
          <AccordionHeader>
            <div class="questionContent columnAlignCenter gap-2">
              <Icon
                :name="`mingcute:${problem.icon}`"
                style="color: var(--color-light-blue)"
                size="1.125rem"
              />
              <p class="text-center">{{ problem.question }}</p>
            </div>
          </AccordionHeader>
          <AccordionContent>
            <div class="answerContent bg-dark-blue">
              <p class="text-center">{{ problem.answer }}</p>
            </div>
          </AccordionContent>
        </div>
      </AccordionPanel>
    </Accordion>
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

<style>
.accordionMaximize .p-accordionpanel,
.accordionMaximize .p-accordionheader,
.accordionMaximize .p-accordioncontent-content {
  border: none;
}

.accordionMaximize .p-accordionpanel {
  border-radius: 12px;
  padding: 2px;
}

.accordionMaximize .p-accordionheader-toggle-icon {
  display: none;
}

.accordionMaximize .p-accordionpanel-active .panelContent {
  background: transparent;
}

.accordionMaximize .p-accordionpanel-active span {
  color: white !important;
}
</style>

<style scoped>
.panelContent {
  border-radius: 12px;
}

.questionContent {
  padding: 1rem 0.75rem
}

.questionContent p {
  font-size: 0.875rem;
  font-weight: 600;
}

.answerContent {
  border-radius: 0 0 12px 12px;
  padding: 1rem;
}

.answerContent p {
  font-size: 0.75rem;
}
</style>
