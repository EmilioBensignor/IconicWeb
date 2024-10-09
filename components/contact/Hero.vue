<template>
  <section class="hero column gap-2">
    <div class="column gap-1">
      <div class="columnAlignCenter gap-3">
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
      </div>
      <div class="w-full columnAlignCenter">
        <div class="w-full heroAssistant bgContain"></div>
      </div>
    </div>
    <div ref="formContainer" id="get-started" class="formGetStarted"></div>
  </section>
</template>

<script>
import ROUTES_NAMES from "~/constants/ROUTES_NAMES.js";

export default {
  data() {
    return {
      routes: ROUTES_NAMES,
    };
  },
};
</script>

<script setup>
import { ref, onMounted } from "vue";

const formContainer = ref(null);

const createHubSpotForm = () => {
  if (typeof window.hbspt === "undefined") {
    const hubspotScript = document.createElement("script");
    hubspotScript.setAttribute("charset", "utf-8");
    hubspotScript.setAttribute("type", "text/javascript");
    hubspotScript.src = "//js.hsforms.net/forms/embed/v2.js";
    hubspotScript.async = true;

    hubspotScript.onload = () => {
      renderForm();
    };

    document.body.appendChild(hubspotScript);
  } else {
    renderForm();
  }
};

const renderForm = () => {
  if (formContainer.value) {
    formContainer.value.innerHTML = "";
    window.hbspt.forms.create({
      region: "na1",
      portalId: "46001660",
      formId: "d164c3b6-b2b5-4fc9-acdf-b0920ec87420",
      target: "#get-started",
    });
  }
};

onMounted(() => {
  createHubSpotForm();
});
</script>

<style scoped>
.hero {
  padding: 2rem 1rem;
}

.heroAssistant {
  max-width: 350px;
  height: 16.875rem;
  background-image: url("/images/home/Iconic-Executive-Assistant-Recruitment.webp");
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

.formGetStarted {
  width: 100%;
  max-width: 800px;
  background-color: white;
  border-radius: 24px;
  padding: 1.25rem;
}

@media (width >= 400px) {
  .heroAssistant {
    height: 21.875rem;
  }
}

@media (width >= 480px) {
  .hero {
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem !important;
    padding: 1rem 0 1rem 2rem;
  }

  .hero > div:first-of-type {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: 0.5rem !important;
    padding: 0 !important;
  }

  .hero > div:first-of-type > div {
    width: 50% !important;
    align-items: flex-start;
  }

  .hero > div:first-of-type > div:last-of-type {
    align-items: center;
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
    max-width: 400px;
    text-align: start !important;
  }

  .hero > div:first-child > div:last-of-type {
    margin-top: 0.5rem;
  }

  .heroAssistant {
    max-width: 100%;
    height: 17.5rem;
  }
}

@media (width >= 700px) {
  .hero {
    gap: 1.25rem !important;
    padding: 2.5rem 0 2.5rem 2.5rem;
  }

  .hero > div:first-of-type {
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

  .heroAssistant {
    height: 19rem;
  }
}

@media (width >= 850px) {
  .empower {
    font-size: 1.875rem;
  }

  h1 {
    font-size: 2.5rem;
  }

  .starting {
    font-size: 1.125rem;
  }

  .heroAssistant {
    height: 21rem;
  }
}

@media (width >= 1080px) {
  .hero {
    padding: 2.5rem 0 2.5rem 5rem;
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

  .heroAssistant {
    height: 25rem;
  }
}

@media (width >= 1280px) {
  .starting {
    max-width: 583px;
  }

  .heroAssistant {
    height: 27rem;
  }
}

@media (width >= 1440px) {
  .hero {
    padding: 2.5rem 0 2.5rem 8rem;
  }

  .hero > div:first-of-type {
    gap: 2rem !important;
  }

  .empower {
    font-size: 2.125rem;
  }

  h1 {
    font-size: 3.5rem;
    margin-top: 0.75rem;
  }

  .starting {
    font-size: 1.375rem;
  }

  .heroAssistant {
    background-image: url("/images/home/Iconic-Executive-Assistant-Recruitment-Large.webp");
  }
}

@media (width >= 1600px) {
  .empower {
    font-size: 2.25rem;
  }

  h1 {
    font-size: 3.625rem;
  }

  .starting {
    font-size: 1.5rem;
  }

  .heroAssistant {
    max-width: 680px;
  }
}

@media (width >= 1920px) {
  .hero > div:first-of-type {
    gap: 2.5rem !important;
  }

  .empower {
    font-size: 2.375rem;
  }

  h1 {
    font-size: 3.625rem;
  }

  .starting {
    max-width: 605px;
    font-size: 1.625rem;
  }
}
</style>
