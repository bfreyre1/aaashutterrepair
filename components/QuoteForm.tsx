"use client";

import { useState } from "react";
import { trackGenerateLead } from "@/lib/analytics";
import { CITY_LINKS, EMAIL, JOB_TYPES } from "@/lib/site";

type FormState = {
  name: string;
  phone: string;
  email: string;
  city: string;
  jobType: string;
  description: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const empty: FormState = {
  name: "",
  phone: "",
  email: "",
  city: "",
  jobType: "",
  description: "",
};

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};
  if (values.name.trim().length < 2) {
    errors.name = "Enter your name.";
  }
  const digits = values.phone.replace(/\D/g, "");
  if (digits.length < 10) {
    errors.phone = "Enter a 10-digit phone number so we can text you.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.city) {
    errors.city = "Choose your city.";
  }
  if (!values.jobType) {
    errors.jobType = "Choose the type of job.";
  }
  if (values.description.trim().length < 10) {
    errors.description = "Describe what is broken (at least a sentence).";
  }
  return errors;
}

export function QuoteForm() {
  const [values, setValues] = useState<FormState>(empty);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      return;
    }
    trackGenerateLead();
    setSubmitted(true);
  }

  if (submitted) {
    const subject = encodeURIComponent(
      `Estimate request: ${values.jobType} in ${values.city}`,
    );
    const body = encodeURIComponent(
      [
        `Name: ${values.name}`,
        `Phone: ${values.phone}`,
        `Email: ${values.email}`,
        `City: ${values.city}`,
        `Job type: ${values.jobType}`,
        "",
        values.description,
      ].join("\n"),
    );

    return (
      <div className="form-success" role="status">
        <h2>Request received</h2>
        <p>
          We follow up by text to confirm your request and schedule the visit.
          Prefer to talk now? Call{" "}
          <a href="tel:+18183928584">818-392-8584</a>.
        </p>
        <p>
          This sample site does not connect to a CRM. If you want a copy in
          your own inbox,{" "}
          <a href={`mailto:${EMAIL}?subject=${subject}&body=${body}`}>
            send the same details to {EMAIL}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form className="quote-form" onSubmit={onSubmit} noValidate>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          autoComplete="name"
          value={values.name}
          onChange={(event) => update("name", event.target.value)}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name ? (
          <p id="name-error" className="field-error">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div className="field">
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          value={values.phone}
          onChange={(event) => update("phone", event.target.value)}
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? "phone-error" : "phone-hint"}
        />
        <p id="phone-hint" className="field-hint">
          We text this number to schedule.
        </p>
        {errors.phone ? (
          <p id="phone-error" className="field-error">
            {errors.phone}
          </p>
        ) : null}
      </div>

      <div className="field">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={(event) => update("email", event.target.value)}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email ? (
          <p id="email-error" className="field-error">
            {errors.email}
          </p>
        ) : null}
      </div>

      <div className="field">
        <label htmlFor="city">City</label>
        <select
          id="city"
          name="city"
          value={values.city}
          onChange={(event) => update("city", event.target.value)}
          aria-invalid={Boolean(errors.city)}
          aria-describedby={errors.city ? "city-error" : undefined}
        >
          <option value="">Select a city</option>
          {CITY_LINKS.map((city) => (
            <option key={city.href} value={city.label}>
              {city.label}
            </option>
          ))}
          <option value="Other San Fernando Valley / LA">
            Other San Fernando Valley / LA
          </option>
        </select>
        {errors.city ? (
          <p id="city-error" className="field-error">
            {errors.city}
          </p>
        ) : null}
      </div>

      <div className="field">
        <label htmlFor="jobType">Job type</label>
        <select
          id="jobType"
          name="jobType"
          value={values.jobType}
          onChange={(event) => update("jobType", event.target.value)}
          aria-invalid={Boolean(errors.jobType)}
          aria-describedby={errors.jobType ? "jobType-error" : undefined}
        >
          <option value="">Select the job type</option>
          {JOB_TYPES.map((job) => (
            <option key={job} value={job}>
              {job}
            </option>
          ))}
        </select>
        {errors.jobType ? (
          <p id="jobType-error" className="field-error">
            {errors.jobType}
          </p>
        ) : null}
      </div>

      <div className="field">
        <label htmlFor="description">What needs repair?</label>
        <textarea
          id="description"
          name="description"
          rows={5}
          value={values.description}
          onChange={(event) => update("description", event.target.value)}
          aria-invalid={Boolean(errors.description)}
          aria-describedby={
            errors.description ? "description-error" : undefined
          }
        />
        {errors.description ? (
          <p id="description-error" className="field-error">
            {errors.description}
          </p>
        ) : null}
      </div>

      <button type="submit" className="btn btn-primary">
        Request a free estimate
      </button>
      <p className="form-fineprint">
        No fake booking system on this sample. After you submit, we show a
        confirmation and fire a <code>generate_lead</code> conversion. Call if
        you want to talk to a person now.
      </p>
    </form>
  );
}
