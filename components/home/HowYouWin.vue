<template>
  <section class="w-full columnAlignCenter px-3 py-4">
    <h2 class="text-center">How you win with Iconic Assistants</h2>
    <div class="w-full columnAlignCenter gap-4 my-4">
      <div
        class="w-full bg-dark-blue border-grey-1 border-round-3xl"
        v-for="(win, index) in wins"
        :key="index"
      >
        <div class="relative">
          <NuxtImg
            class="w-full border-round-top-3xl"
            :src="`/images/home/${win.img}.png`"
            alt=""
          />
          <p class="absolute title">{{ win.title }}</p>
        </div>
        <div class="winBody">
          <ul class="column gap-2">
            <li
              class="flex gap-2"
              v-for="(item, index) in win.description"
              :key="index"
            >
              <Icon
                :name="`mingcute:${item.icon}`"
                style="color: var(--color-light-blue)"
              />
              <p>{{ item.text }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      wins: [
        {
          img: "Efficiency-Remote-Executive-Assistant-Iconic",
          alt: "Efficiency Remote Executive Assistant Iconic",
          title: "Efficiency",
          description: [
            {
              icon: "calendar-time-add-line",
              text: "Quick and efficient 5-7 days turnaround time",
            },
            {
              icon: "check-circle-line",
              text: "Highly qualified, pre-vetted talent pool",
            },
            {
              icon: "alarm-1-line",
              text: "48hr rapid replacement ensuring operational continuity.",
            },
          ],
        },
        {
          img: "Expertise-Remote-Executive-Assistant-Iconic",
          alt: "Expertise Remote Executive Assistant Iconic",
          title: "Expertise",
          description: [
            {
              icon: "medal-line",
              text: "10+ years recruitment experience",
            },
            {
              icon: "diamond-2-line",
              text: "Skilled assistants that will adapt to your business",
            },
            {
              icon: "world-2-line",
              text: "North American time zone",
            },
          ],
        },
        {
          img: "Scalability-Remote-Executive-Assistant-Iconic",
          alt: "Scalability Remote Executive Assistant Iconic",
          title: "Scalability",
          description: [
            {
              icon: "large-arrow-up-line",
              text: "Upscale your teams on demand",
            },
            {
              icon: "file-forbid-line",
              text: "No lock in contract, deposit fee, nor recruitment fee",
            },
            {
              icon: "cash-line",
              text: "Starting at $11/Hr",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.title {
  left: 0.75rem;
  bottom: 0.8rem;
  font-size: 1.125rem;
  font-weight: 600;
}

.winBody {
  padding: 0.75rem;
}

.winBody ul li span {
  width: 10%;
}

.winBody ul li p {
  width: 90%;
  font-size: 0.75rem;
}
</style>
