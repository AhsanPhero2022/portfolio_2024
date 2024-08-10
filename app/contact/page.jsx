"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+8801862476402",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "ismamdev@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Dhaka, Sirajganj 6770",
  },
];

const Contact = () => {
  const [service, setService] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = {
      access_key: "0a2cdf7f-4ae5-4233-ac5c-56bc201a8119",
      name: `${e.target.firstName.value} ${e.target.lastName.value}`,
      email: e.target.email.value,
      phone: e.target.phone.value,
      service,
      message: e.target.message.value,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Your message has been sent successfully!");
        e.target.reset(); // Reset the form fields
        setService(""); // Reset the service selection
      } else {
        alert(
          "There was an issue sending your message. Please try again later."
        );
      }
    } catch (error) {
      alert(
        "An unexpected error occurred. Please check your internet connection and try again."
      );
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">
                Let&rsquo;s work together
              </h3>
              <p className="text-white/60">
                Are you searching for a dynamic and driven MERN stack web
                developer proficient in frontend development using React.js,
                Next.js? Look no further!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  required
                />
                <Input
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  required
                />
                <Input name="email" type="email" placeholder="Email" required />
                <Input name="phone" type="tel" placeholder="Phone" required />
              </div>
              <Select
                onValueChange={(value) => setService(value)}
                required
                value={service}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Full Stack Development">
                      Full Stack Development
                    </SelectItem>
                    <SelectItem value="Frontend Development">
                      Frontend Development
                    </SelectItem>
                    <SelectItem value="Email Template Design">
                      Email Template Design
                    </SelectItem>
                    <SelectItem value="SEO With Next.js">
                      SEO With Next.js
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                name="message"
                className="h-200px"
                placeholder="Type your message here."
                required
              />
              <Button
                type="submit"
                size="md"
                className="max-w-40 hover:bg-white text-black"
              >
                Send message
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-[28px] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div>
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
