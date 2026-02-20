import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RefreshCw } from 'lucide-react';

const quotes = [
  "You are stronger than you think 💪",
  "Believe in yourself and magic will happen ✨",
  "Every day is a fresh start 🌸",
  "You deserve all the good things 💖",
  "Your smile can change the world 😊",
  "Be your own kind of beautiful 🌺",
  "You are enough, just as you are 💕",
  "Dream big, sparkle more, shine bright ⭐",
  "Self-care isn't selfish, it's essential 🌷",
  "You are capable of amazing things 🦋"
];

export default function DailyQuoteCard() {
  const [currentQuote, setCurrentQuote] = useState('');

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  };

  useEffect(() => {
    getRandomQuote();
  }, []);

  return (
    <Card className="shadow-lg bg-white dark:bg-gray-800">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-pink-600 dark:text-pink-400">
          ✨ Daily Quote
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-pink-100 dark:bg-pink-900/30 rounded-lg p-6 min-h-[120px] flex items-center justify-center">
          <p className="text-lg md:text-xl text-center text-gray-800 dark:text-gray-200 font-medium">
            {currentQuote}
          </p>
        </div>
        <div className="flex justify-center">
          <Button 
            onClick={getRandomQuote} 
            className="gap-2 bg-pink-500 hover:bg-pink-600 text-white"
          >
            <RefreshCw className="h-4 w-4" />
            New Quote
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
