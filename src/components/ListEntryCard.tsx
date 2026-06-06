import React from 'react';
import { Card } from "@/components/ui/card";

interface ListEntryCardProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  onClick: () => void;
}

export const ListEntryCard: React.FC<ListEntryCardProps> = ({ title, subtitle, icon, onClick }) => {
  return (
    <Card
      className="p-4 sm:p-6 flex items-center justify-between hover:shadow-xl transition-all duration-300 cursor-pointer border-muted bg-card rounded-3xl group"
      onClick={onClick}
    >
      <div className="flex items-center gap-4 sm:gap-6">
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-muted flex items-center justify-center text-muted-foreground/50 group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-sm">
          {icon}
        </div>
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-foreground/80 group-hover:text-foreground transition-colors">{title}</h3>
          <p className="text-xs sm:text-sm text-muted-foreground font-semibold">{subtitle}</p>
        </div>
      </div>
      <div className="text-muted-foreground/30 font-black text-2xl sm:text-3xl group-hover:text-accent group-hover:translate-x-1 transition-all mr-2">
        ›
      </div>
    </Card>
  );
};
