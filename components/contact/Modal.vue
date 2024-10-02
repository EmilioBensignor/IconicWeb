<template>
  <Dialog
    :visible="isOpen"
    :modal="true"
    :closable="true"
    @update:visible="$emit('update:isOpen', $event)"
    @hide="closeDialog">
    <template #header>
      <h3>Contact Us</h3>
    </template>
    <div
      ref="formContainer"
      id="modal-get-started"
      class="hubspotModal bg-white rounded-xl px-5 py-3"></div>
  </Dialog>
</template>

<script setup>
  import { ref, watch, onMounted } from "vue";

  const props = defineProps({
    isOpen: Boolean,
  });

  const emit = defineEmits(["update:isOpen"]);

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
        target: "#modal-get-started",
      });
    }
  };

  watch(
    () => props.isOpen,
    (newValue) => {
      if (newValue) {
        setTimeout(() => {
          createHubSpotForm();
        }, 100);
      }
    }
  );

  onMounted(() => {
    if (props.isOpen) {
      createHubSpotForm();
    }
  });

  const closeDialog = () => {
    emit("update:isOpen", false);
  };
</script>

<style>
  .p-overlay-mask {
    background: rgba(0, 0, 0, 0.32) !important;
  }

  .p-dialog {
    width: 100%;
    max-width: 800px;
    background: white !important;
    border-radius: 24px !important;
    color: var(--color-black) !important;
    margin: 1rem;
  }

  .p-dialog-header {
    padding: 0.5rem 1rem !important;
  }

  .hubspotModal {
    width: 100%;
    border-radius: 24px !important;
    padding: 1.25rem;
  }
</style>
