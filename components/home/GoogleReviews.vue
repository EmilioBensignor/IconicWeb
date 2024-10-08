<template>
  <section id="googleReviewsSection" class="w-full googleReviews columnAlignCenter gap-25 px-3 py-5">
    <div class="googleHeader">
      <div class="h2Google column">
        <h2 class="column text-center">
          What our clients <span>are saying about us</span>
        </h2>
        <p class="subtitle">
          Real feedback from businesses empowered by Iconic Assistants.
        </p>
      </div>
      <div class="columnAlignCenter gap-1">
        <NuxtImg
          class="googleLogo"
          src="/images/home/Google-Reviews-5-Stars-Iconic-Assistants.svg"
          alt="Google Reviews 5 Stars Iconic Assistants"
        />
        <MiscStarsFourHalf class="googleStars" />
      </div>
    </div>
    <Carousel
      :value="reviews"
      :num-visible="1"
      :num-scroll="1"
      circular
      :autoplayInterval="3000"
      class="w-full carrouselReviews"
    >
      <template #item="slotProps">
        <HomeGoogleReviewsReviewCard :review="slotProps.data" />
      </template>
    </Carousel>
    <div class="reviewsContainer">
      <div class="clipContainer">
        <HomeGoogleReviewsReviewCard
          :review="review"
          v-for="(review, index) in reviews"
          :key="index"
        />
      </div>
    </div>
    <NuxtLink to="/" class="secondaryButton mt-2">
      <div>
        <p>Read more reviews</p>
      </div>
    </NuxtLink>
  </section>
</template>

<script>
import { reviews } from '~/shared/reviews';

export default {
  data() {
    return {
      reviews: reviews,
    };
  },
  mounted() {
    window.addEventListener("touchstart", this.handleTouchStart, {
      passive: true,
    });
  },
  beforeUnmount() {
    window.removeEventListener("touchstart", this.handleTouchStart);
  },
};
</script>

<style>
.carrouselReviews .p-carousel-next-button,
.carrouselReviews .p-carousel-prev-button {
  visibility: hidden;
}

.carrouselReviews .p-carousel-indicator-list {
  visibility: hidden;
  gap: 0.5rem;
  margin: 0.625rem 0.5rem 0 0.5rem;
}

.carrouselReviews .p-carousel-indicator {
  width: 0.5rem;
  height: 0.5rem;
  background-color: var(--color-grey);
  border-radius: 50%;
}

.carrouselReviews .p-carousel-indicator-active {
  background-color: var(--color-blue);
}

@media (width >= 480px) {
  .googleReviews .p-carousel {
    max-width: 506px;
  }
}

@media (width >= 700px) {
  .googleReviews .p-carousel {
    display: none !important;
  }
}
</style>

<style scoped>
.googleLogo {
  width: 6.5rem;
  margin-top: 0.75rem;
}

.reviewsContainer {
  display: none;
}

@media (width >= 480px) {
  .h2Google h2 {
    display: block;
  }
}

@media (width >= 700px) {
  .googleReviews {
    gap: 2rem !important;
    padding: 2.5rem !important;
  }

  .googleHeader {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .h2Google h2 {
    text-align: start !important;
  }

  .googleLogo {
    width: 7rem;
    margin-top: 0;
  }

  .googleStars {
    display: flex;
    gap: 0.266rem;
  }

  .reviewsContainer {
    width: 100%;
    height: 40rem;
    display: block;
    position: relative;
    overflow: hidden;
  }

  .clipContainer {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    clip-path: inset(0 0 0 0);
    column-count: 2;
    column-gap: 1.25rem;
    row-gap: 0.625rem;
  }
}

@media (width >= 1080px) {
  .googleReviews {
    padding: 3.75rem 5rem !important;
  }

  .googleLogo {
    width: 8.313rem;
  }

  .clipContainer {
    column-count: 3;
    column-gap: 0.75rem;
  }
}

@media (width >= 1440px) {
  .googleReviews {
    gap: 3.5rem !important;
    padding: 3.75rem 8rem !important;
  }

  .clipContainer {
    column-gap: 1rem;
  }
}

@media (width >= 1600px) {
  .clipContainer {
    column-count: 4;
  }
}
</style>
