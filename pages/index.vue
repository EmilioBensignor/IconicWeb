<template>
  <div>
    <HomeHero />
    <HomeHappyClients />
    <HomeHowWeHelp />
    <HomeMaximizeEfficiency :linkTo="routes.CONTACT_US" />
    <HomeHowYouWin />
    <HomeYourReturn />
    <HomePrecisionMatching />
    <HomeStartDelegating :linkTo="routes.CONTACT_US" />
    <HomeGoogleReviews />
    <HomeFAQ />
  </div>
</template>

<script>
  import { useRoute } from "vue-router";
  import ROUTES_NAMES from "~/constants/ROUTES_NAMES.js";

  export default {
    setup() {
      const route = useRoute();
      return { route };
    },
    data() {
      return {
        routes: ROUTES_NAMES,
      };
    },
  };
</script>
