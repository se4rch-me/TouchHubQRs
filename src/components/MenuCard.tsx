import React from 'react';
import { Card } from "@/components/ui/card";

interface MenuCardProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  onClick: () => void;
  className?: string;
}

export const MenuCard: React.FC<MenuCardProps> = ({ title, subtitle, icon, onClick, className }) => {
  return (
    <Card
      className={`p-6 sm:p-10 flex flex-col items-center justify-center gap-4 sm:gap-6 hover:shadow-2xl transition-all duration-300 cursor-pointer border-muted bg-card rounded-[2.5rem] group ${className}`}
      onClick={onClick}
    >
      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-muted flex items-center justify-center text-muted-foreground/50 group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-sm">
        {icon}
      </div>
      <div className="text-center">
        <h2 className="text-xl sm:text-2xl font-bold text-foreground/80 group-hover:text-foreground transition-colors">{title}</h2>
        <p className="text-xs sm:text-sm text-muted-foreground mt-1 font-semibold">{subtitle}</p>
      </div>
    </Card>
  );
};
