'use client';

import { useState } from 'react';
import type { FAQ } from '@/types';
import { getMetafieldValue } from '@/lib/cosmic';

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [openId, setOpenId] = useState<string | null>(null);

  if (!faqs || faqs.length === 0) {
    return <p className="text-gray-500 text-center">No FAQs available.</p>;
  }

  return (
    <div className="space-y-3">
      {faqs.map((faq) => {
        const question = getMetafieldValue(faq.metadata?.question) || faq.title;
        const answer = getMetafieldValue(faq.metadata?.answer);
        const category = getMetafieldValue(faq.metadata?.category);
        const isOpen = openId === faq.id;

        return (
          <div
            key={faq.id}
            className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-warm-200 transition-colors"
          >
            <button
              onClick={() => setOpenId(isOpen ? null : faq.id)}
              className="w-full flex items-start justify-between gap-4 p-6 text-left"
            >
              <div className="flex-1">
                {category && (
                  <span className="inline-block px-2.5 py-0.5 bg-warm-50 text-warm-700 rounded-full text-xs font-semibold mb-2">
                    {category}
                  </span>
                )}
                <h3 className="font-semibold text-gray-900 text-lg">{question}</h3>
              </div>
              <span className={`text-2xl text-warm-500 transition-transform ${isOpen ? 'rotate-45' : ''}`}>+</span>
            </button>

            {isOpen && answer && (
              <div className="px-6 pb-6 text-gray-700 leading-relaxed border-t border-gray-100 pt-4">
                {answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}