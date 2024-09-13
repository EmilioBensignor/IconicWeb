<template>
  <section class="w-full columnAlignCenter px-3 py-5">
    <h2>Your return on investment</h2>
    <div class="w-full rowSpaceBetween gap-2 mt-3">
      <!-- Categories -->
      <div class="column">
        <div>
          <p class="text-center font-bold my-2">Cost comparison</p>
        </div>
        <div class="bg-dark-blue border-grey-1 border-round-xl">
          <div
            class="categories p-2"
            v-for="(category, index) in categories"
            :key="index"
          >
            <p class="text-center font-12">{{ category }}</p>
          </div>
        </div>
      </div>
      <!-- Iconic -->
      <div class="column relative">
        <div class="bg-blue-light-gradient border-round-top-xl p-10-5">
          <p class="text-center font-14 font-bold">FULL-TIME ICONIC EA</p>
        </div>
        <div
          class="iconic allCenter flex-grow-1 bg-dark-blue"
          v-for="(iconicItem, index) in iconic"
          :key="index"
        >
          <p class="text-center font-12">{{ iconicItem }}</p>
        </div>
        <div class="less absolute bg-blue-light-gradient">
          <p class="text-center font-10">70% LESS</p>
        </div>
      </div>
      <!-- Employee -->
      <div class="column border-round-xl border-grey-1">
        <div class="bg-grey border-round-top-xl p-10-5">
          <p class="text-black text-center font-14 font-bold">
            FULL-TIME EMPLOYEE
          </p>
        </div>
        <div
          class="employee allCenter flex-grow-1 bg-dark-blue"
          v-for="(employeeItem, index) in employee"
          :key="index"
        >
          <p class="text-center font-12">{{ employeeItem }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        "Hourly rate of pay",
        "Fringe benefits 20%",
        "Overhead rate 30%",
        "Total pay rate",
        "Hours per month",
        "TOTAL MONTHLY",
      ],
      iconic: ["$11.00", "$0.00", "$0.00", "$11.00", "160 Hrs", "$1,760.00"],
      employee: ["$25.45", "$5.09", "$7.64", "$38.18", "160 Hrs", "$6,108.80"],
    };
  },
};
</script>

<style scoped>
.p-10-5 {
  padding: 0.625rem 0.313rem;
}

.categories,
.iconic,
.employee {
  border-bottom: 1px solid var(--color-grey-50);
}

.categories:last-of-type,
.iconic:last-of-type,
.employee:last-of-type {
  border-bottom: none;
}

.employee:last-of-type {
  border-radius: 0 0 0.75rem 0.75rem;
}

.categories:last-of-type p,
.iconic:last-of-type p,
.employee:last-of-type p {
  font-weight: 800;
}

.iconic {
  border-left: 3px solid var(--color-blue);
  border-right: 3px solid var(--color-blue);
}

.less {
  width: 105%;
  left: -0.225rem;
  right: 0;
  bottom: -0.75rem;
  border-radius: 20px;
  padding: 0.25rem 1rem;
  margin: 0 auto;
}

@media only screen and (min-width: 350px) {
  .iconic,
  .employee {
    padding: 0.5rem 1.25rem;
  }

  .less {
    padding: 0.25rem 1.25rem;
  }
}
</style>
