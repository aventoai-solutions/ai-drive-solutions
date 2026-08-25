import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";

const serviceOptions = [
  "AI Automation",
  "Website Development",
  "E-commerce",
  "Business Systems",
  "UI/UX Design",
  "Other",
];

const budgetOptions = [
  "Under AED 5,000",
  "AED 5,000 – 10,000",
  "AED 10,000 – 25,000",
  "AED 25,000 – 50,000",
  "AED 50,000+",
];

const fieldClass =
  "w-full rounded-xl border border-input bg-surface/70 px-4 py-3 text-sm text-foreground placeholder:text-faint focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-ring/40";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="glass flex flex-col items-center gap-4 rounded-3xl p-10 text-center">
        <CheckCircle2 className="size-10 text-emerald" aria-hidden="true" />
        <p className="text-lg font-semibold text-foreground">
          Thank you. Our team will contact you shortly.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="text-sm font-semibold text-primary-glow"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass rounded-3xl p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className="mb-2 block text-xs font-semibold text-foreground">
            Full Name
          </label>
          <input id="fullName" name="fullName" required className={fieldClass} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="company" className="mb-2 block text-xs font-semibold text-foreground">
            Company Name
          </label>
          <input id="company" name="company" className={fieldClass} placeholder="Company" />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-xs font-semibold text-foreground">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={fieldClass}
            placeholder="you@company.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-xs font-semibold text-foreground">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className={fieldClass}
            placeholder="+971 50 000 0000"
          />
        </div>
        <div>
          <label htmlFor="service" className="mb-2 block text-xs font-semibold text-foreground">
            Service Interested In
          </label>
          <select id="service" name="service" required defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Select a service
            </option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="budget" className="mb-2 block text-xs font-semibold text-foreground">
            Budget Range
          </label>
          <select id="budget" name="budget" defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Select a range
            </option>
            {budgetOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="projectDescription"
            className="mb-2 block text-xs font-semibold text-foreground"
          >
            Project Description
          </label>
          <textarea
            id="projectDescription"
            name="projectDescription"
            rows={5}
            required
            className={fieldClass}
            placeholder="Tell us about your business and what you want to build."
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-7 w-full rounded-xl bg-primary px-8 py-4 text-sm font-bold text-primary-foreground shadow-glow transition-transform hover:scale-[1.01]"
      >
        Send Project Request
      </button>
    </form>
  );
}
