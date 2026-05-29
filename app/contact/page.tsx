"use client";

import { useState } from "react";
import { httpsCallable } from "firebase/functions";
import { functions } from "@/app/firebase";
import { useFirebaseAuth } from "@/components/FirebaseAuthProvider";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function ContactPage() {
  const { user, loading } = useFirebaseAuth();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("submitting");
    setErrorMessage("");

    if (loading) {
      setStatus("error");
      setErrorMessage("Authenticating secure session. Please try again in a moment.");
      return;
    }

    if (!user) {
      setStatus("error");
      setErrorMessage("Anonymous authentication failed. Please ensure the 'Anonymous' sign-in provider is enabled in the Firebase Console (Authentication > Sign-in method).");
      return;
    }

    try {
      const submitContact = httpsCallable(functions, "submitContactForm");
      await submitContact(formData);
      setStatus("success");
      setFormData({ name: "", email: "", subject: "General Inquiry", message: "" });
    } catch (error: any) {
      console.error("Submission failed", error);
      setStatus("error");
      setErrorMessage(error.message || "Failed to submit message. Please try again.");
    }
  };

  return (
    <main className="relative min-h-screen flex flex-col justify-between overflow-hidden">
      {/* Background Mesh */}
      <div className="absolute inset-0 bg-mesh-light dark:bg-mesh-dark opacity-40 -z-10" />
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02] -z-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)",
        }}
      />

      <Nav />

      <section className="section py-16 lg:py-24 flex-1">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details Card */}
          <div className="lg:col-span-5">
            <Reveal>
              <span className="eyebrow">Connect with us</span>
              <h1 className="mt-3 headline text-4xl sm:text-5xl">
                Let's talk <span className="serif-italic text-accent">craft</span> and system.
              </h1>
              <p className="mt-6 text-ink/75 leading-relaxed text-base">
                Whether you're an independent jeweler with a single boutique, or manage a regional multi-store brand, our advisors are here to help modernize your day-to-day.
              </p>
            </Reveal>

            <div className="mt-10 space-y-6">
              {[
                {
                  title: "Headquarters",
                  detail: "FOURFOLD LLC",
                  detail2: "2108 N ST, Sacramento, CA, 95816",
                  icon: (
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  ),
                },
                {
                  title: "Electronic Mail",
                  detail: "contact@fourfoldllc.com",
                  detail2: "Support & Partnerships",
                  icon: (
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  ),
                },
              ].map((item, i) => (
                <Reveal key={i} delay={i * 80}>
                  <div className="flex gap-4 p-5 rounded-2xl border border-line/[0.06] bg-surface/40 backdrop-blur-sm">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xs uppercase tracking-wider text-muted font-semibold">{item.title}</h3>
                      <p className="font-semibold text-ink mt-1 text-sm">{item.detail}</p>
                      <p className="text-xs text-muted mt-0.5">{item.detail2}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="lg:col-span-7">
            <Reveal delay={120}>
              <div className="card p-8 bg-surface">
                {status === "success" ? (
                  <div className="py-12 text-center flex flex-col items-center">
                    <div className="grid h-14 w-14 place-items-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400 mb-6 shadow-sm">
                      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-display font-medium text-ink">Message Transmitted!</h2>
                    <p className="mt-3 text-sm text-muted max-w-sm leading-relaxed">
                      Thank you for reaching out to FOURFOLD LLC. A jewelry operating system advisor will review your message and reply via email within 1 business day.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="mt-8 btn-ghost text-xs py-2 px-5"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="border-b border-line/[0.06] pb-4">
                      <h2 className="text-xl font-display font-medium text-ink">Direct Inquiry</h2>
                      <p className="text-xs text-muted mt-1">Please provide your details below.</p>
                    </div>

                    {status === "error" && (
                      <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 text-xs font-semibold">
                        {errorMessage}
                      </div>
                    )}

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-semibold uppercase tracking-wider text-muted mb-2">
                          Your Name <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. John Doe"
                          className="w-full rounded-xl border border-line/[0.12] bg-surface-2/20 hover:bg-surface-2/40 focus:bg-surface focus:border-accent px-4 py-3 text-sm text-ink outline-none transition duration-200"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-semibold uppercase tracking-wider text-muted mb-2">
                          Email Address <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. john@acmejewelers.com"
                          className="w-full rounded-xl border border-line/[0.12] bg-surface-2/20 hover:bg-surface-2/40 focus:bg-surface focus:border-accent px-4 py-3 text-sm text-ink outline-none transition duration-200"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-muted mb-2">
                        Subject of Inquiry
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full rounded-xl border border-line/[0.12] bg-surface-2/20 hover:bg-surface-2/40 focus:bg-surface focus:border-accent px-4 py-3 text-sm text-ink outline-none transition duration-200 appearance-none"
                      >
                        <option>General Inquiry</option>
                        <option>Partnership Interest</option>
                        <option>Billing & Store Licensing</option>
                        <option>Press & Media</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-muted mb-2">
                        Message Content <span className="text-rose-500">*</span>
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="What details can we help you with regarding Crown Jewels?"
                        className="w-full rounded-xl border border-line/[0.12] bg-surface-2/20 hover:bg-surface-2/40 focus:bg-surface focus:border-accent px-4 py-3 text-sm text-ink outline-none transition duration-200 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full btn-primary flex justify-center py-3.5"
                    >
                      {status === "submitting" ? (
                        <div className="flex items-center gap-2">
                          <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          <span>Transmitting...</span>
                        </div>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
