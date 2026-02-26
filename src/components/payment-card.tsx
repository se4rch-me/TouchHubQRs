
"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { CopyButton } from "@/components/copy-button";
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
}: PaymentCardProps) {
  return (
    <Card 
      className={cn(
        "border-none shadow-2xl rounded-[2.5rem] overflow-hidden fade-in bg-card flex flex-col items-center p-8 sm:p-12 gap-10",
        className
      )}
      style={{ animationDelay: delay }}
    >
      {/* QR Section - significantly larger for better scanning */}
      <div className="relative shrink-0 w-full max-w-[320px] aspect-square sm:max-w-[400px] bg-white rounded-3xl border-2 border-dashed border-primary/20 flex items-center justify-center p-4 shadow-inner">
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
          <h3 className="text-3xl font-bold tracking-tight text-foreground">
            {title}
          </h3>
          {subtitle && (
            <p className="text-lg text-muted-foreground font-medium mt-1">{subtitle}</p>
          )}
        </div>

        <div className="grid grid-cols-1 gap-4 bg-background/50 p-6 rounded-[2rem] border border-muted shadow-sm">
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
          <div className="flex flex-col space-y-2 pt-2">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-black">{accountLabel}</span>
            <div className="flex items-center justify-between gap-4 bg-card/80 p-4 rounded-2xl border border-muted/30">
              <span className="text-2xl font-mono font-black tracking-tighter text-foreground break-all text-left flex-1">{accountNumber}</span>
              <CopyButton value={accountNumber} />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
