import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Save } from 'lucide-react';

const NOTES_STORAGE_KEY = 'selfcare-notes';

export default function NotesCard() {
  const [note, setNote] = useState('');
  const [savedMessage, setSavedMessage] = useState('');

  useEffect(() => {
    const savedNote = localStorage.getItem(NOTES_STORAGE_KEY);
    if (savedNote) {
      setNote(savedNote);
    }
  }, []);

  const saveNote = () => {
    localStorage.setItem(NOTES_STORAGE_KEY, note);
    setSavedMessage('Saved 💕');
    setTimeout(() => setSavedMessage(''), 2000);
  };

  return (
    <Card className="shadow-lg bg-white dark:bg-gray-800">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-pink-600 dark:text-pink-400">
          📖 Notes
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Textarea
          placeholder="Write your feelings…"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="min-h-[120px] resize-none bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
        />
        <div className="flex items-center justify-between">
          <Button onClick={saveNote} className="gap-2 bg-pink-500 hover:bg-pink-600 text-white">
            <Save className="h-4 w-4" />
            Save
          </Button>
          {savedMessage && (
            <span className="text-sm text-pink-600 dark:text-pink-400 font-medium animate-in fade-in">
              {savedMessage}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
