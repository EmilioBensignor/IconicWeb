<template>
  <div>
    <ContactHero />
    <HomeHappyClients />
    <HomeHowWeHelp />
    <HomeMaximizeEfficiency
      :action="buttonActions.maximizeEfficiency.action"
      :handle-action="handleAction" />
    <HomeHowYouWin />
    <HomeYourReturn />
    <HomePrecisionMatching />
    <HomeStartDelegating
      :action="buttonActions.startDelegating.action"
      :handle-action="handleAction" />
    <HomeGoogleReviews />
    <HomeFAQ />
    <ContactModal
      :is-open="dialogHubspot"
      @update:is-open="dialogHubspot = $event" />
  </div>
</template>

<script setup>
  import { ref, watch, onMounted } from "vue";

  definePageMeta({
    layout: 'get-started'
  })

  const dialogHubspot = ref(false);
  const buttonActions = {
    maximizeEfficiency: { action: "form" },
    startDelegating: { action: "form" },
  };
  const handleAction = (action) => {
    if (action === "form") {
      dialogHubspot.value = true;
    }
  };
</script>
