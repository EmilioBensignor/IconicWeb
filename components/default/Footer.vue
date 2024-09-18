<template>
  <footer class="column gap-4 bg-dark-blue">
    <div class="column gap-35">
      <NuxtImg
        class="logo"
        src="/images/Iconic-Assistants-Logo.png"
        alt="Iconic Assistants Logo" />
      <p>Empowering businesses to thrive.</p>
      <NuxtLink class="w-7 primaryButton" to="/">Contact Us</NuxtLink>
      <div class="socialMedia rowCenter gap-35">
        <a href="facebook.com">
          <NuxtImg src="/images/footer/Facebook-Icon.svg" alt="Facebook Icon" />
        </a>
        <a href="instagram.com">
          <NuxtImg
            src="/images/footer/Instagram-Icon.svg"
            alt="Instagram Icon" />
        </a>
        <a href="linkedin.com">
          <NuxtImg src="/images/footer/LinkedIn-Icon.svg" alt="LinkedIn Icon" />
        </a>
      </div>
    </div>
    <div class="menuFooter column gap-2">
      <Accordion value="0">
        <AccordionPanel
          v-for="(item, index) in menuAccordion"
          :key="index"
          :value="item.value">
          <AccordionHeader>
            {{ item.title }}
          </AccordionHeader>
          <AccordionContent>
            <ul class="linksAccordion column gap-3">
              <li v-for="(link, index) in item.list" :key="index">
                <NuxtLink :to="link.link">
                  {{ link.title }}
                </NuxtLink>
              </li>
            </ul>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
      <div class="menuBottom column gap-2">
        <NuxtLink
          v-for="(link, index) in menuBottom"
          :key="index"
          class="text-white no-underline"
          :to="link.route">
          {{ link.title }}
        </NuxtLink>
      </div>
    </div>
    <div class="w-full columnAlignCenter gap-35 mt-2">
      <div class="privacyTerms rowCenter gap-3">
        <NuxtLink to="#" class="text-white no-underline">Privacy</NuxtLink>
        <span>|</span>
        <NuxtLink to="#" class="text-white no-underline">Terms</NuxtLink>
      </div>
      <div class="rightsReserved columnAlignCenter">
        <p>© Iconic Assistants. All Rights Reserved {{ currentYear }}</p>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    data() {
      return {
        menuAccordion: null,
        menuBottom: null,
        currentYear: new Date().getFullYear(),
      };
    },
    async created() {
      try {
        this.menuAccordion = await fetch("/menu/menuAccordion.json").then((res) => res.json());
        this.menuBottom = await fetch("/menu/menuLinks.json").then((res) => res.json());
      } catch (error) {
        console.error("Error fetching JSON data:", error);
      }
    },
  };
</script>

<style>
  .menuFooter .p-accordionheader {
    color: var(--color-white) !important;
    font-weight: 700;
    border-bottom: 1px solid var(--color-grey-50) !important;
    padding: 0.5rem 0;
  }

  .menuFooter
    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active
    > .p-accordionheader {
    background: transparent !important;
    border: none !important;
    color: var(--color-white) !important;
  }

  .menuFooter
    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active
    > .p-accordionheader
    .p-accordionheader-toggle-icon {
    color: var(--color-white) !important;
  }

  .menuFooter .p-accordioncontent-content {
    border-bottom: 1px solid var(--color-grey-50) !important;
    padding: 0.5rem 0;
  }
</style>

<style scoped>
  footer {
    padding: 1.875rem 1rem;
  }

  .logo {
    width: 6.25rem;
  }

  .socialMedia a img {
    width: 2rem;
    height: 2rem;
  }

  .linksAccordion li a {
    font-size: 0.75rem;
    cursor: pointer;
  }

  .menuBottom a {
    font-weight: 700;
  }

  .privacyTerms a {
    font-size: 0.75rem;
  }

  .rightsReserved p {
    font-size: 00.75rem;
  }
</style>