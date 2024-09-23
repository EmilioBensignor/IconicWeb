<template>
  <section class="w-full yourReturn columnAlignCenter gap-3 px-3 py-5">
    <div class="h2Subtitle column">
      <h2>Your return on investment</h2>
      <p class="subtitle">
        Our clients <span class="font-bold">save $30k+ a year</span> by hiring
        ICONIC EAs instead of an in-house employee
      </p>
    </div>
    <div class="w-full costComparisonTable rowSpaceBetween gap-2">
      <!-- Categories -->
      <div class="categoriesContainer column">
        <div>
          <p class="text-center font-bold my-2">Cost comparison</p>
        </div>
        <div class="bg-dark-blue border-grey-1 border-round-xl">
          <div
            class="categories allCenter"
            v-for="(category, index) in categories"
            :key="index"
          >
            <p class="text-center font-12">{{ category }}</p>
          </div>
        </div>
      </div>
      <!-- Iconic -->
      <div class="iconicContainer column relative">
        <div class="bg-blue-light-gradient border-round-top-xl p-10-5">
          <p class="text-center font-14 font-bold">FULL-TIME ICONIC EA</p>
        </div>
        <div
          class="iconic allCenter flex-grow-1 bg-blue-light-gradient"
          v-for="(iconicItem, index) in iconic"
          :key="index"
        >
          <div class="w-full h-full allCenter bg-dark-blue">
            <p class="text-center font-12">{{ iconicItem }}</p>
          </div>
        </div>
        <div class="less absolute bg-blue-light-gradient">
          <p class="text-center font-10 font-bold">70% LESS</p>
        </div>
      </div>
      <!-- Employee -->
      <div class="employeeContainer column border-round-xl border-grey-1">
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
  height: 2.75rem;
}

.categories,
.employee,
.iconic div {
  border-bottom: 1px solid var(--color-grey-50);
}

.categories {
  padding: 0.5rem 0.4rem;
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
  padding: 0 3px;
}

.less {
  width: 105%;
  left: -0.15rem;
  right: 0;
  bottom: -0.75rem;
  border-radius: 20px;
  padding: 0.25rem 1rem;
  margin: 0 auto;
}

@media (width >= 700px) {
  .yourReturn {
    gap: 2rem !important;
    padding: 2.5rem !important;
  }

  .costComparisonTable {
    gap: 0.719rem !important;
  }

  .categoriesContainer,
  .iconicContainer,
  .employeeContainer {
    width: 32%;
  }

  .employeeContainer {
    border-radius: 20px !important;
  }

  .employeeContainer > div:first-child,
  .iconicContainer > div:first-child {
    border-radius: 20px 20px 0 0 !important;
    padding: 0.938rem 1.688rem;
  }

  .categoriesContainer > div:first-child p,
  .employeeContainer > div:first-child p,
  .iconicContainer > div:first-child p {
    font-size: 1.5rem;
  }

  .categoriesContainer > div:first-child p {
    margin: 1.844rem 0 !important;
  }

  .categories {
    padding: 0.625rem 1.25rem;
  }

  .categories, .iconic, .employee {
    height: 3.125rem;
  }

  .iconic {
    padding: 0 5px;
  }

  .iconicContainer div:nth-child(7) {
    padding: 0 5px 5px 5px !important;
    border-radius: 0 0 20px 20px;
  }
  
  .iconicContainer div:nth-child(7) div {
    border-radius: 0 0 15px 15px;
    border-bottom: 0;
  }

  .employee:last-of-type {
    border-radius: 0 0 20px 20px
  }

  .categories p {
    font-size: 1rem;
  }

  .iconic div p, .employee p {
    font-size: 1.125rem
  }

  .less {
    width: 80%;
    left: 0;
    bottom: -1.8rem;
    padding: 0.625rem 1.25rem;
  }

  .less p {
    font-size: 1rem

  }
}
</style>
