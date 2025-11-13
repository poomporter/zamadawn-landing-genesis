import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Eye, Sparkles, Music, Palette, Wine } from 'lucide-react';

export const Highlights = () => {
  const { t } = useLanguage();

  const highlights = [
    {
      icon: Eye,
      title: t({
        th: 'วิวริมทะเล 360°',
        en: '360° Seaside View'
      }),
      description: t({
        th: 'จากสกายบาร์ที่สูงที่สุดในพัทยา',
        en: "From Pattaya's highest skybar"
      })
    },
    {
      icon: Sparkles,
      title: t({
        th: 'Sun-Inspired Mixology',
        en: 'Sun-Inspired Mixology'
      }),
      description: t({
        th: 'ค็อกเทลที่ตีความแสงอาทิตย์',
        en: 'Cocktails that interpret the sun'
      })
    },
    {
      icon: Music,
      title: t({
        th: 'Sunset Lounge & Live',
        en: 'Sunset Lounge & Live'
      }),
      description: t({
        th: 'การแสดงสดและบรรยากาศยามเย็น',
        en: 'Live performances & evening ambiance'
      })
    },
    {
      icon: Palette,
      title: t({
        th: 'ดีไซน์เมดิเตอร์เรเนียน–มายัน',
        en: 'Mediterranean–Mayan Design'
      }),
      description: t({
        th: 'โทนอุ่น ลักชัวรี่',
        en: 'Warm-luxury aesthetic'
      })
    },
    {
      icon: Wine,
      title: t({
        th: 'Champagne Rituals',
        en: 'Champagne Rituals'
      }),
      description: t({
        th: 'การรับประทานอาหารระดับสูง',
        en: 'Elevated dining experience'
      })
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto mb-16 text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-bronze-dark">
            {t({
              th: 'จากพลบค่ำสู่ความงดงามยามรุ่งอรุณ',
              en: 'From Dusk to Dawn Sensuality'
            })}
          </h2>
          
          <div className="text-lg md:text-xl text-foreground/80 leading-relaxed space-y-4">
            <p>
              {t({
                th: 'ที่ ZAMĀ ทุกค่ำคืนคือผืนผ้าใบที่มีชีวิต — วาดด้วยสีของทะเลและดวงอาทิตย์ เมื่อวันสิ้นสุดลง ขอบฟ้าลุกเป็นไหม้ด้วยสีแอปริคอทและทอง อากาศสั่นไหวไปกับจังหวะดนตรีสากล เสียงของผู้คนที่พบปะ หัวเราะ และรู้สึกมีชีวิตชีวา',
                en: 'At ZAMĀ, every evening is a living canvas — painted in the colors of the sea and the sun. As the day fades, the horizon ignites in hues of apricot and gold. The air hums with global beats, the sound of people meeting, laughing, feeling alive.'
              })}
            </p>
            <p>
              {t({
                th: 'เมื่อค่ำคืนมาถึง พลังงานลึกซึ้งยิ่งขึ้น เงารำไปกับสีบรอนซ์และหิน เงาเคลื่อนไหวราวกับบทกวี นี่คือจังหวะที่ไม่ดังแต่ดึงดูด — ความอบอุ่นที่อยู่กับคุณนานหลังจากที่คุณจากไป',
                en: "When night arrives, the energy deepens. Shadows dance across bronze and stone, silhouettes move like poetry. It's a rhythm that's not loud, but magnetic — a warmth that stays with you long after you leave."
              })}
            </p>
            <p className="font-medium">
              {t({
                th: 'นี่ไม่ใช่แค่การออกไปข้างนอก — แต่เป็นพิธีกรรมแห่งการเชื่อมโยง ความงาม และการเกิดใหม่',
                en: "This is more than a night out — it's a ritual of connection, beauty, and rebirth."
              })}
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <Card
                key={index}
                className="p-6 bg-card hover:bg-muted/50 transition-all duration-300 hover:shadow-warm border-bronze/20 group"
              >
                <highlight.icon className="w-12 h-12 text-secondary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold mb-2 text-bronze-dark">
                  {highlight.title}
                </h3>
                <p className="text-muted-foreground">
                  {highlight.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
