<template>
  <section class="w-full howWeHelp columnAlignCenter gap-4 px-3 py-5">
    <div class="h2Subtitle column">
      <h2 class="column text-center">
        How we help <span>your business thrive</span>
      </h2>
      <p class="subtitle">
        Stop spending countless hours on tasks someone else can do for you.
      </p>
    </div>

    <div class="w-full helpContainer">
      <div
        v-for="(item, index) in help"
        :key="index"
        class="help bgCover"
        @mouseenter="item.show = true"
        @mouseleave="item.show = false"
        :style="{
          backgroundImage: `url(/images/home/${item.img}-Executive-Assistant.jpg)`,
        }">
        <div class="w-full h-full overlay gap-3">
          <h3 class="text-center">{{ item.title }}</h3>
          <p :class="{ 'text-visible': item.show }" class="text-center">
            {{ item.text }}
          </p>
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
            img: "Customer-Support",
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
    transition: height 0.3s ease;
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
    justify-content: flex-end;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #0a132a 100%);
    padding: 0 0.75rem 1.25rem 0.75rem;
    height: 100%;
  }

  .help h3 {
    font-size: 1.125rem;
    font-weight: 700;
    transition: all 0.1s ease-in-out;
    margin-bottom: -1rem;
  }

  .help:hover h3 {
    margin-bottom: 0;
  }

  .overlay p {
    font-size: 0.875rem;
    opacity: 0;
    max-height: 0;
    overflow: hidden;
    transition: opacity 0.5s ease, max-height 0.3s ease;
  }

  .help:hover .overlay p {
    opacity: 1;
    max-height: 200px;
  }

  @media (width >= 480px) {
    .help {
      height: 11rem;
    }

    .h2Subtitle h2 {
      display: block;
    }
  }

  @media (width >= 700px) {
    .howWeHelp {
      padding: 2.5rem !important;
    }

    .h2Subtitle {
      gap: 0.313rem;
      align-self: flex-start;
    }

    h2 {
      text-align: start !important;
    }

    .helpContainer {
      height: 18.75rem;
      display: flex;
    }

    .help {
      height: auto;
      flex: 1;
      position: relative;
      transition: flex 0.3s ease;
    }

    .help:hover {
      height: auto;
      flex: 2;
    }

    .help:hover .overlay {
      align-items: flex-start;
    }

    .overlay {
      align-items: center;
      transition: all 0.5s ease;
      padding: 0 1rem 1.375rem 1rem;
    }

    .helpContainer:hover .help:not(:hover) .overlay {
      padding-bottom: 1.5rem;
    }

    .help h3 {
      max-width: 126px;
      transition: all 0.5s ease;
    }

    .help:hover h3 {
      max-width: 100%;
      text-align: start !important;
      transform: rotate(0deg);
    }

    .helpContainer:hover .help:not(:hover) h3 {
      margin-bottom: 2rem;
      transform: rotate(-90deg);
    }

    .help .overlay p {
      text-align: start !important;
      transition: opacity 0.8s ease, max-height 0.3s ease;
    }

    .help:first-of-type {
      border-radius: 12px 0 0 12px;
    }

    .help:last-of-type {
      border-radius: 0 12px 12px 0;
    }
  }

  @media (width >= 1080px) {
    .howWeHelp {
      gap: 2rem !important;
      padding: 3.75rem 5rem !important;
    }

    .overlay {
      padding: 0 2.813rem 2.25rem 2.813rem;
    }

    .help h3 {
      max-width: 100%;
      font-size: 1.5rem;
    }

    .help:hover h3 {
      margin-bottom: 0;
    }

    .overlay p {
      font-size: 1rem;
    }
  }

  @media (width >= 1280px) {
    .help h3 {
      max-width: 195px;
    }
  }

  @media (width >= 1440px) {
    .howWeHelp {
      gap: 3.5rem !important;
      padding: 3.75rem 8rem !important;
    }

    .helpContainer {
      height: 24rem
    }

    .help h3 {
      font-size: 1.625rem;
    }

    .help .overlay p {
      font-size: 1rem
    }
  }

  @media (width >= 1920px) {
    .help h3 {
      font-size: 1.75rem;
    }

    .help .overlay p {
      font-size: 1.25rem
    }
  }
</style>
