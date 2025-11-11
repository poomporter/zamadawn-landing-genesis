import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Car, Sunset } from 'lucide-react';
import panoramicView from '@/assets/panoramic-view.jpg';

export const Location = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-bronze-dark">
            {t({ th: 'พิกัด', en: 'Location' })}
          </h2>

          <div className="bg-card rounded-2xl overflow-hidden border border-bronze/20 shadow-warm">
            <div className="aspect-video relative">
              <img 
                src={panoramicView} 
                alt="ZAMĀ Skybar Location View"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bronze-dark/60 to-transparent flex items-center justify-center">
                <MapPin className="w-16 h-16 text-white drop-shadow-lg" />
              </div>
            </div>
            
            <div className="p-8 space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-lg mb-1 text-bronze-dark">
                    {t({ th: 'ที่อยู่', en: 'Address' })}
                  </p>
                  <p className="text-foreground/80">
                    {t({
                      th: 'ชั้น 38, 457 หมู่ที่ 12 ถนนเลียบชายหาดจอมเทียน เมืองพัทยา อ.บางละมุง จ.ชลบุรี 20150',
                      en: 'Level 38, 457 Moo 12, Jomtien Beach Road, Muang Pattaya, Bang Lamung, Chon Buri 20150'
                    })}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Car className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-foreground/80">
                    {t({
                      th: 'ที่จอดรถภายในอาคาร',
                      en: 'Indoor parking'
                    })}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Sunset className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-foreground/80">
                    {t({
                      th: 'วิวทะเลยามเย็น',
                      en: 'Sunset seaside view'
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
