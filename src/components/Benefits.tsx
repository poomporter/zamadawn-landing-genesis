import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

export const Benefits = () => {
  const { t } = useLanguage();

  const benefits = [
    t({
      th: 'เชิญร่วมงานเปิดตัวอย่างเป็นทางการ',
      en: 'Official opening-night invitations'
    }),
    t({
      th: 'Early access สำหรับการจองโต๊ะโซนวิวดีที่สุด',
      en: 'Early access to premium table reservations'
    }),
    t({
      th: 'ข้อเสนอพิเศษและเซอร์ไพรส์ช่วงพรีลอนช์',
      en: 'Exclusive offers & pre-launch surprises'
    })
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-bronze-dark">
              {t({
                th: 'สิทธิพิเศษสำหรับผู้ติดตามก่อนเปิด',
                en: 'Pre-Launch Privileges'
              })}
            </h2>
          </div>

          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-warm border border-bronze/20">
            <ul className="space-y-6">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-lg text-foreground pt-0.5">{benefit}</p>
                </li>
              ))}
            </ul>

            <div className="mt-10 text-center">
              <Button size="lg" className="bg-gradient-to-r from-secondary to-accent hover:shadow-warm px-12">
                {t({
                  th: 'ลงทะเบียนตอนนี้',
                  en: 'Join Now'
                })}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
