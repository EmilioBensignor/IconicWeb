<template>
  <header class="headerDefault allCenter sticky top-0">
    <button class="hamburger absolute" @click="toggleDrawer">
      <Icon class="text-white" size="2rem" name="mingcute:menu-fill" />
    </button>
    <NuxtImg
      class="logo"
      src="/images/Iconic-Assistants-Logo.svg"
      alt="Iconic Assistants Logo"
    />
    <div class="menuSidebar">
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
    <div class="navBar rowCenter">
      <ul class="rowCenter">
        <li v-for="(item, index) in menuAccordion" :key="index">
          <Button
            :label="item.title"
            @click="(event) => toggleMenu(event, index)"
            aria-haspopup="true"
            :aria-controls="`menu_accordion_${index}`"
            class="font-bold"
          />
          <Menu
            :ref="
              (el) => {
                if (el) menuRefs[index] = el;
              }
            "
            :id="`menu_accordion_${index}`"
            :model="transformMenuItems(item.list)"
            :popup="true"
          />
        </li>
        <li v-for="(item, index) in menuLinks" :key="index">
          <NuxtLink :to="item.route" class="text-white no-underline font-bold">
            {{ item.title }}
          </NuxtLink>
        </li>
      </ul>
      <NuxtLink :to="'/'" class="primaryButton headerBtn">Get Started</NuxtLink>
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
      menuRefs: {},
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
    toggleMenu(event, index) {
      if (this.menuRefs[index]) {
        this.menuRefs[index].toggle(event);
      }
    },
    transformMenuItems(items) {
      return items.map((item) => ({
        label: item.title,
        command: () => {
          this.$router.push(item.route);
        },
      }));
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

@media (width >= 700px) {
  .p-drawer-mask {
    width: 15.5rem !important;
    top: 5.094rem !important;
  }

  .p-drawer-content {
    padding: 2.5rem !important;
  }
}

@media (width >= 1080px) {
  .p-drawer-mask,
  .menuSidebar {
    display: none !important;
  }

  .p-menu {
    min-width: 10rem !important;
    background: var(--color-dark-blue) !important;
    border-radius: 6px !important;
    padding: 1rem !important;
    margin-top: 0.5rem;
  }

  .p-menu-list {
    gap: 1rem !important;
  }

  .p-menu-item {
    transition: all 0.3s;
  }

  .p-menu-item:hover {
    color: var(--color-light-blue);
  }
}

@media (width >= 1440px) {
  .p-menu-list {
    gap: 1.5rem !important;
  }

  .p-menu-item-label {
    font-size: 1.125rem
  }
}
</style>

<style scoped>
.headerDefault {
  background: #0a132a;
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

.navBar {
  display: none;
}

@media (width >= 700px) {
  .headerDefault {
    flex-direction: row;
    justify-content: flex-start;
    gap: 2.5rem;
    padding: 1.125rem 2.5rem;
  }

  .hamburger {
    display: flex;
    position: relative !important;
    left: 0;
  }

  .hamburger span {
    width: 2.5rem;
  }

  .logo {
    width: 8.125rem;
  }

  .menuContent {
    gap: 2.5rem;
  }
}

@media (width >= 1080px) {
  .headerDefault {
    justify-content: space-between;
    padding: 1.156rem 5rem;
  }

  .hamburger {
    display: none;
  }

  .navBar {
    display: flex;
    justify-content: end;
    gap: 1.875rem;
  }

  .navBar ul {
    gap: 1.875rem;
  }

  .navBar ul li a,
  .navBar ul li button {
    font-size: 1.25rem;
  }

  .headerBtn {
    font-size: 1.25rem !important;
  }
}

@media (width >= 1440px) {
  .headerDefault {
    padding: 1.156rem 8rem;
  }

  .logo {
    width: 9rem;
  }

  .navBar,
  .navBar ul {
    gap: 3.5rem;
  }

  .navBar ul li a, .navBar ul li button {
    font-size: 1.375rem;
  }
}
</style>
