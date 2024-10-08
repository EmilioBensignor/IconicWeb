<template>
  <section class="w-full columnAlignCenter">
    <Swiper
      :slides-per-view="1.3"
      :space-between="12"
      :breakpoints="{
        380: {
          slidesPerView: 1.5,
        },
        450: {
          slidesPerView: 1.8,
        },
        550: {
          slidesPerView: 2.2,
        },
        700: {
          slidesPerView: 2.3,
          spaceBetween: 16,
        },
        800: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
        1080: {
          spaceBetween: 25,
        },
      }"
      class="swiperLinksWeb"
    >
      <SwiperSlide
        v-for="(item, index) in linksWeb"
        class="linkWeb"
        :key="index"
      >
        <NuxtLink :to="item.link" v-smooth-scroll class="h-full columnAlignCenter no-underline">
          <NuxtImg
            class="w-full"
            :src="`/images/thankYou/${item.img}-Iconic-Assistants.png`"
            :alt="`${item.alt} Iconic Assistants`"
          />
          <div class="w-full h-full allCenter">
            <p class="text-center text-white font-bold">{{ item.title }}</p>
          </div>
        </NuxtLink>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script>
export default {
  data() {
    return {
      linksWeb: [
        {
          img: "How-you-win",
          alt: "How you win",
          title: "How you win with Iconic Assistants",
          link: "/get-started/#howYouWinSection",
        },
        {
          img: "Success-Stories",
          alt: "Success Stories",
          title: "Read our success stories",
          link: "/get-started/#googleReviewsSection",
        },
        {
          img: "FAQ",
          alt: "Frequently Asked Questions",
          title: "Check our Frequently Asked Questions",
          link: "/get-started/#faqSection",
        },
      ],
    };
  },
};
</script>

<style>
@media (width >=1080px) {
  .swiperLinksWeb .swiper-wrapper {
    justify-content: center;
    gap: 1.5rem;
  }
}
</style>

<style scoped>
section {
  overflow: hidden;
  padding: 0 1rem 1rem 1rem;
}

.swiperLinksWeb {
  width: 100%;
  height: 12rem;
  cursor: grab;
}

.linkWeb {
  height: 100%;
  background: linear-gradient(90deg, var(--color-grey), var(--color-grey));
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  padding: 1px;
}

.linkWeb:hover {
  background: linear-gradient(
    90deg,
    var(--color-blue),
    var(--color-light-blue)
  );
}

.linkWeb > a {
  gap: 0.625rem;
  background-color: var(--color-dark-blue);
  border-radius: 20px;
  padding: 0.75rem;
}

.linkWeb img {
  height: 7.5rem;
  object-fit: cover;
  border-radius: 9px;
}

:deep(.swiper-wrapper) {
  display: flex;
  align-items: stretch;
}

:deep(.swiper-slide) {
  height: auto;
}

@media (width >=700px) {
  section {
    padding: 0 2rem 2rem 2rem;
  }

  .swiperLinksWeb {
    height: 15.25rem;
  }

  .linkWeb > div {
    padding: 1.25rem;
  }

  .linkWeb img {
    height: 9.375rem;
  }

  .linkWeb p {
    font-size: 1.125rem;
  }
}

@media (width >=850px) {
  .swiperLinksWeb {
    cursor: auto;
  }
}

@media (width >=1080px) {
  section {
    padding: 0 5rem;
  }

  .swiperLinksWeb {
    height: 17.125rem;
  }

  .linkWeb {
    max-width: 22.5rem;
    margin-right: 0 !important;
  }

  .linkWeb > div {
    padding: 1.25rem;
  }

  .linkWeb img {
    height: 10.375rem;
  }

  .linkWeb p {
    font-size: 1.5rem;
  }
}
</style>
