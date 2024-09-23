<template>
  <article class="reviewCard column relative bg-dark-blue border-grey-1 mx-1">
    <div class="rowCenter gap-2">
      <NuxtImg
        class="avatar"
        :src="`/images/home/reviews/${review.img}-Google-Review.png`"
      />
      <div class="reviewHeader column gap-1">
        <p class="font-bold">{{ review.name }}</p>
        <p>{{ review.numReviews }} reviews</p>
      </div>
    </div>
    <div>
      <div v-if="review.numStars === 4.5">
        <MiscStarsFourHalf />
      </div>
      <div v-if="review.numStars === 5">
        <MiscStarsFive />
      </div>
    </div>
    <p>{{ review.text }}</p>
    <NuxtImg
      class="googleIcon absolute"
      src="/images/home/Google-Icon.svg"
      alt="Google Icon"
    />
  </article>
</template>

<script>
export default {
  props: {
    review: {
      type: Object,
      required: true,
    },
  },
};
</script>

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
  font-size: 0.75rem;
}

@media (width >= 700px) {
  .reviewCard {
    width: 100%;
    max-width: 292px;
    height: max-content;
    break-inside: avoid-column;
    page-break-inside: avoid;
    margin: 0 !important;
    margin-bottom: 0.625rem !important;
  }
}
</style>
