<template>
  <section
    class="w-full precisionMatching columnAlignCenter gap-4 px-3 py-5"
    ref="stepperSection"
    aria-labelledby="stepper-title"
  >
    <div class="h2Subtitle column">
      <h2 id="stepper-title">Precision matching process</h2>
      <p class="subtitle">DATA DRIVEN HR</p>
    </div>
    <Stepper
      v-model="currentStep"
      :value="currentStep"
      class="w-full stepperProcess"
    >
      <template #nav="{ props }">
        <StepperNav v-bind="props">
          <StepperNavItem
            v-for="step in 4"
            :key="step"
            :index="step - 1"
            :current="currentStep - 1"
          >
            {{ `Step ${step}` }}
          </StepperNavItem>
        </StepperNav>
      </template>

      <StepperPanel
        v-for="step in 4"
        :key="step"
        :index="step - 1"
        :current="currentStep - 1"
      >
        <div class="stepContent column">
          <div>
            <h3 class="text-center font-18 mb-2">
              {{ stepTitles[step - 1] }}
            </h3>
            <p class="text-center font-14">
              {{ stepDescriptions[step - 1] }}
            </p>
          </div>
          <div class="animacion">
            <video
              :ref="`video${step}`"
              muted
              preload="none"
              class="lazyVideo shadow-3"
              poster="/images/home/Precision-Matching-Placeholder.webp"
            >
              <source :src="stepVideos[step - 1]" type="video/mp4" />
              Your browser does not support videos.
            </video>
          </div>
        </div>
        <div
          class="w-full"
          :class="
            step === 1
              ? 'flex justify-content-end'
              : step === 4
              ? 'flex justify-content-start'
              : 'rowSpaceBetweenCenter'
          "
        >
          <Button 
            v-if="step > 1" 
            class="back" 
            @click="setStep(step - 1)"
            aria-label="Previous step"
          >
            <span class="p-button-label">
              <Icon name="mingcute:arrow-left-line" aria-hidden="true" />
              <span class="sr-only">Previous</span>
            </span>
          </Button>
          <Button
            v-if="step < 4"
            class="primaryButton"
            @click="setStep(step + 1)"
            :aria-label="`Go to Step ${step + 1}`"
          >
            <span class="p-button-label">
              <span>Step {{ step + 1 }}</span>
              <Icon name="mingcute:arrow-right-line" aria-hidden="true" />
            </span>
          </Button>
        </div>
      </StepperPanel>
    </Stepper>
  </section>
</template>

<script>
export default {
  data() {
    return {
      currentStep: 1,
      observer: null,
      isVisible: false,
      autoChangeInterval: null,
      stepTitles: [
        "Filtering and Screening",
        "Values and Background",
        "English Proficiency Assessment",
        "Psychometric and Job Compatibility Assessment",
      ],
      stepDescriptions: [
        "At Iconic Assistant, we begin by filtering candidates based on their experience, skills, and education. We then conduct an initial screening to ensure that only the most qualified professionals, aligned with your specific needs, move forward.",
        "We ensure that candidates share our values and work ethics. We conduct thorough background checks, including education and criminal records, to guarantee alignment with our standards.",
        "We assess each candidate's ability to communicate effectively and accurately. We conduct English proficiency tests to ensure they meet our high standards.",
        "We perform behavioral assessments to test each candidate's compatibility with the job position, ensuring the perfect fit for your team.",
      ],
      stepVideos: [
        "/videos/home/Filtering-Screening-Process.mp4",
        "/videos/home/Values-Background-Process.mp4",
        "/videos/home/English-Proficiency-Assessment-Process.mp4",
        "/videos/home/Psychometric-Job-Compatibility-Process.mp4",
      ],
    };
  },
  methods: {
    setStep(step) {
      this.currentStep = step;
      this.$nextTick(() => {
        this.reloadVideo(step);
      });
    },
    reloadVideo(step) {
      const videoRef = this.$refs[`video${step}`];
      if (videoRef && videoRef[0]) {
        videoRef[0].load();
        videoRef[0].play().catch((error) => {
          if (error.name !== "AbortError") {
            console.error("Error al reproducir el video:", error);
          }
        });
      }
    },
    setupIntersectionObserver() {
      if ("IntersectionObserver" in window) {
        this.observer = new IntersectionObserver(
          (entries) => {
            const [entry] = entries;
            this.isVisible = entry.isIntersecting;
            if (this.isVisible) {
              this.startAutoChange();
            } else {
              this.stopAutoChange();
            }
          },
          { threshold: 0.5 }
        );

        this.$nextTick(() => {
          this.observer.observe(this.$refs.stepperSection);
        });
      }
    },
    startAutoChange() {
      if (!this.autoChangeInterval) {
        this.autoChangeInterval = setInterval(() => {
          if (this.isVisible) {
            const nextStep = this.currentStep < 4 ? this.currentStep + 1 : 1;
            this.setStep(nextStep);
          }
        }, 20000);
      }
    },
    stopAutoChange() {
      if (this.autoChangeInterval) {
        clearInterval(this.autoChangeInterval);
        this.autoChangeInterval = null;
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.reloadVideo(this.currentStep);
      this.setupIntersectionObserver();
    });
  },
  beforeUnmount() {
    if (this.observer) {
      this.observer.disconnect();
    }
    this.stopAutoChange();
  },
};
</script>

<style>
.stepperProcess .p-steplist {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.stepperProcess .p-step-header {
  width: 1.875rem;
  height: 1.875rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--color-dark-blue);
  border: 2px solid var(--color-blue);
  border-radius: 50%;
}

.stepperProcess .p-step-active .p-step-header {
  background: linear-gradient(
    90deg,
    var(--color-blue),
    var(--color-light-blue)
  );
  color: var(--color-white);
  border: none;
  padding: 2px;
}

.stepperProcess .p-step {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.stepperProcess .p-stepper-separator,
.stepperProcess .p-step:has(~ .p-step-active) .p-stepper-separator {
  height: 4px;
  background: linear-gradient(
    90deg,
    var(--color-blue),
    var(--color-light-blue)
  );
  border-radius: 10px;
}

.stepperProcess .p-step-number {
  color: var(--color-white);
  font-size: 0.875rem;
  font-weight: 700;
}

.stepperProcess .p-button {
  display: flex !important;
  flex-direction: row-reverse;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem !important;
}

@media (width >= 480px) {
  .precisionMatching .p-stepper {
    max-width: 506px;
  }
}

@media (width >= 700px) {
  .precisionMatching .p-stepper {
    max-width: 100%;
  }

  .stepperProcess .p-step-header {
    width: 3rem;
    height: 3rem;
  }

  .stepperProcess .p-step-number {
    font-size: 1.25rem;
  }

  .stepperProcess .p-step {
    gap: 1.644rem;
  }

  .stepperProcess .p-steplist {
    gap: 1.644rem;
  }

  .stepperProcess .p-steppanels {
    margin-top: 2rem !important;
  }

  .stepperProcess .p-step-header {
    border: 3px solid var(--color-blue);
  }

  .stepperProcess .p-stepper-separator,
  .stepperProcess .p-step:has(~ .p-step-active) .p-stepper-separator {
    height: 6px;
  }

  .stepperProcess .p-button {
    font-size: 1rem !important;
  }

  .stepperProcess .p-button .iconify {
    font-size: 1.25rem !important;
  }
}

@media (width >= 1080px) {
  .stepperProcess .p-step-header {
    width: 4.188rem;
    height: 4.188rem;
  }

  .stepperProcess .p-step-number {
    font-size: 2rem;
  }

  .stepperProcess .p-step {
    gap: 2.417rem;
  }

  .stepperProcess .p-steplist {
    gap: 2.417rem;
  }

  .stepperProcess .p-button {
    font-size: 1.25rem !important;
  }

  .stepperProcess .p-button .iconify {
    font-size: 1.5rem !important;
  }
}
</style>

<style scoped>
.stepContent {
  gap: 1.25rem;
}

.animacion {
  width: 100%;
  border-radius: 12px;
}

.lazyVideo {
  width: 100%;
  max-width: 100%;
  border-radius: 12px;
}

.stepperProcess .back {
  width: 1.875rem !important;
  height: 1.875rem !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50% !important;
  border: 1px solid var(--color-grey) !important;
  padding: 0 !important;
}
.stepperProcess .back span {
  position: absolute;
}

@media (width >= 480px) {
  .stepContent h3 {
    font-size: 1.25rem;
  }
}

@media (width >= 700px) {
  .precisionMatching {
    gap: 2rem !important;
    padding: 2.5rem !important;
  }

  .h2Subtitle {
    align-self: flex-start;
  }

  .stepContent {
    flex-direction: row;
    justify-content: space-between;
    gap: 1.25rem;
  }

  .stepContent > div:first-of-type {
    width: 50%;
  }

  .animacion {
    width: 55%;
  }

  .stepContent h3 {
    text-align: start !important;
    font-size: 1.5rem;
  }

  .stepContent p {
    text-align: start !important;
    font-size: 1rem;
  }
}

@media (width >= 850px) {
  .stepContent h3 {
    margin-bottom: 0.625rem !important;
  }

  .stepContent p {
    font-size: 1.125rem;
  }
}

@media (width >= 1080px) {
  .precisionMatching {
    padding: 3.75rem 5rem !important;
  }

  .stepContent {
    gap: 1.5rem;
  }

  .stepContent p {
    font-size: 1.25rem;
  }
}

@media (width >= 1280px) {
  .animacion {
    width: 65%;
  }
}

@media (width >= 1440px) {
  .precisionMatching {
    gap: 3.5rem !important;
    padding: 3.75rem 8rem !important;
  }

  .stepContent h3 {
    font-size: 1.75rem;
    margin-bottom: 1rem !important;
  }

  .stepContent p {
    font-size: 1.5rem;
  }
}

@media (width >= 1920px) {
  .stepContent h3 {
    font-size: 2rem;
  }
}
</style>
