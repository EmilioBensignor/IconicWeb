<template>
  <section class="w-full columnAlignCenter gap-4 px-3 py-5">
    <h2>Frequently asked questions</h2>
    <div class="w-full accordionFaq columnAlignCenter gap-2">
      <Accordion value="0" class="w-full bg-dark-blue border-grey-1" v-for="(faq, index) in faqs" :key="index">
        <AccordionPanel value="0">
          <AccordionHeader>{{ faq.question }}</AccordionHeader>
          <AccordionContent>
            <div v-html="faq.answer"></div>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        faqs: [
          {
            question: "How do i get started?",
            answer:
              "<ol class='columnAlignCenter gap-3'><li><b>Discovery Call</b> - <router-link class='font-bold text-light-blue cursor-pointer' to='/contact-us'>Book a FREE consultation</router-link> with our Outsourcing Specialist and give us an overview ofeverything you're looking for in a EA.</li><li><b>Executive Assistant Recruitment</b> - We will start interviewing the candidates that meet your requirements and notify you when we find the perfect match. This process usually takes around 5 to 7 days.</li><li><b>Hiring & Onboarding</b> - When you're ready, we'll hire the Executive Assistant and you will start working with them, with the support of your Customer Success Agent to assist you in the initial 'nesting period' to avoid any miscommunications or misunderstandings.</li><li><b>Regular check-ins</b> - Our team will also have regular meetings and performance reviews and provide company benefits for your Executive Assistant to ensure their happiness and to get all your tasks done the way you want them.</li></ol>",
          },
          {
            question: "How do i pay Iconic Assistants",
            answer: "",
          },
          {
            question: "Do you offer a guarantee?",
            answer: "",
          },
          {
            question: "Can i hire a part-time EA?",
            answer: "",
          },
          {
            question: "How can i sign up to be an EA",
            answer: "",
          },
          {
            question: "Do i need to pay any taxes?",
            answer: "",
          },
          {
            question: "Do i need a Executive Assistant?",
            answer: "",
          },
          {
            question: "What tasks can i outsource to an EA",
            answer: "",
          },
          {
            question: "How do i monitor my EA's work?",
            answer: "",
          },
          {
            question: "What about confidential information?",
            answer: "",
          },
          {
            question: "Can i provide the work hours?",
            answer: "",
          },
          {
            question: "How quickly can i be up and running?",
            answer: "",
          },
        ],
      };
    },
  };
</script>

<style>
.accordionFaq .p-accordion {
  border-radius: 9px;
}

.accordionFaq .p-accordionheader {
  font-size: 0.813rem;
  padding: 0.875rem 0.75rem;
}

.p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader {
  color: var(--color-dark-blue) !important;
  font-weight: 700;
  background: var(--color-grey) !important;
  border-radius: 9px 9px 0 0;
}

.accordionFaq .p-accordionheader:hover .p-accordionheader-toggle-icon {
  color: var(--color-light-blue) !important;
}

.p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader .p-accordionheader-toggle-icon {
  color: var(--color-dark-blue) !important;
}

.accordionFaq .p-accordionheader-toggle-icon {
  color: var(--color-light-blue);
}

.accordionFaq .p-accordionheader-toggle-icon:hover {
  color: var(--color-light-blue);
}

.accordionFaq .p-accordioncontent-content {
  padding: 0.875rem 0.75rem;
}

.accordionFaq .p-accordioncontent-content li, .accordionFaq .p-accordioncontent-content p {
  font-size: 0.75rem;
}
</style>