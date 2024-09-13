<template>
  <section class="w-full columnAlignCenter gap-4 px-3 py-5">
    <div class="w-full rowSpaceBetweenCenter">
      <div class="info">
        <p>+1000</p>
        <p>Happy clients</p>
      </div>
      <div class="gradientLine"></div>
      <div class="info">
        <p>+1600</p>
        <p>Virtual assistants</p>
      </div>
    </div>
    <div class="w-full rowSpaceBetweenCenter">
      <div class="info">
        <p>4.9</p>
        <p>On Google Reviews</p>
      </div>
      <div class="gradientLine"></div>
      <div class="info">
        <p>24/7</p>
        <p>Customer support</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.info {
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}

.info p {
  text-align: center;
}

.info p:first-of-type {
  font-size: 2rem;
  font-weight: 900;
}

.info p:last-of-type {
  font-size: 0.75rem;
  font-weight: 500;
}

.gradientLine {
  width: 50px;
  height: 4px;
  background: linear-gradient(
    90deg,
    var(--color-light-blue),
    var(--color-blue)
  );
  border-radius: 10px;
  transform: rotate(90deg);
}
</style>
