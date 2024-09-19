<template>
  <section class="w-full columnAlignCenter gap-25 px-3 py-5">
    <h2 class="column text-center">
      What our clients <span>are saying about us</span>
    </h2>
    <div class="columnAlignCenter gap-1">
      <NuxtImg
        class="w-full"
        src="/images/home/Google-Reviews-5-Stars-Iconic-Assistants.png"
        alt="Google Reviews 5 Stars Iconic Assistants"
      />
      <MiscStarsFourHalf />
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
        <article class="reviewCard column relative bg-dark-blue border-grey-1 mx-1">
          <div class="rowCenter gap-2">
            <NuxtImg
              class="avatar"
              :src="`/images/home/reviews/${slotProps.data.img}-Google-Review.png`"
            />
            <div class="reviewHeader column gap-1">
              <p class="font-bold">{{ slotProps.data.name }}</p>
              <p>{{ slotProps.data.numReviews }} Reviews</p>
            </div>
          </div>
          <div>
            <div v-if="slotProps.data.numStars === 4.5">
              <MiscStarsFourHalf />
            </div>
            <div v-if="slotProps.data.numStars === 5">
              <MiscStarsFive />
            </div>
          </div>
          <p>{{ slotProps.data.text }}</p>
          <NuxtImg
            class="googleIcon absolute"
            src="/images/home/Google-Icon.svg"
            alt="Google Icon"
          />
        </article>
      </template>
    </Carousel>
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
</style>

<style scoped>
.reviewCard {
  gap: 0.625rem;
  border-radius: 12px;
  padding: 1.25rem 0.75rem;
}

.googleIcon {
  width: 1.25rem;
  top: 1.25rem;
  right: 0.75rem;
}

.avatar {
  width: 2.5rem;
}

.reviewHeader p:first-of-type {
  font-size: 0.875rem;
}

.reviewHeader p:last-of-type {
  font-size: 0.75rem;
}

.reviewCard p:last-of-type {
  font-size: 0.75rem
}
</style>
