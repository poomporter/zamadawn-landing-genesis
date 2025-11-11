import { useLanguage } from '@/contexts/LanguageContext';
import sunsetLounge from '@/assets/sunset-lounge.jpg';
import cocktails from '@/assets/cocktails.jpg';
import panoramicView from '@/assets/panoramic-view.jpg';

export const Gallery = () => {
  const { t } = useLanguage();

  const images = [
    {
      src: sunsetLounge,
      alt: t({
        th: 'Sunset Lounge บนชั้น 38',
        en: 'Sunset Lounge on Level 38'
      }),
      caption: t({
        th: 'Rooftop • Sunset • Celebration',
        en: 'Rooftop • Sunset • Celebration'
      })
    },
    {
      src: panoramicView,
      alt: t({
        th: 'วิวพาโนรามา 360°',
        en: '360° Panoramic View'
      }),
      caption: t({
        th: 'พิธีแห่งแสงและทะเล',
        en: 'Where Light Meets the Sea'
      })
    },
    {
      src: cocktails,
      alt: t({
        th: 'Sun-Inspired Cocktails',
        en: 'Sun-Inspired Cocktails'
      }),
      caption: t({
        th: 'รุ่งอรุณบทใหม่ของพัทยา',
        en: 'A New Dawn in Pattaya'
      })
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted to-background">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-bronze-dark">
            {t({
              th: 'บรรยากาศ',
              en: 'Explore the Vibe'
            })}
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            {t({
              th: 'รุ่งอรุณบทใหม่ของพัทยา',
              en: 'A New Dawn in Pattaya'
            })}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl aspect-[4/5] shadow-warm hover:shadow-glow transition-all duration-500"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bronze-dark/80 via-bronze-dark/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-lg font-semibold">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
