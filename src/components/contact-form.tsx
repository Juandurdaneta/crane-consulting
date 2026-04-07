"use client";

import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="py-20 text-center">
        <h3 className="font-serif text-3xl text-crane-blue mb-4">
          Inquiry Received
        </h3>
        <p className="text-crane-on-surface-variant text-lg">
          Our senior partnership team will review your inquiry and respond within
          48 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      className="space-y-10"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <label
            htmlFor="name"
            className="text-xs uppercase tracking-widest text-crane-on-surface-variant font-bold block mb-2"
          >
            Full Name
          </label>
          <input
            id="name"
            type="text"
            required
            placeholder="Steven Crane"
            className="w-full bg-transparent border-t-0 border-l-0 border-r-0 border-b-2 border-crane-outline-variant focus:border-crane-blue focus:ring-0 px-0 py-2 transition-colors outline-none text-crane-on-surface"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="text-xs uppercase tracking-widest text-crane-on-surface-variant font-bold block mb-2"
          >
            Corporate Email
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="executive@firm.com"
            className="w-full bg-transparent border-t-0 border-l-0 border-r-0 border-b-2 border-crane-outline-variant focus:border-crane-blue focus:ring-0 px-0 py-2 transition-colors outline-none text-crane-on-surface"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="subject"
          className="text-xs uppercase tracking-widest text-crane-on-surface-variant font-bold block mb-2"
        >
          Inquiry Type
        </label>
        <select
          id="subject"
          className="w-full bg-transparent border-t-0 border-l-0 border-r-0 border-b-2 border-crane-outline-variant focus:border-crane-blue focus:ring-0 px-0 py-2 transition-colors outline-none text-crane-on-surface appearance-none"
        >
          <option>Operational Restructuring</option>
          <option>Strategic Advisory</option>
          <option>Mergers &amp; Acquisitions</option>
          <option>Leadership Coaching</option>
          <option>Business Solutions</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="text-xs uppercase tracking-widest text-crane-on-surface-variant font-bold block mb-2"
        >
          Context &amp; Objectives
        </label>
        <textarea
          id="message"
          rows={5}
          required
          placeholder="Detail the current challenge or strategic objective..."
          className="w-full bg-transparent border-t-0 border-l-0 border-r-0 border-b-2 border-crane-outline-variant focus:border-crane-blue focus:ring-0 px-0 py-2 transition-colors outline-none text-crane-on-surface resize-none"
        />
      </div>

      <div className="pt-6">
        <button
          type="submit"
          className="bg-crane-blue text-white px-12 py-5 font-bold uppercase tracking-[0.2rem] text-sm w-full md:w-auto hover:bg-crane-light-blue transition-all duration-300 active:scale-[0.99]"
        >
          Submit Inquiry
        </button>
      </div>
    </form>
  );
}
