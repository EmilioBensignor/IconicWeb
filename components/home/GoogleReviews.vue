<template>
  <section class="w-full googleReviews columnAlignCenter gap-25 px-3 py-5">
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
          src="/images/home/Google-Reviews-5-Stars-Iconic-Assistants.png"
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
export default {
  data() {
    return {
      reviews: [
        {
          img: "Ethan-C",
          alt: "Ethan C",
          name: "Ethan C",
          numReviews: 6,
          numStars: 5,
          text: "It has transformed how we manage our daily operations. The quality of the assistants is exceptional, and the personalized selection process always ensures the best fit for our team. We recommend it so much.",
        },
        {
          img: "Brian-S",
          alt: "Brian S",
          name: "Brian S",
          numReviews: 7,
          numStars: 4.5,
          text: "The quality of the assistants at Iconic Assistant is impressive. The process was almost flawless, with only a minor delay in onboarding. Still, it's been a great experience overall.",
        },
        {
          img: "Demian-L",
          alt: "Demian L",
          name: "Demian L",
          numReviews: 3,
          numStars: 5,
          text: "The selection process at Iconic Assistant was seamless. We found a perfect match!",
        },
        {
          img: "Liam-A",
          alt: "Liam A",
          name: "Liam A",
          numReviews: 5,
          numStars: 4.5,
          text: "We're thrilled with our new assistant from Iconic Assistant. The support team is responsive and helpful.  Overall, we're very satisfied with the results.",
        },
        {
          img: "Mark-E",
          alt: "Mark E",
          name: "Mark E",
          numReviews: 2,
          numStars: 4.5,
          text: "The psychometric assessments at Iconic Assistant are top-notch, and we found a great match.",
        },
        {
          img: "Sharon-H",
          alt: "Sharon H",
          name: "Sharon H",
          numReviews: 5,
          numStars: 5,
          text: "Iconic Assistant has been a key partner in our business, helping us find an assistant who exceeds our expectations. The process, from consultation to onboarding, was smooth and professional. The assistant is proactive, detail-oriented, and now an indispensable part of our team.",
        },
        {
          img: "Liam-A",
          alt: "Liam A",
          name: "Liam A",
          numReviews: 5,
          numStars: 4.5,
          text: "We're thrilled with our new assistant from Iconic Assistant. The support team is responsive and helpful.  Overall, we're very satisfied with the results.",
        },
        {
          img: "Demian-L",
          alt: "Demian L",
          name: "Demian L",
          numReviews: 3,
          numStars: 5,
          text: "The selection process at Iconic Assistant was seamless. We found a perfect match!",
        },
        {
          img: "Brian-S",
          alt: "Brian S",
          name: "Brian S",
          numReviews: 7,
          numStars: 4.5,
          text: "The quality of the assistants at Iconic Assistant is impressive. The process was almost flawless, with only a minor delay in onboarding. Still, it's been a great experience overall.",
        },
      ],
    };
  },
};
</script>

<style>
.carrouselReviews .p-carousel-next-button,
.carrouselReviews .p-carousel-prev-button {
  visibility: hidden;
}

.carrouselReviews .p-carousel-indicator-list {
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
    display: block;
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
</style>
