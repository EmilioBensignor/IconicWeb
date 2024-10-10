<template>
  <section class="hero column gap-2">
    <div ref="formContainer" id="get-started" class="formGetStarted"></div>
  </section>
</template>

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

.formGetStarted {
  width: 100%;
  max-width: 800px;
  background-color: white;
  border-radius: 24px;
  padding: 1.25rem;
}
</style>
