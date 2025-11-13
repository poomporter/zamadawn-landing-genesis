import { useLanguage } from '@/contexts/LanguageContext';

export const About = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-b from-muted to-background">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-bronze-dark">
            {t({ 
              th: 'นครแห่งรุ่งอรุณ — เกิดใหม่เหนือพัทยา', 
              en: 'The City of the Dawn — Reborn Above Pattaya' 
            })}
          </h2>
          
          <div className="text-lg md:text-xl text-foreground/80 leading-relaxed space-y-4">
            <p>
              {t({
                th: 'ZAMĀ คือจุดที่พลังงานของรุ่งอรุณปรากฏขึ้นทุกค่ำคืน ตั้งตระหง่ามเหนือทะเลพร้อมวิวพาโนรามา 360° นี่คือสกายบาร์ริมทะเลที่ทรงคุณค่า จับจิตวิญญาณของแสงสว่าง จังหวะ และการเชื่อมโยง',
                en: 'ZAMĀ is where the energy of dawn rises every night. Perched above the sea with panoramic 360° views, it is a refined seaside sky bar that captures the beauty of light, rhythm, and connection.'
              })}
            </p>
            <p>
              {t({
                th: 'ได้รับแรงบันดาลใจจากคำมายาโบราณที่แปลว่า "นครแห่งรุ่งอรุณ" ZAMĀ เฉลิมฉลองจิตวิญญาณแห่งจุดเริ่มต้นใหม่ — ผ่านค็อกเทลที่สร้างสรรค์อย่างพิถีพิถัน ดีไซน์ที่อบอุ่น และความกลมกลืนอันงดงามของเสียงและขอบฟ้า',
                en: 'Inspired by the ancient Mayan word meaning "City of the Dawn," ZAMĀ celebrates the spirit of new beginnings — through crafted cocktails, warm design, and the sensual harmony of sound and horizon.'
              })}
            </p>
            <p>
              {t({
                th: 'ที่นี่ ชั่วโมงทองกลายเป็นค่ำคืนที่เปล่งประกาย ทุกพระอาทิตย์ตกดินปรากฏราวกับพิธีกรรม และทุกช่วงเวลารู้สึกเปล่งประกายไปด้วยแสงสว่าง',
                en: 'Here, golden hours turn into glowing nights. Every sunset unfolds like a ritual, and every moment feels illuminated.'
              })}
            </p>
            <p className="font-medium">
              {t({
                th: 'ยินดีต้อนรับสู่ ZAMĀ — สถานที่ที่ท้องฟ้า ทะเล และจิตวิญญาณพบกัน',
                en: 'Welcome to ZAMĀ — a place where the sky, the sea, and the soul meet.'
              })}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
