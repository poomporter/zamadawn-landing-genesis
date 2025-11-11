import { useLanguage } from '@/contexts/LanguageContext';

export const About = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-b from-muted to-background">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-bronze-dark">
            {t({ th: 'About ZAMĀ', en: 'About ZAMĀ' })}
          </h2>
          
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
            {t({
              th: 'ZAMĀ (ซามา) มาจากคำมายาโบราณ แปลว่า "นครแห่งรุ่งอรุณ" เราคือสกายบาร์บนชั้น 38 เหนือชายฝั่งจอมเทียน ที่ที่แสงสีทองของพระอาทิตย์บรรจบกับจังหวะของทะเล ดีไซน์ได้รับแรงบันดาลใจจาก Tulum ผสานเสน่ห์พัทยา เพื่อสร้างสถานที่แห่งการเฉลิมฉลองที่งดงาม อบอุ่น และมีจิตวิญญาณ',
              en: 'Derived from the ancient Mayan word for "The City of the Dawn," ZAMĀ rises 38 floors above Jomtien Beach. Inspired by Tulum and shaped by Pattaya\'s coastal spirit, it\'s a sanctuary where golden light meets ocean rhythm — a warm, soulful celebration above the sea.'
            })}
          </p>
        </div>
      </div>
    </section>
  );
};
