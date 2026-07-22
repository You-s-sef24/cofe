"use client";
import React, { useState } from "react";
import { Mail, Send, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

const emailSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
});

export default function PriceInquirySection({
  categoryName = "this category",
}) {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    const result = emailSchema.safeParse({ email });

    if (!result.success) {
      const firstError =
        result.error.issues[0]?.message ?? "Please check your input";
      toast.error(firstError);
      return;
    }

    setIsSubmitted(true);
    toast.success("Quote request sent!");
  }

  return (
    <section className="my-16 px-4">
      <div className="max-w-3xl mx-auto rounded-3xl bg-gradient-to-b from-blue-900 to-blue-950 text-white p-8 md:p-12 shadow-xl shadow-blue-950/10 text-center relative overflow-hidden">
        <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-blue-500/10 blur-2xl pointer-events-none" />
        <div className="absolute -left-12 -bottom-12 h-40 w-40 rounded-full bg-blue-400/10 blur-2xl pointer-events-none" />

        {isSubmitted ? (
          <div className="flex flex-col items-center gap-3 py-4 animate-in fade-in duration-300">
            <CheckCircle2 className="w-12 h-12 text-green-400" />
            <h3 className="text-2xl font-bold">Inquiry Received!</h3>
            <p className="text-blue-200 text-sm max-w-md">
              We&apos;ve sent the pricing catalog for {categoryName} to{" "}
              <span className="font-semibold text-white">{email}</span>.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="space-y-2 max-w-xl mx-auto">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-xs font-medium text-blue-200 border border-white/10 backdrop-blur-sm">
                <Mail className="w-3.5 h-3.5" /> Fast Response
              </span>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                Interested in export pricing?
              </h2>
              <p className="text-sm md:text-base text-blue-200">
                Enter your email to receive our wholesale price list and catalog
                for {categoryName}.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row items-center gap-2 bg-white/10 p-1.5 rounded-2xl border border-white/15 backdrop-blur-md focus-within:border-white/40 transition-all">
                <div className="relative w-full flex items-center pl-3">
                  <Mail className="w-5 h-5 text-blue-300 absolute left-3 pointer-events-none" />
                  <input
                    type="email"
                    placeholder="Enter your business email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent pl-8 pr-3 py-2.5 text-sm text-white placeholder-blue-200/60 focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto whitespace-nowrap bg-white text-blue-950 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2 text-sm shadow-md"
                >
                  <span>Request Quote</span>
                  <Send className="w-4 h-4 text-blue-900" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
