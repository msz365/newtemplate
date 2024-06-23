import ContactForm from "@/components/ContactForm";
import InnerPageHeader from "@/components/InnerPageHeader";
import React from "react";

const page = () => {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <InnerPageHeader title='Contact Us' />

      <section
        id='contact'
        className='mx-auto max-w-screen-xl  px-20 py-20 max-xl:px-10 max-sm:px-5'
      >
        <ContactForm />
      </section>
    </main>
  );
};

export default page;
