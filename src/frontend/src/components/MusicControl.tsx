import { Button } from '@/components/ui/button';
import { useAmbientMusic } from '@/hooks/useAmbientMusic';
import { Music, Pause, Volume2, VolumeX } from 'lucide-react';

export default function MusicControl() {
  const { isPlaying, isMuted, togglePlay, toggleMute } = useAmbientMusic();

  return (
    <div className="flex gap-2">
      <Button
        onClick={togglePlay}
        variant="outline"
        size="icon"
        className="shrink-0"
        title={isPlaying ? 'Pause music' : 'Play music'}
      >
        {isPlaying ? (
          <Pause className="h-4 w-4" />
        ) : (
          <Music className="h-4 w-4" />
        )}
      </Button>
      <Button
        onClick={toggleMute}
        variant="outline"
        size="icon"
        className="shrink-0"
        title={isMuted ? 'Unmute' : 'Mute'}
      >
        {isMuted ? (
          <VolumeX className="h-4 w-4" />
        ) : (
          <Volume2 className="h-4 w-4" />
        )}
      </Button>
    </div>
  );
}
