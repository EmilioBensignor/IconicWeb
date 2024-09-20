<template>
  <section class="w-full howYouWin columnAlignCenter px-3 py-5">
    <div class="h2Subtitle column">
      <h2 class="column text-center">
        How you win with <span>Iconic Assistants</span>
      </h2>
      <p class="subtitle">
        Tailored solutions for unmatched efficiency and growth.
      </p>
    </div>
    <div class="w-full columnAlignCenter gap-4 my-4">
      <div
        class="w-full winContainer bg-dark-blue border-grey-1 border-round-3xl"
        v-for="(win, index) in wins"
        :key="index"
      >
        <div
          class="h-7rem winImg bgCover border-round-top-3xl"
          :style="{
            backgroundImage: `url(/images/home/${win.img}.jpg)`,
          }"
        >
          <div class="w-full h-full flex align-items-end px-3 py-2">
            <p class="title">{{ win.title }}</p>
          </div>
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

@media (width >= 700px) {
  .howYouWin {
    padding: 2.5rem !important;
  }

  .h2Subtitle {
    align-self: flex-start;
  }

  .h2Subtitle h2 {
    display: block;
    text-align: start !important;
  }

  .winContainer {
    display: flex;
    align-items: center;
    gap: 1.25rem;
    border-radius: 20px !important;
    padding: 1.25rem;
  }

  .winImg {
    width: 11.25rem !important;
    height: 7.5rem !important;
    border-radius: 5px !important;
  }

  .winImg div {
    width: 11.25rem !important;
  }

  .winImg div {
    justify-content: center !important;
  }

  .winBody {
    padding: 0;
  }

  .winBody ul {
    gap: 1.25rem !important;
  }

  .winBody ul li {
    justify-content: start;
  }

  .winBody ul li span {
    width: 1.25rem;
    height: 1.25rem;
    font-size: 1.25rem !important;
  }

  .winBody ul li p {
    width: auto;
    font-size: 1rem;
  }
}
</style>
