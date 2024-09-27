<template>
  <section class="w-full startDelegating columnAlignCenter gap-4 px-3 py-5">
    <div class="h2StartDelegating column">
      <h2 class="column text-center">
        Start delegating <span>in 3 simple steps</span>
      </h2>
      <p class="subtitle">Sign up for Iconic Assistant. It takes 60 seconds.</p>
    </div>
    <div class="w-full delegatingContainer">
      <Accordion
        value="0"
        class="w-full accordionSteps columnAlignCenter gap-5">
        <AccordionPanel
          :value="step.value"
          v-for="(step, index) in steps"
          :key="index"
          class="w-full relative bg-blue-light-gradient">
          <div class="blueLayer">
            <AccordionHeader class="w-full">
              <div class="headAccordion">
                <div>{{ step.number }}</div>
                <h3>{{ step.title }}</h3>
              </div>
            </AccordionHeader>
            <AccordionContent>
              <div class="column gap-2 mt-2">
                <div
                  class="w-full h-8rem imgStarDelegating border-round-md"
                  :style="{
                    backgroundImage: `url(/images/home/${step.img}-Iconic-Recruitment.jpg)`,
                  }"></div>
                <p class="font-12">{{ step.text }}</p>
              </div>
            </AccordionContent>
          </div>
        </AccordionPanel>
      </Accordion>
    </div>
    <div class="delegatingContainerDesktop">
      <div class="desktopPanelsContainer column">
        <div
          v-for="(step, index) in steps"
          :key="index"
          @click="setSelectedStep(index)"
          :class="{ 'panelContainer-active': selectedStep === index }"
          class="w-full panelContainer relative bg-blue-light-gradient">
          <div class="blueLayer">
            <div class="w-full headAccordion">
              <div>{{ step.number }}</div>
              <h3>{{ step.title }}</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="desktopContentPanel column">
        <div
          class="w-full h-12rem imgStarDelegating border-round-md"
          :style="{
            backgroundImage: `url(/images/home/${steps[selectedStep].img}-Iconic-Recruitment.jpg)`,
          }"></div>
        <p>{{ steps[selectedStep].text }}</p>
      </div>
    </div>
    <NuxtLink to="/" class="primaryButton">Book a call</NuxtLink>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        selectedStep: 0,
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
            text: "Our recruitment team will provide you with a perfect match from a pool of over 5,000 pre-vetted professionals for you to interview and approve.",
          },
          {
            value: "2",
            number: "3",
            title: "Onboarding & ongoing support",
            img: "Onboarding-Support",
            alt: "Onboarding Support Iconic Recruitment",
            text: "We help you onboard your Executive Assistant and provide support with your dedicated Customer Success Manager.",
          },
        ],
      };
    },
    methods: {
      setSelectedStep(index) {
        this.selectedStep = index;
      },
    },
  };
</script>

<style>
  .p-accordionpanel,
  .p-accordionheader,
  .p-accordioncontent-content {
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

  @media (width >= 480px) {
    .accordionSteps .p-accordioncontent-content > div > p {
      font-size: 0.875rem;
    }
  }

  @media (width >= 700px) {
    .delegatingContainer .p-accordion {
      gap: 0.75rem !important;
    }

    .accordionSteps .p-accordioncontent-content > div {
      flex-direction: row;
      gap: 1.25rem !important;
    }

    .accordionSteps .p-accordioncontent-content > div > p {
      width: 100%;
      font-size: 1rem;
    }
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

  .imgStarDelegating {
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .delegatingContainerDesktop {
    display: none;
  }

  @media (width >= 480px) {
    .delegatingContainer {
      max-width: 506px;
    }

    .h2StartDelegating h2 {
      display: block;
    }

    .blueLayer {
      padding: 1rem;
    }

    .headAccordion div {
      width: 1.75rem;
      height: 1.75rem;
    }

    .imgStarDelegating {
      height: 10rem !important;
    }
  }

  @media (width >= 700px) {
    .startDelegating {
      gap: 2rem !important;
      padding: 2.5rem !important;
    }

    .h2StartDelegating {
      align-self: flex-start;
    }

    .delegatingContainer {
      max-width: 100%;
    }

    .imgStarDelegating {
      background-position: center;
    }

    .headAccordion div {
      width: 2rem;
      height: 2rem;
      font-size: 1.125rem;
    }

    .headAccordion h3 {
      font-size: 1.125rem;
    }
  }

  @media (width >= 850px) {
    .delegatingContainer {
      display: none;
    }

    .delegatingContainerDesktop {
      display: flex;
      gap: 2rem;
    }

    .desktopPanelsContainer {
      width: 50%;
      gap: 1.25rem;
    }

    .panelContainer {
      border-radius: 9px;
      padding: 2px;
      cursor: pointer;
      transition: all 0.3s;
    }

    .headAccordion {
      gap: 1.25rem;
    }

    .panelContainer-active .blueLayer {
      background: none;
    }

    .panelContainer-active .headAccordion div {
      background: var(--color-dark-blue);
    }

    .desktopContentPanel {
      width: 50%;
      gap: 0.75rem;
    }
  }

  @media (width >= 1080px) {
    .startDelegating {
      padding: 3.75rem 5rem !important;
    }
  }
</style>
