import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface MenuScreenProps {
  onNavigate: (screen: 'todo' | 'reminder' | 'notes' | 'relax') => void;
}

export default function MenuScreen({ onNavigate }: MenuScreenProps) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <Card className="max-w-md w-full shadow-2xl">
        <CardContent className="pt-12 pb-8 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8" style={{ fontFamily: 'Pacifico, cursive' }}>
            What do you want today? 💖
          </h2>
          <div className="space-y-3">
            <Button 
              onClick={() => onNavigate('todo')} 
              size="lg" 
              className="w-full text-lg"
            >
              📝 To-Do List
            </Button>
            <Button 
              onClick={() => onNavigate('reminder')} 
              size="lg" 
              className="w-full text-lg"
            >
              ⏰ Self Reminder
            </Button>
            <Button 
              onClick={() => onNavigate('notes')} 
              size="lg" 
              className="w-full text-lg"
            >
              📖 Notes
            </Button>
            <Button 
              onClick={() => onNavigate('relax')} 
              size="lg" 
              className="w-full text-lg"
            >
              🎮 Relax Yourself
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
