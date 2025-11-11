import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex gap-2 bg-muted/50 p-1 rounded-full backdrop-blur-sm">
      <Button
        variant={language === 'th' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('th')}
        className="rounded-full px-4 transition-all"
      >
        TH
      </Button>
      <Button
        variant={language === 'en' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('en')}
        className="rounded-full px-4 transition-all"
      >
        EN
      </Button>
    </div>
  );
};
