<template>
  <section class="w-full columnAlignCenter gap-4 px-3 py-5">
    <h2 class="column text-center">
      Start delegating <span>in 3 simple steps</span>
    </h2>
    <div class="w-full">
      <Accordion
        value="0"
        class="w-full accordionSteps columnAlignCenter gap-5"
      >
        <AccordionPanel
          :value="step.value"
          v-for="(step, index) in steps"
          :key="index"
          class="w-full relative bg-blue-light-gradient"
        >
          <div class="blueLayer">
            <AccordionHeader class="w-full">
              <div class="headAccordion">
                <div>{{ step.number }}</div>
                <h3>{{ step.title }}</h3>
              </div>
            </AccordionHeader>
            <AccordionContent>
              <div class="column gap-2 mt-2">
                <NuxtImg
                  style="object-fit: cover"
                  :src="`/images/home/${step.img}-Iconic-Recruitment.jpg`"
                  :alt="step.alt"
                  class="w-full h-8rem"
                />
                <p class="font-12">{{ step.text }}</p>
              </div>
            </AccordionContent>
          </div>
        </AccordionPanel>
      </Accordion>
    </div>
    <NuxtLink to="/" class="primaryButton">Book a call</NuxtLink>
  </section>
</template>

<script>
export default {
  data() {
    return {
      steps: [
        {
          value: "0",
          number: "1",
          title: "Discovery call",
          img: "Discovery-Call",
          alt: "Discovery Call Iconic Recruitment",
          text: "Complete the registration form to schedule a call with us and discuss your business needs and the desired qualities in your executive assistant.",
        },
        {
          value: "1",
          number: "2",
          title: "Matching and interview",
          img: "Matching-Interview",
          alt: "Matching Interview Iconic Recruitment",
          text: "Complete the registration form to schedule a call with us and discuss your business needs and the desired qualities in your executive assistant.",
        },
        {
          value: "2",
          number: "3",
          title: "Onboarding & ongoing support",
          img: "Onboarding-Support",
          alt: "Onboarding Support Iconic Recruitment",
          text: "Complete the registration form to schedule a call with us and discuss your business needs and the desired qualities in your executive assistant.",
        },
      ],
    };
  },
};
</script>

<style>
.accordionSteps .p-accordionpanel,
.accordionSteps .p-accordionheader,
.accordionSteps .p-accordioncontent-content {
  border: none !important;
}

.accordionSteps .p-accordionpanel {
  border-radius: 9px;
  padding: 2px;
  transition: all 0.3s;
}

.accordionSteps .p-accordionheader-toggle-icon {
  display: none;
}

.accordionSteps .p-accordionpanel-active .blueLayer {
  background: none;
}

.accordionSteps .p-accordionpanel-active .headAccordion div {
  background: var(--color-dark-blue);
}
</style>

<style scoped>
.blueLayer {
  position: relative;
  z-index: 1;
  background-color: var(--color-dark-blue);
  border-radius: 9px;
  padding: 0.75rem;
}

.headAccordion {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.headAccordion div {
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    90deg,
    var(--color-blue),
    var(--color-light-blue)
  );
  border-radius: 50%;
}

.headAccordion h3 {
  font-size: 1rem;
  font-weight: 700;
}
</style>
