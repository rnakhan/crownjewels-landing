"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { httpsCallable } from "firebase/functions";
import { functions } from "@/app/firebase";
import { useFirebaseAuth } from "@/components/FirebaseAuthProvider";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

type Step = 1 | 2 | 3;

export default function BookDemoPage() {
  const router = useRouter();
  const { user, loading, error: authError } = useFirebaseAuth();
  const [step, setStep] = useState<Step>(1);
  const [submitting, setSubmitting] = useState(false);
  const [loadingText, setLoadingText] = useState("Securing tech advisor calendar...");
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    storeName: "",
    email: "",
    phone: "",
    locations: "1",
    currentSoftware: "Shopify",
    goals: {
      sketches: false,
      audits: false,
      clienteling: false,
      repairs: false,
    },
  });

  const nextStep = () => {
    if (step === 1 && (!formData.name || !formData.storeName || !formData.email || !formData.phone)) return;
    if (step === 2 && !formData.locations) return;
    setStep((prev) => (prev + 1) as Step);
  };

  const prevStep = () => {
    setStep((prev) => (prev - 1) as Step);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage("");

    if (loading) {
      setSubmitting(false);
      setErrorMessage("Authenticating secure session. Please try again in a moment.");
      return;
    }

    if (!user) {
      setSubmitting(false);
      const details = authError ? ` (${authError.code || authError.message})` : "";
      setErrorMessage(`Anonymous authentication failed. Please ensure the 'Anonymous' sign-in provider is enabled in the Firebase Console (Authentication > Sign-in method).${details}`);
      return;
    }

    try {
      const submitDemo = httpsCallable(functions, "submitDemoRequest");
      await submitDemo(formData);

      // Trigger phase animations on successful API call
      const phases = [
        "Analyzing store demographics...",
        "Syncing with New York office calendar...",
        "Generating strategic Jeweler AI agent sandbox...",
        "Showroom ready! Redirecting...",
      ];

      phases.forEach((text, i) => {
        setTimeout(() => {
          setLoadingText(text);
          if (i === phases.length - 1) {
            router.push("/book-demo/success");
          }
        }, (i + 1) * 900);
      });
    } catch (error: any) {
      console.error("Demo submission failed", error);
      setSubmitting(false);
      setErrorMessage(error.message || "Failed to submit demo request. Please verify details and try again.");
    }
  };

  const isStep1Valid = formData.name && formData.storeName && formData.email && formData.phone;

  return (
    <main className="relative min-h-screen flex flex-col justify-between overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-mesh-light dark:bg-mesh-dark opacity-35 -z-10" />

      <Nav />

      {submitting ? (
        <div className="flex-1 flex flex-col items-center justify-center py-24 px-6 text-center">
          <div className="relative">
            <div className="h-16 w-16 rounded-full border-2 border-accent/10 border-t-accent animate-spin" />
            <div className="absolute inset-0 grid place-items-center">
              <span className="text-[10px]">◆</span>
            </div>
          </div>
          <h2 className="mt-8 font-display text-xl font-medium text-ink animate-pulse">{loadingText}</h2>
          <p className="mt-2 text-xs text-muted">Please hold while we prepare your demo lounge.</p>
        </div>
      ) : (
        <section className="section py-12 lg:py-20 flex-1">
          <div className="max-w-xl mx-auto">
            {/* Step Indicators */}
            <div className="flex items-center justify-between border-b border-line/[0.06] pb-5 mb-8">
              {[
                { number: 1, label: "Basics" },
                { number: 2, label: "Profile" },
                { number: 3, label: "Goals" },
              ].map((s) => (
                <div key={s.number} className="flex items-center gap-2">
                  <div
                    className={`grid h-7 w-7 place-items-center rounded-full text-xs font-semibold transition ${
                      step >= s.number
                        ? "bg-accent text-white"
                        : "bg-surface-2 border border-line/10 text-muted"
                    }`}
                  >
                    {s.number}
                  </div>
                  <span
                    className={`text-xs font-medium ${
                      step === s.number ? "text-accent font-semibold" : "text-muted"
                    }`}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            <Reveal>
              <div className="card p-8 bg-surface">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMessage && (
                    <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 text-xs font-semibold">
                      {errorMessage}
                    </div>
                  )}
                  {/* STEP 1 */}
                  {step === 1 && (
                    <div className="space-y-5 animate-fade-up">
                      <div>
                        <h2 className="text-xl font-display font-medium text-ink">Let's get introduced</h2>
                        <p className="text-xs text-muted mt-1">First, please provide your contact details.</p>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <label className="block text-[10px] font-semibold uppercase tracking-wider text-muted mb-1.5">
                            Your Full Name <span className="text-rose-500">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="e.g. Alexander Winston"
                            className="w-full rounded-xl border border-line/[0.12] bg-surface-2/20 hover:bg-surface-2/40 focus:bg-surface focus:border-accent px-4 py-3 text-sm text-ink outline-none transition duration-200"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] font-semibold uppercase tracking-wider text-muted mb-1.5">
                            Jewelry Store Name <span className="text-rose-500">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.storeName}
                            onChange={(e) => setFormData({ ...formData, storeName: e.target.value })}
                            placeholder="e.g. Winston Fine Jewelers"
                            className="w-full rounded-xl border border-line/[0.12] bg-surface-2/20 hover:bg-surface-2/40 focus:bg-surface focus:border-accent px-4 py-3 text-sm text-ink outline-none transition duration-200"
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[10px] font-semibold uppercase tracking-wider text-muted mb-1.5">
                              Work Email <span className="text-rose-500">*</span>
                            </label>
                            <input
                              type="email"
                              required
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              placeholder="e.g. alex@winston.com"
                              className="w-full rounded-xl border border-line/[0.12] bg-surface-2/20 hover:bg-surface-2/40 focus:bg-surface focus:border-accent px-4 py-3 text-sm text-ink outline-none transition duration-200"
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] font-semibold uppercase tracking-wider text-muted mb-1.5">
                              Phone Number <span className="text-rose-500">*</span>
                            </label>
                            <input
                              type="tel"
                              required
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              placeholder="e.g. (212) 555-0144"
                              className="w-full rounded-xl border border-line/[0.12] bg-surface-2/20 hover:bg-surface-2/40 focus:bg-surface focus:border-accent px-4 py-3 text-sm text-ink outline-none transition duration-200"
                            />
                          </div>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={nextStep}
                        disabled={!isStep1Valid}
                        className="w-full btn-primary py-3 mt-4 disabled:opacity-40 disabled:pointer-events-none"
                      >
                        Continue to profile
                      </button>
                    </div>
                  )}

                  {/* STEP 2 */}
                  {step === 2 && (
                    <div className="space-y-5 animate-fade-up">
                      <div>
                        <h2 className="text-xl font-display font-medium text-ink">Store Profile</h2>
                        <p className="text-xs text-muted mt-1">Help us customize your Strategic Advisor sandbox.</p>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <label className="block text-[10px] font-semibold uppercase tracking-wider text-muted mb-2.5">
                            Active Storefront Locations
                          </label>
                          <div className="grid grid-cols-4 gap-2">
                            {["1", "2-4", "5-9", "10+"].map((loc) => (
                              <button
                                type="button"
                                key={loc}
                                onClick={() => setFormData({ ...formData, locations: loc })}
                                className={`rounded-xl border py-3.5 text-xs font-semibold transition ${
                                  formData.locations === loc
                                    ? "bg-accent border-accent text-white"
                                    : "border-line/[0.08] hover:border-line/45 text-ink/75"
                                }`}
                              >
                                {loc}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="block text-[10px] font-semibold uppercase tracking-wider text-muted mb-2">
                            Current Point of Sale (POS) / System
                          </label>
                          <div className="grid grid-cols-2 gap-2 text-xs">
                            {["Shopify", "The Edge POS", "Pen & Paper", "Custom / Other"].map((pos) => (
                              <button
                                type="button"
                                key={pos}
                                onClick={() => setFormData({ ...formData, currentSoftware: pos })}
                                className={`rounded-xl border p-3.5 text-left font-medium flex items-center justify-between transition ${
                                  formData.currentSoftware === pos
                                    ? "bg-accent/5 border-accent text-accent"
                                    : "border-line/[0.08] hover:border-line/40 text-ink/75"
                                }`}
                              >
                                <span>{pos}</span>
                                {formData.currentSoftware === pos && (
                                  <span className="text-[10px]">●</span>
                                )}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 mt-6">
                        <button
                          type="button"
                          onClick={prevStep}
                          className="btn-ghost py-3.5"
                        >
                          Go Back
                        </button>
                        <button
                          type="button"
                          onClick={nextStep}
                          className="btn-primary py-3.5"
                        >
                          Continue
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP 3 */}
                  {step === 3 && (
                    <div className="space-y-5 animate-fade-up">
                      <div>
                        <h2 className="text-xl font-display font-medium text-ink">Modernization Goals</h2>
                        <p className="text-xs text-muted mt-1">What would you like the Crown Jewels AI to solve first?</p>
                      </div>

                      <div className="space-y-3">
                        {[
                          { key: "sketches", title: "Dynamic Custom Designs", desc: "Generating sketch variations live at the counter in under 5 seconds." },
                          { key: "audits", title: "Sales Audits & Stock Intelligence", desc: "Surfacing inventory shortages and identifying local customer buying trends." },
                          { key: "clienteling", title: "Automated Clienteling", desc: "Drafting personalized WhatsApp wishes and marketing follow-ups." },
                          { key: "repairs", title: "Overdue Repair Tracking", desc: "Watching intake queues and reminding clients automatically." },
                        ].map((goal) => (
                          <div
                            key={goal.key}
                            onClick={() =>
                              setFormData({
                                ...formData,
                                goals: {
                                  ...formData.goals,
                                  [goal.key]: !formData.goals[goal.key as keyof typeof formData.goals],
                                },
                              })
                            }
                            className={`rounded-xl border p-4 text-left cursor-pointer transition flex items-start gap-3.5 ${
                              formData.goals[goal.key as keyof typeof formData.goals]
                                ? "bg-accent/5 border-accent text-ink"
                                : "border-line/[0.08] hover:bg-surface-2/10 text-ink/75"
                            }`}
                          >
                            <div
                              className={`mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded border transition ${
                                formData.goals[goal.key as keyof typeof formData.goals]
                                  ? "bg-accent border-accent text-white"
                                  : "border-line/25 bg-surface"
                              }`}
                            >
                              {formData.goals[goal.key as keyof typeof formData.goals] && (
                                <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                              )}
                            </div>
                            <div>
                              <h4 className="text-xs font-semibold text-ink leading-tight">{goal.title}</h4>
                              <p className="text-[10px] text-muted mt-1.5 leading-relaxed">{goal.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="grid grid-cols-2 gap-3 mt-6">
                        <button
                          type="button"
                          onClick={prevStep}
                          className="btn-ghost py-3.5"
                        >
                          Go Back
                        </button>
                        <button
                          type="submit"
                          className="btn-primary py-3.5"
                        >
                          Schedule My Demo
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
