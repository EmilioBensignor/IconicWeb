<template>
  <footer class="column gap-4 bg-dark-blue">
    <section class="footerContent column">
      <div class="column gap-35">
        <NuxtImg
          class="logo"
          src="/images/Iconic-Assistants-Logo.svg"
          alt="Iconic Assistants Logo" />
        <p>Empowering businesses to thrive.</p>
        <NuxtLink
          class="w-7 contactFooter primaryButton"
          :to="routes.CONTACT_US"
          >Contact Us</NuxtLink
        >
        <div class="socialMedia rowCenter gap-35">
          <a
            href="https://facebook.com"
            class="iconFooter bgCover"
            :style="{
              backgroundImage: `url('/images/footer/Facebook-Icon.svg')`,
            }"></a>
          <a
            href="https://instagram.com"
            class="iconFooter bgCover"
            :style="{
              backgroundImage: `url('/images/footer/Instagram-Icon.svg')`,
            }"></a>
          <a
            href="https://linkedin.com"
            class="iconFooter bgCover"
            :style="{
              backgroundImage: `url('/images/footer/LinkedIn-Icon.svg')`,
            }"></a>
        </div>
      </div>
      <div class="menuFooter column gap-2">
        <Accordion class="menuMobile" value="0">
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
        <div class="menuDesktop">
          <div
            class="column gap-3"
            v-for="(item, index) in menuAccordion"
            :key="index">
            <p class="font-bold">{{ item.title }}</p>
            <ul class="column gap-2">
              <li v-for="(link, index) in item.list" :key="index">
                <NuxtLink class="text-white no-underline" :to="link.route">
                  {{ link.title }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
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
    </section>
    <div class="w-full footerBottom columnAlignCenter gap-35 mt-2">
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
  import ROUTES_NAMES from "~/constants/ROUTES_NAMES.js";
  import { menuAccordion, menuLinks } from "~/shared/menu";

  export default {
    data() {
      return {
        routes: ROUTES_NAMES,
        menuBottom: menuLinks,
        menuAccordion: menuAccordion,
        currentYear: new Date().getFullYear(),
      };
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

  @media (width >= 700px) {
    .menuFooter .p-accordionheader {
      padding: 0.75rem 0;
    }

    .menuFooter .p-accordioncontent-content {
      padding: 0.75rem 0;
    }
  }
</style>

<style scoped>
  footer {
    padding: 1.875rem 1rem;
  }

  .footerContent {
    gap: 1.25rem;
  }

  .logo {
    width: 6.25rem;
  }

  .iconFooter {
    width: 2rem;
    height: 2rem;
  }

  .contactFooter {
    max-width: 168px;
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

  .menuDesktop {
    display: none;
  }

  @media (width >= 700px) {
    footer {
      padding: 2.5rem;
    }

    .footerContent {
      flex-direction: row;
    }

    .footerContent > div {
      width: 50%;
    }

    .logo {
      width: 9.375rem;
    }

    .footerContent > div:first-of-type {
      gap: 0.75rem;
    }

    .footerContent > div:first-of-type p {
      font-size: 1.125rem;
    }

    .linksAccordion li a {
      font-size: 0.875rem;
    }

    .menuBottom {
      gap: 1rem !important;
    }
  }

  @media (width >= 850px) {
    .contactFooter {
      max-width: 180px;
    }
  }

  @media (width >= 1080px) {
    footer {
      padding: 3.75rem 5rem !important;
    }

    .footerContent > div:first-of-type {
      gap: 1.25rem;
    }

    .contactFooter {
      max-width: 200px;
    }

    .menuMobile {
      display: none;
    }

    .menuFooter {
      flex-direction: row;
      justify-content: end;
      gap: 2.5rem !important;
    }

    .menuDesktop {
      display: flex;
      gap: 2.5rem;
    }

    .menuBottom a,
    .menuFooter p {
      font-size: 1.25rem;
    }

    .footerBottom {
      align-items: flex-end;
      margin-top: 0 !important;
    }

    .privacyTerms a,
    .rightsReserved p {
      font-size: 1rem;
    }
  }

  @media (width >= 1440px) {
    footer {
      padding: 3.75rem 8rem !important;
    }

    .logo {
      width: 11rem;
    }

    .footerContent > div:first-of-type p {
      font-size: 1.25rem;
    }

    .contactFooter {
      max-width: 240px;
    }

    .menuBottom a,
    .menuFooter p {
      font-size: 1.375rem;
    }

    .menuDesktop ul li a {
      font-size: 1.125rem;
    }

    .privacyTerms a,
    .rightsReserved p {
      font-size: 1.125rem;
    }
  }
</style>
