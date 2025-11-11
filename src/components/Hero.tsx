import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import zamaLogo from '@/assets/zama-logo.png';
import zamaPattern from '@/assets/zama-pattern.png';
import heroImage from '@/assets/hero-skybar.jpg';

export const Hero = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        variant: 'destructive',
        description: t({
          th: 'กรุณากรอกอีเมลให้ถูกต้อง',
          en: 'Please enter a valid email address'
        })
      });
      return;
    }

    if (!consent) {
      toast({
        variant: 'destructive',
        description: t({
          th: 'กรุณายินยอมรับข่าวสาร',
          en: 'Please agree to receive updates'
        })
      });
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      toast({
        description: t({
          th: 'ขอบคุณ! เราบันทึกอีเมลของคุณแล้ว — พบกันบนชั้น 38',
          en: "Thank you! You're on the list — see you on Level 38."
        })
      });
      setEmail('');
      setConsent(false);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`
        }}
      />
      
      {/* Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url(${zamaPattern})`,
          backgroundSize: '600px',
          backgroundRepeat: 'repeat'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/85 to-background/95" />
      
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="bg-background/80 backdrop-blur-md rounded-3xl p-6 shadow-warm">
              <img 
                src={zamaLogo} 
                alt="ZAMĀ Skybar Logo" 
                className="w-32 h-32 md:w-48 md:h-48 object-contain drop-shadow-2xl animate-in zoom-in duration-700"
              />
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-bronze-dark leading-tight">
            {t({
              th: 'รุ่งอรุณแห่งความสูงสุดริมทะเลพัทยา',
              en: 'Where the Sun Rises Above the Sea'
            })}
          </h1>

          {/* Subheadline */}
          <div className="space-y-2">
            <p className="text-xl md:text-2xl text-secondary font-semibold">
              {t({
                th: 'ZAMĀ Skybar — Level 38 | Coming Soon',
                en: 'ZAMĀ Skybar — Level 38 | Opening Soon'
              })}
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              {t({
                th: 'สัมผัสจุดนัดพบใหม่ของแสงอาทิตย์ ทะเล และการเฉลิมฉลอง',
                en: 'A new horizon for light, sea, and celebration'
              })}
            </p>
          </div>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 mt-12">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder={t({
                  th: 'อีเมลของคุณ',
                  en: 'Your email'
                })}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 bg-background/80 backdrop-blur-sm border-bronze/20 focus:border-accent"
              />
              <Button
                type="submit"
                disabled={isLoading}
                className="h-12 px-8 bg-gradient-to-r from-secondary to-accent hover:shadow-warm transition-all duration-300"
              >
                {t({
                  th: 'ลงทะเบียนรับสิทธิ์ก่อนใคร',
                  en: 'Join the Guest List'
                })}
              </Button>
            </div>
            
            <div className="flex items-start gap-2 text-sm text-muted-foreground">
              <Checkbox
                id="consent"
                checked={consent}
                onCheckedChange={(checked) => setConsent(checked as boolean)}
                className="mt-0.5"
              />
              <label htmlFor="consent" className="cursor-pointer text-left">
                {t({
                  th: 'ฉันยินยอมรับข่าวสารและข้อเสนอจาก ZAMĀ — เราจะไม่แชร์อีเมลของคุณกับบุคคลที่สาม',
                  en: "I agree to receive updates and offers from ZAMĀ — We'll never share your email with anyone"
                })}
              </label>
            </div>
          </form>

          {/* Secondary CTA */}
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button variant="outline" size="lg" className="border-bronze/30 hover:bg-bronze/10">
              {t({
                th: 'ติดตามอัปเดต',
                en: 'Follow Updates'
              })}
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-muted to-transparent" />
    </section>
  );
};
