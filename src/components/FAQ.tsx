import { useLanguage } from '@/contexts/LanguageContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const FAQ = () => {
  const { t } = useLanguage();

  const faqs = [
    {
      question: t({
        th: 'จะเปิดเมื่อไหร่?',
        en: 'When is the opening?'
      }),
      answer: t({
        th: 'เราใกล้เปิดแล้ว — ลงทะเบียนเพื่อรับข่าวก่อนใคร',
        en: 'Very soon — join the list for first updates.'
      })
    },
    {
      question: t({
        th: 'จองโต๊ะอย่างไร?',
        en: 'How do I reserve a table?'
      }),
      answer: t({
        th: 'ผู้ลงทะเบียนจะได้รับลิงก์จองล่วงหน้าก่อนเปิดสาธารณะ',
        en: 'Subscribers receive early reservation links before public release.'
      })
    },
    {
      question: t({
        th: 'มีโซนชมพระอาทิตย์ตกไหม?',
        en: 'Is there a sunset view zone?'
      }),
      answer: t({
        th: 'มีโซน Sunset Lounge และวิวทะเล 360°',
        en: 'Yes — our Sunset Lounge offers sweeping 360° seaside views.'
      })
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-bronze-dark">
            {t({ th: 'คำถามที่พบบ่อย', en: 'FAQ' })}
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-bronze/20 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left text-bronze-dark hover:text-secondary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
