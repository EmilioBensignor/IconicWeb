<template>
  <section class="w-full columnAlignCenter gap-4 px-3 py-5">
    <h2 class="column text-center">
      How we help <span>your business thrive</span>
    </h2>
    <div class="w-full">
      <div
        v-for="(item, index) in help"
        :key="index"
        class="help relative bgCover"
        @mouseenter="item.show = true"
        @mouseleave="item.show = false"
        :style="{
          backgroundImage: `url(/images/home/${item.img}-Executive-Assistant.jpg)`,
        }"
      >
        <div class="w-full h-full overlay gap-3 aboslute top-0 left-0">
          <h3 class="text-center">{{ item.title }}</h3>
          <transition name="fade">
            <p v-show="item.show" class="text-center">{{ item.text }}</p>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      help: [
        {
          img: "Executive-Support",
          title: "Executive Support",
          text: "We handle scheduling appointments, managing travel plans, arranging meetings, and preparing reports and presentations, ensuring efficient support for your business.",
          show: false,
        },
        {
          img: "Administrative-Tasks",
          title: "Administrative Tasks",
          text: "We manage emails, handle data entry, post to social media, and take phone calls, providing comprehensive administrative support.",
          show: false,
        },
        {
          img: "Administrative-Tasks",
          title: "Customer Support",
          text: "We provide comprehensive support through phone, email, and live chat, focusing on customer retention, relationship building, escalation management, and seamless onboarding.",
          show: false,
        },
        {
          img: "Finance-Bookkeeping",
          title: "Finance & Bookkeeping",
          text: "We offer cloud bookkeeping services, including expense tracking and reporting, ledger maintenance, invoicing, and payroll support.",
          show: false,
        },
      ],
    };
  },
};
</script>

<style scoped>
.help {
  height: 6.25rem;
  overflow: hidden;
  transition: all 0.7s ease;
}

.help:hover {
  height: 15.625rem;
}

.help:first-of-type {
  border-radius: 12px 12px 0 0;
}

.help:last-of-type {
  border-radius: 0 0 12px 12px;
}

.overlay {
  display: flex;
  flex-direction: column;
  justify-content: end;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #0A132A 100%);
  padding: 0 0.75rem 1.25rem 0.75rem;
}

.overlay h3 {
  font-size: 1.125rem;
  font-weight: 700;
}

.overlay p {
  font-size: 0.875rem;
  opacity: 0;
  transition: all 0.5s ease;
}

.help:hover .overlay p {
  opacity: 1;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
