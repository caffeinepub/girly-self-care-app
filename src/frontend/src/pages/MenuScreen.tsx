import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface MenuScreenProps {
  onNavigate: (screen: 'todo' | 'reminder' | 'notes' | 'relax' | 'quote') => void;
}

export default function MenuScreen({ onNavigate }: MenuScreenProps) {
  return (
    <div className="section-padding flex items-center justify-center px-4">
      <Card className="max-w-md w-full shadow-2xl">
        <CardContent className="pt-12 pb-8 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-pink-600 dark:text-pink-400 mb-8">
            What do you want today? 💖
          </h2>
          <div className="space-y-3">
            <Button 
              onClick={() => onNavigate('todo')} 
              size="lg" 
              className="w-full text-lg bg-pink-500 hover:bg-pink-600 text-white"
            >
              📝 To-Do List
            </Button>
            <Button 
              onClick={() => onNavigate('reminder')} 
              size="lg" 
              className="w-full text-lg bg-pink-500 hover:bg-pink-600 text-white"
            >
              ⏰ Self Reminder
            </Button>
            <Button 
              onClick={() => onNavigate('notes')} 
              size="lg" 
              className="w-full text-lg bg-pink-500 hover:bg-pink-600 text-white"
            >
              📖 Notes
            </Button>
            <Button 
              onClick={() => onNavigate('relax')} 
              size="lg" 
              className="w-full text-lg bg-pink-500 hover:bg-pink-600 text-white"
            >
              🎮 Relax Yourself
            </Button>
            <Button 
              onClick={() => onNavigate('quote')} 
              size="lg" 
              className="w-full text-lg bg-pink-500 hover:bg-pink-600 text-white"
            >
              ✨ Daily Quote
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
