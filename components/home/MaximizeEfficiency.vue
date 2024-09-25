<template>
  <section class="w-full maximizeEfficiency columnAlignCenter gap-4 px-3 py-5">
    <div class="h2Subtitle">
      <div>
        <h2 class="text-center">Maximize efficiency</h2>
        <p class="subtitle">Don't let time and money slip away.</p>
      </div>
      <NuxtLink to="/" class="secondaryButton secondaryTablet">
        <div>
          <p>Explore Our Solutions</p>
        </div>
      </NuxtLink>
    </div>
    <div class="relative">
      <div
        class="w-full accordionMaximizeContainer columnAlignCenter gap-3"
        :class="{ 'hover-active': activePanel !== null }">
        <div
          v-for="(problem, index) in problems"
          :key="index"
          class="w-full accordionMaximize bg-blue-light-gradient"
          @mouseenter="activePanel = index"
          @mouseleave="activePanel = null">
          <div
            class="w-full panelContent columnAlignCenter bg-dark-blue"
            :class="{ active: activePanel === index }">
            <div class="questionContent columnAlignCenter gap-2">
              <Icon
                :name="`mingcute:${problem.icon}`"
                :class="{
                  'text-white': activePanel === index,
                  'text-light-blue': activePanel !== index,
                }"
                size="1.125rem" />
              <p class="text-center">{{ problem.question }}</p>
            </div>
            <div class="answerContent bg-dark-blue answerMobile">
              <p class="text-center">{{ problem.answer }}</p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="answerTablet relative bg-blue-light-gradient"
        :class="{ active: activePanel !== null }">
        <div class="bg-dark-blue">
          <p>{{ activePanel !== null ? problems[activePanel].answer : "" }}</p>
        </div>
      </div>
    </div>

    <NuxtLink to="/" class="secondaryButton secondaryMobile">
      <div>
        <p>Explore Our Solutions</p>
      </div>
    </NuxtLink>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        activePanel: null,
        problems: [
          {
            icon: "star-line",
            question: "Are you struggling to hire top talent?",
            answer:
              "Stop sifting through unqualified candidates. ICONIC finds the right talent quickly, even for international hires, ensuring you get the best fit without the hassle.",
            value: 0,
          },
          {
            icon: "alarm-1-line",
            question: "Is your hiring process taking too long?",
            answer:
              "Don't waste weeks on hiring. ICONIC speeds up the process, managing everything from job postings to candidate selection, so you can focus on growing your business.",
            value: 1,
          },
          {
            icon: "currency-dollar-line",
            question: "Are costs impacting your profits?",
            answer:
              "Don't waste weeks on hiring. ICONIC speeds up the process, managing everything from job postings to candidate selection, so you can focus on growing your business.",
            value: 2,
          },
        ],
      };
    },
  };
</script>

<style scoped>
  .accordionMaximize {
    border-radius: 12px;
    padding: 2px;
  }

  .panelContent {
    border-radius: 12px;
    transition: all 0.5s ease;
  }

  .questionContent {
    width: 100%;
    border-radius: 12px 12px 0 0;
    padding: 1rem 0.75rem;
    transition: all 0.5s ease;
  }

  .panelContent:hover .questionContent {
    background: linear-gradient(
      90deg,
      var(--color-blue),
      var(--color-light-blue)
    );
  }

  .panelContent:hover .questionContent span {
    color: var(--color-white) !important;
  }

  .questionContent p {
    font-size: 0.875rem;
    font-weight: 600;
  }

  .answerContent {
    max-height: 0;
    border-radius: 0 0 12px 12px;
    overflow: hidden;
    transition: all 0.5s ease;
    padding: 0 1rem;
  }

  .panelContent:hover .answerContent {
    max-height: 1000px;
    padding: 1rem;
  }

  .answerContent p {
    font-size: 0.75rem;
  }

  .secondaryTablet,
  .answerTablet {
    display: none;
  }

  @media (width >= 480px) {
    .questionContent p {
      font-size: 1rem;
    }

    .answerContent p {
      font-size: 0.875rem;
    }
  }

  @media (width >= 700px) {
    .secondaryMobile {
      display: none;
    }

    .maximizeEfficiency {
      padding: 2.5rem !important;
    }

    .h2Subtitle {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    .h2Subtitle h2 {
      text-align: start !important;
    }

    .secondaryTablet {
      display: inline;
    }

    .accordionMaximizeContainer {
      flex-direction: row;
      align-items: flex-start;
      gap: 0.75rem !important;
    }

    .accordionMaximize {
      transition: all 0.5s ease;
    }

    .accordionMaximizeContainer.hover-active .accordionMaximize,
    .accordionMaximizeContainer.hover-active .panelContent {
      border-radius: 12px 12px 0 0;
    }

    .questionContent {
      padding: 0.875rem 0.625rem;
    }

    .questionContent span {
      font-size: 1.25rem !important;
    }

    .questionContent p {
      font-size: 1.125rem;
    }

    .answerMobile {
      display: none;
    }

    .answerTablet {
      display: block;
      border-radius: 0 0 12px 12px;
      overflow: hidden;
      padding: 2px;
      margin-top: -2px;
      z-index: 1;
      transition: all 0.3s ease;
      opacity: 0;
      max-height: 0;
    }

    .answerTablet.active {
      opacity: 1;
      max-height: 1000px;
    }

    .answerTablet div {
      border-radius: 0 0 12px 12px;
      padding: 1.25rem;
    }

    .panelContent .questionContent {
      background: transparent;
      transition: all 0.5s ease;
    }

    .panelContent.active .questionContent {
      background: linear-gradient(
        90deg,
        var(--color-blue),
        var(--color-light-blue)
      );
    }

    .panelContent.active .questionContent span,
    .panelContent.active .questionContent p {
      color: var(--color-white) !important;
    }
  }
</style>
