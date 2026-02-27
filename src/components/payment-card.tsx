"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { CopyButton } from "@/components/copy-button";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface PaymentCardProps {
  title: string;
  subtitle?: string;
  accountNumber: string;
  accountLabel?: string;
  qrUrl: string;
  bankName?: string;
  accountType?: string;
  delay?: string;
  className?: string;
  actionUrl?: string;
  actionLabel?: string;
}

export function PaymentCard({
  title,
  subtitle,
  accountNumber,
  accountLabel = "Número de Cuenta",
  qrUrl,
  bankName,
  accountType,
  delay = "0s",
  className,
  actionUrl,
  actionLabel = "Ir",
}: PaymentCardProps) {
  return (
    <Card 
      className={cn(
        "border-none shadow-2xl rounded-[2.5rem] overflow-hidden fade-in bg-card flex flex-col items-center p-6 sm:p-12 gap-8 sm:gap-10",
        className
      )}
      style={{ animationDelay: delay }}
    >
      {/* QR Section - significantly larger for better scanning */}
      <div className="relative shrink-0 w-full max-w-[300px] aspect-square sm:max-w-[400px] bg-white rounded-3xl border-2 border-dashed border-primary/20 flex items-center justify-center p-4 shadow-inner">
        <Image
          src={qrUrl}
          alt={`${title} QR Code`}
          width={500}
          height={500}
          className="rounded-xl object-contain w-full h-full"
          data-ai-hint="qr code"
          priority
        />
      </div>
      
      {/* Info Section */}
      <div className="w-full space-y-6 text-center">
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            {title}
          </h3>
          {subtitle && (
            <p className="text-base sm:text-lg text-muted-foreground font-medium mt-1">{subtitle}</p>
          )}
        </div>

        <div className="grid grid-cols-1 gap-3 sm:gap-4 bg-background/50 p-4 sm:p-6 rounded-[2rem] border border-muted shadow-sm">
          {bankName && (
            <div className="flex justify-between items-center text-base border-b border-muted/50 pb-3">
              <span className="text-muted-foreground font-medium">Banco</span>
              <span className="font-bold text-foreground">{bankName}</span>
            </div>
          )}
          {accountType && (
            <div className="flex justify-between items-center text-base border-b border-muted/50 pb-3">
              <span className="text-muted-foreground font-medium">Tipo</span>
              <span className="font-bold text-foreground">{accountType}</span>
            </div>
          )}
          <div className="flex flex-col space-y-2 pt-2 text-left">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-muted-foreground font-black px-1">{accountLabel}</span>
            <div className="flex items-center justify-between gap-3 bg-card/80 p-3 sm:p-4 rounded-2xl border border-muted/30 overflow-hidden">
              <div className="flex-1 min-w-0">
                <span className="text-lg sm:text-2xl font-mono font-black tracking-tighter text-foreground break-words block">
                  {accountNumber}
                </span>
              </div>
              {actionUrl ? (
                <Button 
                  onClick={() => window.open(actionUrl, '_blank')}
                  className="shrink-0 h-8 px-4 rounded-full bg-accent text-accent-foreground hover:bg-accent/90 gap-2"
                >
                  <ExternalLink className="h-3 w-3" />
                  <span className="text-xs font-medium">{actionLabel}</span>
                </Button>
              ) : (
                <CopyButton value={accountNumber} className="shrink-0" />
              )}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}