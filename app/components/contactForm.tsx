"use client";
import React, { useState } from "react";
import { toast } from "sonner";
import axios from "axios";

export const ContactForm = (className: { className: string }) => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("handle submit clicked.");
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      toast.error("Please fill all the fields");
      return;
    }

    try {
      const response = await axios.post("/api/v1/sendEmail", {
        name,
        email,
        message,
      });
      console.log(response);
      toast.success("Email has been sent");
    } catch (error) {
      console.log("FAILED...", error);
      toast.error("Error while sending email.");
    }
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <form
      className={`${className} shadow-insetShadow z-0 mx-auto flex h-full w-[calc(100%-34px)] flex-col gap-8 border-y border-neutral-200 px-4 py-5 md:w-full dark:border-neutral-700/50`}
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className="flex flex-col gap-2">
        <label
          htmlFor="name"
          className="text-secondary text-sm font-medium tracking-tight"
        >
          Full Name
        </label>
        <input
          name="name"
          id="name"
          type="text"
          placeholder="name"
          onChange={handleChange}
          className="shadow-customShadow3 focus:ring-secondary rounded-md px-4 py-4 text-sm focus:ring-1 focus:outline-none"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="email"
          className="text-secondary text-sm font-medium tracking-tight"
        >
          Email
        </label>
        <input
          name="email"
          id="email"
          type="email"
          placeholder="abc123@gmail.com"
          onChange={handleChange}
          className="focus:ring-secondary shadow-customShadow3 rounded-md px-4 py-4 text-sm focus:ring-1 focus:outline-none"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-secondary text-sm font-medium tracking-tight"
        >
          Message
        </label>
        <textarea
          name="message"
          id="message"
          placeholder="your message"
          onChange={handleChange}
          className="focus:ring-secondary shadow-customShadow3 resize-none rounded-md px-4 py-4 text-sm focus:ring-1 focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="shadow-customShadow3 cursor-pointer rounded-md bg-neutral-700 py-4 text-sm font-medium tracking-tight text-neutral-300 transition duration-200 hover:bg-neutral-400"
      >
        Send Message
      </button>
    </form>
  );
};
