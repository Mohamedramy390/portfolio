"use client";

import { useState } from "react";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CopyEmail } from "@/components/ui/CopyEmail";
import { Button } from "@/components/ui/Button";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { Github, WhatsApp, LinkedIn } from "@/components/ui/icons";

export function Contact() {
  const [formState, setFormState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok && data.success) {
        setFormState("sent");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        return;
      }

      setFormState("error");
      setErrorMessage(
        data?.error || "Unable to send message directly. Please contact via WhatsApp or email."
      );
    } catch {
      setFormState("error");
      setErrorMessage("Network error. Please reach out via WhatsApp or email directly.");
    }
  };

  const handleWhatsAppSend = () => {
    const text = `Hi Mohamed! My name is ${formData.name || "a visitor"}${
      formData.email ? ` (${formData.email})` : ""
    }.\n\nRegarding: ${formData.subject || "Collaboration"}\n\n${
      formData.message || "I'd like to get in touch with you!"
    }`;
    window.open(
      `https://wa.me/201021423745?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <section className="py-24 md:py-32" id="contact">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          label="Contact"
          title={profile.contact.headline}
          description={profile.contact.description}
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            <ScrollReveal>
              <div className="space-y-5">
                {/* WhatsApp Priority Item */}
                <div className="flex items-start gap-3 p-3.5 rounded-xl border border-emerald-500/20 bg-emerald-500/5 hover:border-emerald-500/30 transition-all">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                    <WhatsApp className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <p className="text-sm font-semibold text-text-primary">
                        WhatsApp
                      </p>
                      <span className="px-2 py-0.5 text-[10px] font-bold text-emerald-400 bg-emerald-500/10 rounded-full border border-emerald-500/20">
                        Direct & Fast
                      </span>
                    </div>
                    <a
                      href={profile.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-emerald-400 hover:text-emerald-300 font-medium transition-colors inline-flex items-center gap-1 mt-1"
                    >
                      Chat on WhatsApp ({profile.whatsappNumber}) →
                    </a>
                  </div>
                </div>

                {/* Email Item */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-accent/5 border border-accent/10 shrink-0">
                    <Mail className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-primary mb-1">
                      Email
                    </p>
                    <CopyEmail email={profile.email} />
                  </div>
                </div>

                {/* Phone Item */}
                {profile.phone && (
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-accent/5 border border-accent/10 shrink-0">
                      <Phone className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text-primary mb-1">
                        Phone
                      </p>
                      <a
                        href={`tel:${profile.phone}`}
                        className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                      >
                        {profile.phone}
                      </a>
                    </div>
                  </div>
                )}

                {/* GitHub Item */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-accent/5 border border-accent/10 shrink-0">
                    <Github className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-primary mb-1">
                      GitHub
                    </p>
                    <a
                      href={profile.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                    >
                      {profile.githubUsername}
                    </a>
                  </div>
                </div>

                {/* LinkedIn Item */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#0a66c2]/10 border border-[#0a66c2]/20 shrink-0 text-[#0a66c2]">
                    <LinkedIn className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-primary mb-1">
                      LinkedIn
                    </p>
                    <a
                      href={profile.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-text-secondary hover:text-[#0a66c2] transition-colors"
                    >
                      mohamed-ramy-13929a1b3
                    </a>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-accent/5 border border-accent/10 shrink-0">
                    <MapPin className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-primary mb-1">
                      Location
                    </p>
                    <p className="text-sm text-text-secondary">
                      {profile.location}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Contact form */}
          <ScrollReveal className="lg:col-span-3" direction="right">
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-7 rounded-2xl border border-border bg-bg-card shadow-xl"
              id="contact-form"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-text-primary mb-1.5"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, name: e.target.value }))
                    }
                    className="w-full px-3.5 py-2.5 text-sm text-text-primary bg-bg-primary border border-border rounded-xl focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors placeholder:text-text-tertiary"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-text-primary mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    className="w-full px-3.5 py-2.5 text-sm text-text-primary bg-bg-primary border border-border rounded-xl focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors placeholder:text-text-tertiary"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="contact-subject"
                  className="block text-sm font-medium text-text-primary mb-1.5"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      subject: e.target.value,
                    }))
                  }
                  className="w-full px-3.5 py-2.5 text-sm text-text-primary bg-bg-primary border border-border rounded-xl focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors placeholder:text-text-tertiary"
                  placeholder="What's this regarding?"
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium text-text-primary mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      message: e.target.value,
                    }))
                  }
                  className="w-full px-3.5 py-2.5 text-sm text-text-primary bg-bg-primary border border-border rounded-xl focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors placeholder:text-text-tertiary resize-none"
                  placeholder="Tell me about your project, idea, or questions..."
                />
              </div>

              {/* Status messages */}
              {formState === "sent" && (
                <div className="mb-5 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Message Sent Directly to Mohamed!</p>
                    <p className="text-xs text-text-secondary mt-0.5">
                      Thank you for reaching out. I received your email and will respond shortly.
                    </p>
                  </div>
                </div>
              )}

              {formState === "error" && (
                <div className="mb-5 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Message failed to send</p>
                    <p className="text-xs text-text-secondary mt-1">
                      {errorMessage || "Unable to send message automatically at this time."}
                    </p>
                    <p className="text-xs text-text-secondary mt-1.5">
                      Please message me directly on{" "}
                      <a
                        href={profile.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 underline font-medium"
                      >
                        WhatsApp
                      </a>{" "}
                      or email{" "}
                      <a
                        href={`mailto:${profile.email}`}
                        className="text-accent underline font-medium"
                      >
                        {profile.email}
                      </a>.
                    </p>
                  </div>
                </div>
              )}

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  id="contact-submit"
                  disabled={formState === "sending"}
                  className="w-full sm:w-auto"
                >
                  {formState === "sending" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </Button>

                <button
                  type="button"
                  onClick={handleWhatsAppSend}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 hover:bg-emerald-500/20 hover:border-emerald-500/40 transition-all text-center cursor-pointer"
                >
                  <WhatsApp className="w-4 h-4" />
                  Message via WhatsApp
                </button>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
