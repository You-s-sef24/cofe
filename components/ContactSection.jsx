"use client";

import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(11, "Phone number must be at least 11 digits"),
  company: z.string().min(1, "Company is required"),
  msg: z.string().min(1, "Message is required"),
});

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    msg: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    const result = formSchema.safeParse(formData);

    if (!result.success) {
      const firstError =
        result.error.issues[0]?.message ?? "Please check your inputs";
      toast.error(firstError);
      return;
    }

    toast.success("Message Sent Successfully!");
    setFormData({
      name: "",
      phone: "",
      email: "",
      company: "",
      msg: "",
    });
  }

  return (
    <section id="form" className="w-full max-w-2xl mx-auto py-8 px-4">
      <div className="bg-white border border-gray-100 rounded-3xl p-6 md:p-10 shadow-xl shadow-gray-100/80">
        
        <div className="text-center mb-8 space-y-2">
          <h2 className="font-bold text-3xl md:text-4xl text-blue-950 tracking-tight">
            Get in touch today
          </h2>
          <p className="text-gray-500 text-base md:text-lg">
            We will respond as soon as possible
          </p>
        </div>

        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2 text-left">
              <Label htmlFor="name" className="text-gray-700 text-sm font-medium">
                Full Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="name"
                placeholder="Ahmed Kilany"
                className="h-11 rounded-xl border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 transition-all"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="flex flex-col gap-2 text-left">
              <Label htmlFor="phone" className="text-gray-700 text-sm font-medium">
                Phone Number <span className="text-red-500">*</span>
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="01115658096"
                className="h-11 rounded-xl border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 transition-all"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2 text-left">
              <Label htmlFor="email" className="text-gray-700 text-sm font-medium">
                Email Address <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="ym123@gmail.com"
                className="h-11 rounded-xl border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 transition-all"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="flex flex-col gap-2 text-left">
              <Label htmlFor="company" className="text-gray-700 text-sm font-medium">
                Company <span className="text-red-500">*</span>
              </Label>
              <Input
                id="company"
                placeholder="Teqneia"
                className="h-11 rounded-xl border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 transition-all"
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 text-left">
            <Label htmlFor="msg" className="text-gray-700 text-sm font-medium">
              Message <span className="text-red-500">*</span>
            </Label>
            <Textarea
              id="msg"
              placeholder="Please type your message here..."
              className="min-h-[120px] rounded-xl border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 transition-all resize-y"
              value={formData.msg}
              onChange={(e) =>
                setFormData({ ...formData, msg: e.target.value })
              }
            />
          </div>

          <div className="pt-2 flex justify-center">
            <Button
              type="submit"
              className="group flex items-center justify-center gap-2 bg-blue-800 hover:bg-blue-900 text-white font-semibold h-12 px-8 rounded-xl w-full sm:w-auto min-w-[200px] shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <span>Send Message</span>
              <Send className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
          </div>

        </form>
      </div>
    </section>
  );
}