import { useLanguage } from '@/contexts/LanguageContext';
import zamaLogo from '@/assets/zama-logo.png';
import { Instagram, Facebook, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-bronze-dark text-bronze-dark-foreground py-16">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Logo & Brand */}
            <div className="space-y-4">
              <img src={zamaLogo} alt="ZAMĀ Logo" className="w-20 h-20" />
              <div>
                <h3 className="font-bold text-xl mb-1">ZAMĀ Skybar</h3>
                <p className="text-primary/80 text-sm">
                  {t({
                    th: 'นครแห่งรุ่งอรุณ',
                    en: 'The City of the Dawn'
                  })}
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-3">
              <h4 className="font-semibold text-lg text-primary">
                {t({ th: 'ติดต่อเรา', en: 'Contact' })}
              </h4>
              <div className="space-y-2 text-sm text-primary/80">
                <p>{t({ th: 'บริษัท ตูลุม พีที จำกัด', en: 'Tulum Pty Co., Ltd.' })}</p>
                <p>
                  {t({
                    th: 'ชั้น 38, 457 หมู่ที่ 12',
                    en: 'Level 38, 457 Moo 12'
                  })}
                </p>
                <p>
                  {t({
                    th: 'ถนนเลียบชายหาดจอมเทียน',
                    en: 'Jomtien Beach Road'
                  })}
                </p>
                <p>
                  {t({
                    th: 'ชลบุรี 20150',
                    en: 'Chon Buri 20150'
                  })}
                </p>
                <p>
                  <a href="mailto:info@tulum.asia" className="hover:text-accent transition-colors">
                    info@tulum.asia
                  </a>
                </p>
              </div>
            </div>

            {/* Social */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg text-primary">
                {t({ th: 'ติดตามเรา', en: 'Follow Us' })}
              </h4>
              <p className="text-sm text-primary/80">
                {t({
                  th: 'อัปเดตก่อนใคร คอนเทนต์เบื้องหลัง และกิจกรรมพิเศษ',
                  en: 'Early updates, behind-the-scenes, and special events'
                })}
              </p>
              <div className="flex gap-3">
                <Button variant="outline" size="icon" className="bg-primary/10 hover:bg-primary/20 border-primary/30">
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" className="bg-primary/10 hover:bg-primary/20 border-primary/30">
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" className="bg-primary/10 hover:bg-primary/20 border-primary/30">
                  <MapPin className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-primary/20 pt-8 text-center text-sm text-primary/60">
            <p>© {new Date().getFullYear()} ZAMĀ Skybar — The City of the Dawn</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
