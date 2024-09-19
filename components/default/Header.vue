<template>
  <header class="headerDefault allCenter sticky top-0">
    <button class="hamburger absolute" @click="toggleDrawer">
      <Icon class="text-white" size="2rem" name="mingcute:menu-fill" />
    </button>
    <NuxtImg
      class="logo"
      src="/images/Iconic-Assistants-Logo.png"
      alt="Iconic Assistants Logo"
    />
    <div>
      <Drawer
        :visible="drawerMenu"
        :show-close-button="false"
        @click-outside="closeDrawer"
      >
        <div class="menuContent column">
          <NuxtLink to="#" class="primaryButton">Get Started</NuxtLink>
          <div
            v-for="(accordion, index) in menuAccordion"
            class="column gap-3"
            :key="index"
          >
            <p class="linkTitle font-bold">{{ accordion.title }}</p>
            <ul class="column gap-3">
              <li v-for="(link, index) in accordion.list" :key="index">
                <NuxtLink :to="link.route" class="text-white no-underline">{{
                  link.title
                }}</NuxtLink>
              </li>
            </ul>
          </div>
          <div class="column gap-3">
            <NuxtLink
              :to="link.route"
              v-for="(link, index) in menuLinks"
              class="linkTitle text-white font-bold no-underline"
              :key="index"
              >{{ link.title }}</NuxtLink
            >
          </div>
        </div>
      </Drawer>
    </div>
  </header>
</template>

<script>
import { menuAccordion, menuLinks } from "~/shared/menu";

export default {
  data() {
    return {
      drawerMenu: false,
      menuAccordion: menuAccordion,
      menuLinks: menuLinks,
    };
  },
  methods: {
    toggleDrawer() {
      this.drawerMenu = !this.drawerMenu;
    },
    closeDrawer() {
      this.drawerMenu = false;
    },
    handleClickOutside(event) {
      const drawer = this.$refs.drawer;
      if (drawer && !drawer.contains(event.target)) {
        this.closeDrawer();
      }
    },
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.handleClickOutside);
  },
};
</script>

<style>
.p-drawer-mask {
  width: 12.5rem !important;
  top: 4.438rem !important;
}

.p-drawer-header {
  display: none !important;
}

.p-drawer-content {
  background: linear-gradient(
    180deg,
    #0d1428 0%,
    #0e1a3d 50%,
    #0f2052 100%
  ) !important;
  padding: 2.5rem 1rem !important;
}
</style>

<style scoped>
.headerDefault {
  background-color: var(--color-dark-blue);
  padding: 1.125rem 1rem;
  z-index: 5;
}

.hamburger {
  left: 1rem;
  background: none;
  border: none;
  cursor: pointer;
}

.logo {
  width: 6.25rem;
}

.primaryButton {
  font-size: 0.875rem !important;
}

.menuContent {
  gap: 1.875rem;
}

.linkTitle {
  font-size: 1.25rem;
}
</style>
