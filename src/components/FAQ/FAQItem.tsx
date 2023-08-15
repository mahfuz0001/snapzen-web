import React from "react";
import Image from "next/image";

type FaqData = {
  activeFaq: number;
  id: number;
  handleFaqToggle: (id: number) => void;
  quest: string;
  ans: string;
};

const FAQItem = ({ faqData }: { faqData: FaqData }) => {
  const { activeFaq, id, handleFaqToggle, quest, ans } = faqData;

  return (
    <>
      <div className="border-stroke dark:border-strokedark flex flex-col border-b">
        <h4
          onClick={() => {
            handleFaqToggle(id);
          }}
          className="text-metatitle3 lg:py-7.5 flex cursor-pointer items-center justify-between px-6 py-5 font-medium text-black dark:text-white lg:px-9"
        >
          {quest}
          <Image
            width={28}
            height={16}
            src="./images/icon/icon-plus-light.svg"
            alt="plus"
            className={`dark:hidden ${activeFaq === id ? "hidden" : "block"}`}
          />
          <Image
            width={28}
            height={16}
            src="./images/icon/icon-minus-light.svg"
            alt="minus"
            className={`dark:hidden ${activeFaq === id ? "block" : "hidden"}`}
          />
          <Image
            width={28}
            height={16}
            src="/images/icon/icon-plus-dark.svg"
            alt="plus"
            className={`hidden ${
              activeFaq === id ? "dark:hidden" : "dark:block"
            }`}
          />
          <Image
            width={28}
            height={28}
            src="/images/icon/icon-minus-dark.svg"
            alt="minus"
            className={`hidden ${
              activeFaq === id ? "dark:block" : "dark:hidden"
            }`}
          />
        </h4>
        <p
          className={`lg:py-7.5 border-stroke dark:border-strokedark border-t px-6 py-5 lg:px-9 ${
            activeFaq === id ? "block" : "hidden"
          }`}
        >
          {ans}
        </p>
      </div>
    </>
  );
};

export default FAQItem;
