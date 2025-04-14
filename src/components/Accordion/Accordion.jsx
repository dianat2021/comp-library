import { useState } from "react";

import AccordionItem from "../AccordionItem/AccordionItem";
import styles from "./Accordion.module.css";
const Accordion = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const faqData = [
    {
      id: 1,
      question: "How do I reset my password?",
      answer:
        "To reset your password, begin by clicking on the 'Forgot Password' link located on the login page. You will be prompted to enter your registered email address. Once submitted, you’ll receive an email containing a link to reset your password. This link will guide you through the steps necessary to create a new password. If you don’t see the email in your inbox, it’s worth checking your spam or junk folder, as automated emails can occasionally be filtered there. If you encounter any issues, such as not receiving the email or experiencing difficulties with the reset process, our support team is available to assist you. You can reach out to them via our support page or by contacting us directly through email or live chat.",
    },
    {
      id: 2,
      question: "What is the return policy for online orders?",
      answer:
        "Our return policy for online orders allows you to return items within 30 days of delivery for a full refund. To initiate a return, the items must be unused, in their original packaging, and accompanied by proof of purchase, such as a receipt or invoice. Start the process by visiting our Return Center on the website, where you’ll be asked to provide your order details. Once the return is approved, you’ll receive instructions for sending the item back, including a shipping label if applicable. Refunds are processed promptly upon receipt of the returned item, usually within 5-7 business days. However, some exceptions may apply for customized products or certain sale items, as outlined in our full return policy. For further assistance or clarity regarding returns, feel free to contact our customer service team.",
    },
    {
      id: 3,
      question: "How can I track my order?",
      answer:
        "Tracking your order is simple and convenient. Once your order ships, we will send you a confirmation email that includes a tracking number. This tracking number allows you to monitor the progress of your delivery and provides detailed updates from the courier service. To access your tracking information, click the link in the email, which will direct you to the courier’s website or app. There, you’ll be able to view estimated delivery times, check for delays, and see delivery status updates. If you don’t receive the confirmation email, it might be worth checking your spam or promotions folder. Additionally, you can log into your account on our website, navigate to the 'Order History' section, and retrieve tracking information directly from there.",
    },
    {
      id: 4,
      question: "Do you offer customer support on weekends?",
      answer:
        "Yes, we offer customer support every day, including weekends, to ensure your needs are met promptly. Our support team is available from 9 AM to 6 PM on Saturdays and Sundays, just like on weekdays. You can reach out to us via multiple channels, including email, phone, and live chat on our website. Whether you need assistance with troubleshooting, product inquiries, or order issues, our dedicated team is here to help. For urgent concerns outside our regular hours, you may also refer to our FAQ section or knowledge base, which provides answers to common questions and guides for resolving issues independently. Rest assured, we are committed to providing continuous support regardless of the day.",
    },
    {
      id: 5,
      question: "What payment methods do you accept?",
      answer:
        "We accept a wide range of payment methods to make shopping with us convenient for everyone. These include major credit and debit cards such as Visa, MasterCard, and American Express. We also support PayPal for secure online transactions and Apple Pay for users with Apple devices. Additionally, we accept payment via bank transfers in certain regions and offer gift card redemption for purchases. For international customers, local payment options may be available depending on your location. You can find a full list of payment methods during the checkout process. If you experience difficulties with your payment, such as declined transactions or errors, our customer support team is here to assist you in resolving the issue.",
    },
  ];

  return (
    <>
      <ul className={styles.accordionList}>
        {faqData.map((item) => {
          return (
            <AccordionItem
              title={item.question}
              description={item.answer}
              key={item.id}
              openAccordion={openAccordion}
              setOpenAccordion={setOpenAccordion}
              accID={item.id}
            />
          );
        })}
      </ul>
    </>
  );
};

export default Accordion;
