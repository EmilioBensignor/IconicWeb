<template>
  <section class="w-full happyClients columnAlignCenter gap-4 px-3 py-5">
    <div class="w-full infoContainer rowSpaceBetweenCenter">
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
    <div class="gradientLine lineSeparator"></div>
    <div class="w-full infoContainer rowSpaceBetweenCenter">
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

  .lineSeparator {
    display: none;
  }

  @media (width >= 480px) {
    .gradientLine {
      height: 5px;
    }

    .infoContainer {
      max-width: 450px;
    }

    .info p:first-of-type {
      font-size: 2.125rem;
    }

    .info p:last-of-type {
      font-size: 0.875rem;
    }
  }

  @media (width >= 700px) {
    .happyClients {
      flex-direction: row;
      justify-content: center;
      gap: 1.25rem !important;
      padding: 2.5rem !important;
    }

    .happyClients > .rowSpaceBetweenCenter {
      width: auto !important;
      max-width: 100%;
      gap: 1.25rem;
    }

    .lineSeparator {
      display: block;
      margin: 1.25rem 0;
    }

    .gradientLine {
      width: 6px;
      height: 5rem;
      background: linear-gradient(
        180deg,
        var(--color-light-blue),
        var(--color-blue)
      );
      transform: rotate(0);
    }

    .info {
      width: auto;
    }

    .info p:first-of-type {
      font-size: 2.25rem;
    }
  }

  @media (width >= 850px) {
    .happyClients {
      gap: 2rem !important;
    }

    .happyClients > .rowSpaceBetweenCenter {
      gap: 2rem;
    }

    .info p:first-of-type {
      font-size: 2.5rem;
    }

    .info p:last-of-type {
      font-size: 1rem;
    }
  }

  @media (width >= 1080px) {
    .happyClients {
      gap: 2.45rem !important;
      padding: 3.25rem 5rem !important;
    }

    .happyClients > .rowSpaceBetweenCenter {
      gap: 2.45rem;
    }

    .info p:first-of-type {
      font-size: 3.25rem;
    }

    .info p:last-of-type {
      font-size: 1.25rem;
    }
  }

  @media (width >= 1280px) {
    .happyClients, .happyClients > .rowSpaceBetweenCenter {
      gap: 4.5rem !important;
    }
  }

  @media (width >= 1440px) {
    .happyClients {
      padding: 3.25rem 8rem !important;
    }

    .happyClients, .happyClients > .rowSpaceBetweenCenter {
      gap: 3.875rem !important;
    }

    .info p:first-of-type {
      font-size: 3.5rem;
    }

    .info p:last-of-type {
      font-size: 1.5rem;
    }

    .gradientLine {
      width: 7px;
      height: 6rem;
    }
  }

  @media (width >= 1600px) {
    .happyClients, .happyClients > .rowSpaceBetweenCenter {
      gap: 5em !important;
    }
  }

  @media (width >= 1920px) {
    .happyClients, .happyClients > .rowSpaceBetweenCenter {
      gap: 7em !important;
    }

    .info p:first-of-type {
      font-size: 3.75rem;
    }

    .info p:last-of-type {
      font-size: 1.75rem;
    }

    .gradientLine {
      width: 8px;
      height: 6.5rem;
    }
  }
</style>
