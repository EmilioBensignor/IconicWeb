<template>
  <header class="headerDefault allCenter sticky top-0">
    <button class="hamburger absolute" @click="toggleDrawer">
      <Icon class="text-white" size="2rem" name="mingcute:menu-fill" />
    </button>
    <NuxtImg
      class="logo"
      src="/images/Iconic-Assistants-Logo.png"
      alt="Iconic Assistants Logo" />
    <div>
      <Drawer
        :visible="drawerMenu"
        :show-close-button="false"
        @click-outside="closeDrawer">
        <div class="menuContent column">
          <NuxtLink to="#" class="primaryButton">Get Started</NuxtLink>
          <div v-for="(accordion, index) in menuAccordion" :key="index">
            <p class="font-bold">{{ accordion.title }}</p>
            <ul>
              <li v-for="(link, index) in accordion.list" :key="index">
                <NuxtLink :to="link.route" class="text-white no-underline">{{
                  link.title
                }}</NuxtLink>
              </li>
            </ul>
          </div>
          <div class="column">
            <NuxtLink
              :to="link.route"
              v-for="(link, index) in menuLinks"
              class="text-white font-bold no-underline"
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
  export default {
    data() {
      return {
        drawerMenu: false,
        menuAccordion: null,
        menuLinks: null,
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
    async created() {
      try {
        this.menuAccordion = await fetch("/menu/menuAccordion.json").then(
          (res) => res.json()
        );
        this.menuLinks = await fetch("/menu/menuLinks.json").then((res) =>
          res.json()
        );
      } catch (error) {
        console.error("Error fetching JSON data:", error);
      }
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
    width: 60% !important;
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
    padding: 1rem !important;
  }
</style>

<style scoped>
  header {
    padding: 1.125rem 1rem;
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

  .menuContent {
    gap: 1.875rem;
  }
</style>
