<template>
  <section class="w-full columnAlignCenter gap-35 px-3 py-5">
    <h2 class="column text-center">
      What our clients <span>are saying about us</span>
    </h2>
    <div class="columnAlignCenter gap-1">
      <NuxtImg
        class="w-full"
        src="/images/home/Google-Reviews-5-Stars-Iconic-Assistants.png"
        alt="Google Reviews 5 Stars Iconic Assistants"
      />
      <div>
        <Icon style="color: var(--color-yellow)" name="mingcute:star-fill" />
        <Icon style="color: var(--color-yellow)" name="mingcute:star-fill" />
        <Icon style="color: var(--color-yellow)" name="mingcute:star-fill" />
        <Icon style="color: var(--color-yellow)" name="mingcute:star-fill" />
        <Icon
          style="color: var(--color-yellow)"
          name="mingcute:star-half-fill"
        />
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
      <div
        class="bg-dark-blue border-grey-1"
        v-for="(review, index) in reviews"
        :key="index"
      >
        <NuxtImg
          :src="`/images/home/reviews/${review.img}-Google-Review.png`"
        />
        <p>{{ review.name }}</p>
      </div>
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
          text: "Iconic Assistant has been a true partner in our business, helping us find an assistant who not only meets but exceeds our expectations. The entire process, from the initial consultation to the final onboarding, was seamless and handled with great professionalism. The assistant is proactive, detail-oriented, and has quickly become an indispensable part of our team.",
        },
      ],
    };
  },
};
</script>

<style>
.carrouselReviews .p-carousel-next-button,
.carrouselReviews .p-carousel-prev-button {
  display: none;
}
</style>
