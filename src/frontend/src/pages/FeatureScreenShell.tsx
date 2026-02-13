import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { ReactNode } from 'react';

interface FeatureScreenShellProps {
  title: string;
  onBack: () => void;
  children: ReactNode;
}

export default function FeatureScreenShell({ title, onBack, children }: FeatureScreenShellProps) {
  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <Button onClick={onBack} variant="outline" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center" style={{ fontFamily: 'Pacifico, cursive' }}>
          {title}
        </h2>
        <div className="space-y-6">
          {children}
        </div>
      </div>
    </div>
  );
}
