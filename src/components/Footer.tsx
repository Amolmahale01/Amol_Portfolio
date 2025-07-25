import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t bg-background">
      <div className="container mx-auto text-center">
        <p className="text-muted-foreground flex items-center justify-center space-x-1">
          <span>Made by Amol Mahale.</span>
          <Heart className="w-4 h-4 text-red-500 fill-current" />
        </p>
      </div>
    </footer>
  );
};

export default Footer;