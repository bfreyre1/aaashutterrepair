import { JsonLd } from "@/components/JsonLd";
import { faqJsonLd, type FaqItem } from "@/lib/schema";

type FaqListProps = {
  items: FaqItem[];
  heading?: string;
  headingId?: string;
  /** Skip FAQPage JSON-LD when the page already emits one schema for every list. */
  jsonLd?: boolean;
};

export function FaqList({
  items,
  heading = "Common questions",
  headingId = "faq-heading",
  jsonLd = true,
}: FaqListProps) {
  return (
    <section className="faq" aria-labelledby={headingId}>
      {jsonLd ? <JsonLd data={faqJsonLd(items)} /> : null}
      <h2 id={headingId}>{heading}</h2>
      <div className="faq__list">
        {items.map((item) => (
          <details key={item.question} className="faq__item">
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
