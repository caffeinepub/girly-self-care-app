import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface OpeningScreenProps {
  onNext: () => void;
}

export default function OpeningScreen({ onNext }: OpeningScreenProps) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <Card className="max-w-md w-full shadow-2xl">
        <CardContent className="pt-12 pb-8 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-primary" style={{ fontFamily: 'Pacifico, cursive' }}>
            🎀 Hi Girlies 🎀
          </h1>
          <p className="text-lg text-foreground">
            I have solution of all your problems 💕
          </p>
          <Button onClick={onNext} size="lg" className="mt-6">
            Next ➜
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
