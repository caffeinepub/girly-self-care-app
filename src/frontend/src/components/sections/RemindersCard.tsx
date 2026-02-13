import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Droplets, Sparkles, Heart, Activity } from 'lucide-react';

export default function RemindersCard() {
  const [notificationStatus, setNotificationStatus] = useState<
    'unknown' | 'granted' | 'denied' | 'unsupported'
  >('unknown');

  useEffect(() => {
    if (!('Notification' in window)) {
      setNotificationStatus('unsupported');
    } else {
      setNotificationStatus(
        Notification.permission === 'granted'
          ? 'granted'
          : Notification.permission === 'denied'
          ? 'denied'
          : 'unknown'
      );
    }
  }, []);

  const requestPermission = async () => {
    if ('Notification' in window && Notification.permission === 'default') {
      const permission = await Notification.requestPermission();
      setNotificationStatus(permission === 'granted' ? 'granted' : 'denied');
    }
  };

  const notify = (message: string) => {
    if (notificationStatus === 'granted') {
      new Notification(message);
    } else if (notificationStatus === 'unknown') {
      requestPermission();
    } else {
      alert(message);
    }
  };

  const reminders = [
    { icon: Droplets, label: '💧 Water', message: 'Drink Water 💧', color: 'text-blue-500' },
    { icon: Sparkles, label: '🧴 Hair', message: 'Wash Hair 🧴', color: 'text-purple-500' },
    { icon: Activity, label: '🧘‍♀️ Exercise', message: 'Exercise Time 🧘‍♀️', color: 'text-green-500' },
    { icon: Heart, label: '💖 Self Care', message: 'Self Love 💖', color: 'text-pink-500' },
  ];

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-primary">
          ⏰ Self-Care Reminders
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {notificationStatus === 'unsupported' && (
          <Alert>
            <AlertDescription>
              Notifications are not supported in your browser. Reminders will use alerts instead.
            </AlertDescription>
          </Alert>
        )}

        {notificationStatus === 'denied' && (
          <Alert>
            <AlertDescription>
              Notifications are blocked. Reminders will use alerts instead.
            </AlertDescription>
          </Alert>
        )}

        <div className="grid grid-cols-2 gap-3">
          {reminders.map((reminder) => (
            <Button
              key={reminder.label}
              onClick={() => notify(reminder.message)}
              variant="outline"
              className="h-auto py-4 flex flex-col gap-2 hover:bg-accent"
            >
              <reminder.icon className={`h-6 w-6 ${reminder.color}`} />
              <span className="text-sm">{reminder.label}</span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
