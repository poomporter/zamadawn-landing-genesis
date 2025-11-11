import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageToggle } from '@/components/LanguageToggle';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Highlights } from '@/components/Highlights';
import { Benefits } from '@/components/Benefits';
import { Location } from '@/components/Location';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';
import { Helmet } from 'react-helmet';

const Index = () => {
  const { language, t } = useLanguage();

  return (
    <>
      <Helmet>
        <title>
          {t({
            th: 'ZAMĀ Skybar Pattaya — สกายบาร์ริมทะเลชั้น 38 | Coming Soon',
            en: "ZAMĀ Skybar Pattaya — Pattaya's Highest Seaside Rooftop | Opening Soon"
          })}
        </title>
        <meta 
          name="description" 
          content={t({
            th: 'ZAMĀ Skybar จุดบรรจบของแสงอาทิตย์และทะเลบนชั้น 38 จอมเทียน ลงทะเบียนเพื่อรับสิทธิ์จองก่อนใคร พร้อมข้อเสนอพิเศษช่วงพรีลอนช์',
            en: 'ZAMĀ Skybar rises 38 floors above Jomtien Beach. Join the guest list for early reservations and pre-launch privileges.'
          })}
        />
        <meta 
          property="og:title" 
          content={t({
            th: 'ZAMĀ Skybar — รุ่งอรุณบทใหม่ของพัทยา',
            en: 'ZAMĀ Skybar — A New Dawn in Pattaya'
          })}
        />
        <meta 
          property="og:description" 
          content={t({
            th: 'สกายบาร์วิวทะเล 360° ค็อกเทลแรงบันดาลใจจากแสงอาทิตย์ และพิธีเฉลิมฉลองยามเย็น',
            en: '360° seaside views, sun-inspired cocktails, and soulful sunset rituals.'
          })}
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <html lang={language} />
        
        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "ZAMĀ Skybar",
            "legalName": "Tulum Pty Co., Ltd.",
            "description": language === 'th' 
              ? "สกายบาร์ที่สูงที่สุดในพัทยา บนชั้น 38 เหนือชายฝั่งจอมเทียน"
              : "Pattaya's highest seaside rooftop on Level 38",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Level 38, 457 Moo 12, Jomtien Beach Road",
              "addressLocality": "Muang Pattaya, Bang Lamung",
              "addressRegion": "Chon Buri",
              "postalCode": "20150",
              "addressCountry": "TH"
            },
            "email": "info@tulum.asia",
            "priceRange": "$$"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen">
        {/* Fixed Language Toggle */}
        <div className="fixed top-6 right-6 z-50">
          <LanguageToggle />
        </div>

        {/* Main Content */}
        <Hero />
        <About />
        <Highlights />
        <Benefits />
        <Location />
        <FAQ />
        <Footer />
      </div>
    </>
  );
};

export default Index;
