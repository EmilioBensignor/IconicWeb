<template>
  <section class="w-full columnAlignCenter gap-4 px-3 py-5">
    <h2>Precision matching process</h2>
    <Stepper value="1" class="w-full stepperProcess">
      <StepList>
        <Step value="1"></Step>
        <Step value="2"></Step>
        <Step value="3"></Step>
        <Step value="4"></Step>
      </StepList>
      <StepPanels class="mt-3">
        <StepPanel
          v-slot="{ activateCallback }"
          class="columnAlignCenter gap-4"
          value="1">
          <div>
            <h3 class="text-center font-18 mb-2">Filtering and Screening</h3>
            <p class="text-center font-14">
              At Iconic Assistant, we begin by filtering candidates based on
              their experience, skills, and education. We then conduct an
              initial screening to ensure that only the most qualified
              professionals, aligned with your specific needs, move forward.
            </p>
          </div>
          <div class="animacion"></div>
          <Button
            label="Step 2"
            class="primaryButton align-self-end font-w-500"
            iconPos="right"
            @click="activateCallback('2')">
            <template #icon>
              <Icon name="mingcute:arrow-right-line" />
            </template>
          </Button>
        </StepPanel>
        <StepPanel
          v-slot="{ activateCallback }"
          class="columnAlignCenter gap-4"
          value="2">
          <div>
            <h3 class="text-center font-18 mb-2">Values and Background</h3>
            <p class="text-center font-14">
              We ensure that candidates share our values and work ethics. We
              conduct thorough background checks, including education and
              criminal records, to guarantee alignment with our standards.
            </p>
          </div>
          <div class="animacion"></div>
          <div class="w-full rowSpaceBetweenCenter">
            <Button
              class="back"
              aria-label="Back"
              @click="activateCallback('1')">
              <template #icon>
                <Icon name="mingcute:arrow-left-line" />
              </template>
            </Button>
            <Button
              label="Step 3"
              class="primaryButton align-self-end font-w-500"
              iconPos="right"
              @click="activateCallback('3')">
              <template #icon>
                <Icon name="mingcute:arrow-right-line" />
              </template>
            </Button>
          </div>
        </StepPanel>
        <StepPanel
          v-slot="{ activateCallback }"
          class="columnAlignCenter gap-4"
          value="3">
          <div>
            <h3 class="text-center font-18 mb-2">
              English Proficiency Assessment
            </h3>
            <p class="text-center font-14">
              We assess each candidate's ability to communicate effectively and
              accurately. We conduct English proficiency tests to ensure they
              meet our high standards.
            </p>
          </div>
          <div class="animacion"></div>
          <div class="w-full rowSpaceBetweenCenter">
            <Button
              class="back"
              aria-label="Back"
              @click="activateCallback('2')">
              <template #icon>
                <Icon name="mingcute:arrow-left-line" />
              </template>
            </Button>
            <Button
              label="Step 4"
              class="primaryButton align-self-end font-w-500"
              iconPos="right"
              @click="activateCallback('4')">
              <template #icon>
                <Icon name="mingcute:arrow-right-line" />
              </template>
            </Button>
          </div>
        </StepPanel>
        <StepPanel
          v-slot="{ activateCallback }"
          class="columnAlignCenter gap-4"
          value="4">
          <div>
            <h3 class="text-center font-18 mb-2">
              Psychometric and Job Compatibility Assessment
            </h3>
            <p class="text-center font-14">
              We perform behavioral assessments to test each candidate's
              compatibility with the job position, ensuring the perfect fit for
              your team.
            </p>
          </div>
          <div class="animacion"></div>
          <Button class="back align-self-start" aria-label="Back" @click="activateCallback('3')">
            <template #icon>
              <Icon name="mingcute:arrow-left-line" />
            </template>
          </Button>
        </StepPanel>
      </StepPanels>
    </Stepper>
  </section>
</template>

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
</style>

<style scoped>
  .animacion {
    width: 100%;
    height: 9.375rem;
    background-color: var(--color-grey);
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
</style>
