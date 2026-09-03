import { JsonLd } from "@/components/JsonLd";
import { faqJsonLd, type FaqItem } from "@/lib/schema";

export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <section className="faq" aria-labelledby="faq-heading">
      <JsonLd data={faqJsonLd(items)} />
      <h2 id="faq-heading">Common questions</h2>
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
