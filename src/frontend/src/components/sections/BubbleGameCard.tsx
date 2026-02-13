import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Bubble {
  id: number;
  x: number;
  y: number;
}

export default function BubbleGameCard() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const gameAreaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(
      'https://assets.mixkit.co/sfx/preview/mixkit-bubble-pop-up-alert-notification-2357.mp3'
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const gameArea = gameAreaRef.current;
      if (!gameArea) return;

      const rect = gameArea.getBoundingClientRect();
      const maxX = rect.width - 40;
      const maxY = rect.height - 40;

      const newBubble: Bubble = {
        id: Date.now(),
        x: Math.random() * Math.max(0, maxX),
        y: Math.random() * Math.max(0, maxY),
      };

      setBubbles((prev) => [...prev, newBubble]);

      setTimeout(() => {
        setBubbles((prev) => prev.filter((b) => b.id !== newBubble.id));
      }, 3000);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  const popBubble = (id: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {
        // Ignore audio play errors
      });
    }
    setBubbles((prev) => prev.filter((b) => b.id !== id));
  };

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-primary">
          🎮 Relax Mode
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">Tap bubbles 🌸</p>
        <div
          ref={gameAreaRef}
          className="relative h-[200px] md:h-[250px] bg-game-area rounded-lg overflow-hidden"
        >
          {bubbles.map((bubble) => (
            <div
              key={bubble.id}
              onClick={() => popBubble(bubble.id)}
              className="absolute w-10 h-10 bg-bubble rounded-full cursor-pointer transition-transform hover:scale-110 animate-in fade-in zoom-in duration-300"
              style={{
                left: `${bubble.x}px`,
                top: `${bubble.y}px`,
              }}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
