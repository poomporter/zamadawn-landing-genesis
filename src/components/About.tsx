import { useLanguage } from '@/contexts/LanguageContext';

export const About = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.05),transparent_70%)]" />
      
      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-12 md:mb-16">
            <span className="bg-gradient-to-br from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent leading-tight block">
              {t({ 
                th: 'นครแห่งรุ่งอรุณ', 
                en: 'The City of the Dawn' 
              })}
            </span>
            <span className="block text-2xl md:text-4xl lg:text-5xl mt-4 text-foreground/70 font-light">
              {t({ 
                th: 'เกิดใหม่เหนือพัทยา', 
                en: 'Reborn Above Pattaya' 
              })}
            </span>
          </h2>
          
          {/* Content */}
          <div className="space-y-8 text-center">
            <div className="space-y-6 text-lg md:text-xl lg:text-2xl leading-relaxed text-foreground/80">
              <p>
                {t({
                  th: 'ZAMĀ คือจุดที่พลังงานของรุ่งอรุณปรากฏขึ้นทุกค่ำคืน ตั้งตระหง่ามเหนือทะเลพร้อมวิวพาโนรามา 360° นี่คือสกายบาร์ริมทะเลที่ทรงคุณค่า จับจิตวิญญาณของแสงสว่าง จังหวะ และการเชื่อมโยง',
                  en: 'ZAMĀ is where the energy of dawn rises every night. Perched above the sea with panoramic 360° views, it is a refined seaside sky bar that captures the beauty of light, rhythm, and connection.'
                })}
              </p>
              
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto my-8" />
              
              <p>
                {t({
                  th: 'ได้รับแรงบันดาลใจจากคำมายาโบราณที่แปลว่า "นครแห่งรุ่งอรุณ" ZAMĀ เฉลิมฉลองจิตวิญญาณแห่งจุดเริ่มต้นใหม่ — ผ่านค็อกเทลที่สร้างสรรค์อย่างพิถีพิถัน ดีไซน์ที่อบอุ่น และความกลมกลืนอันงดงามของเสียงและขอบฟ้า',
                  en: 'Inspired by the ancient Mayan word meaning "City of the Dawn," ZAMĀ celebrates the spirit of new beginnings — through crafted cocktails, warm design, and the sensual harmony of sound and horizon.'
                })}
              </p>
              
              <p className="italic text-foreground/70">
                {t({
                  th: 'ที่นี่ ชั่วโมงทองกลายเป็นค่ำคืนที่เปล่งประกาย ทุกพระอาทิตย์ตกดินปรากฏราวกับพิธีกรรม และทุกช่วงเวลารู้สึกเปล่งประกายไปด้วยแสงสว่าง',
                  en: 'Here, golden hours turn into glowing nights. Every sunset unfolds like a ritual, and every moment feels illuminated.'
                })}
              </p>
            </div>
            
            {/* Closing statement */}
            <div className="pt-8">
              <p className="text-xl md:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-primary/90 via-primary to-primary/90 bg-clip-text text-transparent">
                {t({
                  th: 'ยินดีต้อนรับสู่ ZAMĀ',
                  en: 'Welcome to ZAMĀ'
                })}
              </p>
              <p className="text-base md:text-lg mt-2 text-foreground/60">
                {t({
                  th: 'สถานที่ที่ท้องฟ้า ทะเล และจิตวิญญาณพบกัน',
                  en: 'A place where the sky, the sea, and the soul meet'
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
