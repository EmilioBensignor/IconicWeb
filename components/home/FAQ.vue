<template>
  <section id="faqSection" class="w-full faqSection columnAlignCenter gap-4 px-3 py-5">
    <div class="h2Faq column">
      <h2>Frequently asked questions</h2>
      <p class="subtitle">
        Real feedback from businesses empowered by Iconic Assistants.
      </p>
    </div>
    <div class="w-full accordionFaq columnAlignCenter gap-2">
      <Accordion
        value="0"
        class="w-full bg-dark-blue border-grey-1"
        v-for="(faq, index) in faqs"
        :key="index"
      >
        <AccordionPanel value="1">
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
          answer:
            "<p>You'll pay your executive assistant through Iconic Assistants. You'll pay us, a US-based company, and we will pay the Executive Assistant. For US-based clients, we accept Credit Cards and ACH payments and for international clients, we only accept Credit Cards (transactions fees may apply).</p>",
        },
        {
          question: "Do you offer a guarantee?",
          answer:
            "<p>Yes, we offer a Satisfaction Guarantee. If you're not happy with your Executive Assistant by the end of the first 160 hours of work, we'll replace your current assistant with a new EA at no additional cost to you.</p>",
        },
        {
          question: "Can i hire a part-time EA?",
          answer:
            "<p>Yes, we can help you outsource part-time executive assistant for your business or specific campaigns. Our plans include either part-time (80 hours per month) or full-time (160 hours per month) EA's.</p>",
        },
        {
          question: "How can i sign up to be an EA",
          answer:
            "<p>To work as a executive assistant and be a member of Iconic Assistants, you'll first need to complete our online application</p>.",
        },
        {
          question: "Do i need to pay any taxes?",
          answer:
            "<ul class='column gap-3'><li><b>The short answer:</b> No</li><li><b>The long answer:</b> When you start working with an Executive Assistant or Executive Professional from Iconic Assistants, you are not hiring our EAs directly, you are hiring our company's services (a US company), and like with any other service, no taxes are due. Our company handles all the paperwork for hiring our EAs as foreign independent contractors.</li><li> In other words, 1) You are not hiring people from the US as employees, and 2) You are not hiring EAs in the US, you are hiring our services, so you don't have to worry about any tax forms. </li></ul>",
        },
        {
          question: "Do i need a Executive Assistant?",
          answer:
            "<p>Sometimes, managing the demands of work and life can become overwhelming. It might be time to consider a executive assistant if you find yourself:</p><ol class='column gap-2 my-3'><li><span class='font-bold'>Overloaded</span>— If you'rejuggling too many tasks and struggling to keep up with your core responsibilities.</li><li><span class='font-bold'>Time - Strapped</span> — When you don't have time for strategic planning and growth due to constant administrative tasks.</li><li><span class='font-bold'>Feeling Stressed</span> — If you're frequently stressed or anxious about looming deadlines and mounting to-do lists.</li><li><span class='font-bold'>Missing Opportunities</span>—When you're missing out on opportunities because you can't manage everything effectively.</li><li><span class='font-bold'>Productivity Decline</span>— If your productivity and efficiency are suffering due to an excess of small, time-consuming tasks.</li></ol><p>If you resonate with any of these situations, it might be the perfect time to consider hiring a executive assistant. They can help you regain control, reduce stress, and refocus on what truly matters for your success.</p>",
        },
        {
          question: "What tasks can i outsource to an EA",
          answer:
            "<p>You can outsource almost anything to a Executive Assistant as long as you’re clear with what, when and how you want things done (we can help you with that!). Here are <router-link class='font-bold underline text-light-blue cursor-pointer' :to='/types-of-eas'>examples of what our Executive Assistants can do.</router-link></p>",
        },
        {
          question: "How do i monitor my EA's work?",
          answer:
            "<p>All our Executive Assistants are required to send you a periodic work report where they will list all the tasks that they've worked on and any issues they've encountered. We always encourage our clients to place trust in our Executive Assistants by measuring performance rather than a time tracking tool unless otherwise specified.</p>",
        },
        {
          question: "What about confidential information?",
          answer:
            "<p>All Executive Assistants sign a confidentiality agreement, wherein they are not permitted to share or discuss work-related details to people other than their client and work team. Iconic Assistants cannot be held responsible for any unforeseen issues if you choose to share login details, credit card information, or other personal or business data.</p>",
        },
        {
          question: "Can i provide the work hours?",
          answer:
            "<p>Yes, candidates will be informed of your business's preferred work hours. Iconic Assistants are flexible and can work within the time your business requires.</p>",
        },
        {
          question: "How quickly can i be up and running?",
          answer:
            "<p>From the first meeting, it takes approximately 5 to 7 business days to find, interview and qualify the right candidate for you and your business.</p>",
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

.p-accordionpanel:not(.p-disabled).p-accordionpanel-active
  > .p-accordionheader {
  color: var(--color-dark-blue) !important;
  font-weight: 700;
  background: var(--color-grey) !important;
  border-radius: 9px 9px 0 0;
}

.accordionFaq .p-accordionheader:hover .p-accordionheader-toggle-icon {
  color: var(--color-light-blue) !important;
}

.p-accordionpanel:not(.p-disabled).p-accordionpanel-active
  > .p-accordionheader
  .p-accordionheader-toggle-icon {
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

.accordionFaq .p-accordioncontent-content li,
.accordionFaq .p-accordioncontent-content p {
  font-size: 0.75rem;
}

@media (width >= 700px) {
  .accordionFaq .p-accordion {
    width: 48.3% !important;
  }

  .accordionFaq .p-accordionheader {
    font-size: 0.875rem;
  }

  .accordionFaq .p-accordioncontent-content {
    padding: 1rem 0.75rem;
  }

  .accordionFaq .p-accordioncontent-content li,
  .accordionFaq .p-accordioncontent-content p {
    font-size: 0.875rem;
  }
}

@media (width >= 1080px) {
  .accordionFaq .p-accordion {
    width: 49% !important;
  }

  .accordionFaq .p-accordionheader {
    font-size: 1rem;
  }
}

@media (width >= 1440px) {
  .accordionFaq .p-accordionheader {
    font-size: 1.25rem;
    padding: 1.25rem;
  }

  .accordionFaq .p-icon {
    width: 1.25rem;
  }

  .accordionFaq .p-accordioncontent-content {
    padding: 1.25rem;
  }

  .accordionFaq .p-accordioncontent-content li,
  .accordionFaq .p-accordioncontent-content p {
    font-size: 1rem;
  }
}

@media (width >= 1920px) {
  .accordionFaq .p-accordion {
    width: 49.5% !important;
  }
}
</style>

<style scoped>
@media (width >= 700px) {
  .faqSection {
    padding: 2.5rem !important;
  }

  .h2Faq {
    align-self: flex-start;
  }

  .accordionFaq {
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: flex-start;
    row-gap: 0.75rem !important;
    column-gap: 1.25rem !important;
  }
}

@media (width >= 1080px) {
  .faqSection {
    gap: 2rem !important;
    padding: 3.75rem 5rem !important;
  }

  .accordionFaq {
    row-gap: 1.25rem !important;
    column-gap: 1rem !important;
  }
}

@media (width >= 1440px) {
  .faqSection {
    gap: 3.5rem !important;
    padding: 3.75rem 8rem !important;
  }
}
</style>
