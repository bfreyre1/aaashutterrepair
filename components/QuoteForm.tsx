"use client";

import { useState } from "react";
import { trackGenerateLead } from "@/lib/analytics";
import {
  emptyQuoteForm,
  quoteMailtoHref,
  validateQuoteForm,
  type QuoteFormErrors,
  type QuoteFormValues,
} from "@/lib/quote";
import { CITY_LINKS, EMAIL, JOB_TYPES, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

export function QuoteForm() {
  const [values, setValues] = useState<QuoteFormValues>(emptyQuoteForm);
  const [errors, setErrors] = useState<QuoteFormErrors>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof QuoteFormValues>(
    key: K,
    value: QuoteFormValues[K],
  ) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateQuoteForm(values);
    setErrors(nextErrors);
    setSubmitError(null);
    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data: { error?: string; errors?: QuoteFormErrors } = await response
        .json()
        .catch(() => ({}));

      if (!response.ok) {
        if (data.errors) {
          setErrors(data.errors);
        }
        setSubmitError(
          data.error ??
            `We could not create your estimate request. Please call ${PHONE_DISPLAY}.`,
        );
        return;
      }

      trackGenerateLead();
      setSubmitted(true);
    } catch {
      setSubmitError(
        `We could not reach the shop. Please call ${PHONE_DISPLAY} or try again.`,
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="form-success" role="status">
        <h2>Request received</h2>
        <p>
          We follow up by text to confirm your request and schedule the visit.
          Prefer to talk now? Call{" "}
          <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>.
        </p>
      </div>
    );
  }

  const mailto = quoteMailtoHref(values);

  return (
    <form
      className="quote-form"
      onSubmit={onSubmit}
      noValidate
      aria-busy={submitting}
    >
      {submitError ? (
        <div className="form-submit-error" role="alert">
          <p>{submitError}</p>
          <p>
            You can also{" "}
            <a href={mailto}>email the same details to {EMAIL}</a> or call{" "}
            <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>.
          </p>
        </div>
      ) : null}

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

      <button type="submit" className="btn btn-primary" disabled={submitting}>
        {submitting ? "Sending request…" : "Request a free estimate"}
      </button>
      <p className="form-fineprint">
        We text this number to schedule. Prefer to talk now? Call{" "}
        <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>.
      </p>
    </form>
  );
}
