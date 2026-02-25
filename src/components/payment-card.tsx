"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { CopyButton } from "@/components/copy-button";
import { cn } from "@/lib/utils";

interface PaymentCardProps {
  title: string;
  subtitle?: string;
  accountNumber: string;
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
  qrUrl,
  bankName,
  accountType,
  delay = "0s",
  className,
}: PaymentCardProps) {
  return (
    <Card 
      className={cn(
        "border-none shadow-lg rounded-2xl overflow-hidden fade-in bg-card flex flex-col sm:flex-row items-center p-6 gap-6",
        className
      )}
      style={{ animationDelay: delay }}
    >
      {/* QR Section */}
      <div className="relative shrink-0 w-32 h-32 sm:w-40 sm:h-40 bg-white/5 rounded-xl border-2 border-dashed border-primary/20 flex items-center justify-center p-1">
        <Image
          src={qrUrl}
          alt={`${title} QR Code`}
          width={200}
          height={200}
          className="rounded-lg object-contain w-full h-full drop-shadow-md"
          data-ai-hint="qr code"
        />
      </div>
      
      {/* Info Section */}
      <div className="flex-1 w-full space-y-4 text-left">
        <div>
          <h3 className="text-xl font-bold tracking-tight text-foreground">
            {title}
          </h3>
          {subtitle && (
            <p className="text-sm text-muted-foreground font-medium">{subtitle}</p>
          )}
        </div>

        <div className="grid grid-cols-1 gap-2 bg-background/50 p-4 rounded-xl border border-muted">
          {bankName && (
            <div className="flex justify-between items-center text-sm border-b border-muted/50 pb-2">
              <span className="text-muted-foreground">Banco</span>
              <span className="font-semibold">{bankName}</span>
            </div>
          )}
          {accountType && (
            <div className="flex justify-between items-center text-sm border-b border-muted/50 pb-2">
              <span className="text-muted-foreground">Tipo</span>
              <span className="font-semibold">{accountType}</span>
            </div>
          )}
          <div className="flex flex-col space-y-1 pt-1">
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">Número de Cuenta / Celular</span>
            <div className="flex items-center justify-between">
              <span className="text-lg font-mono font-bold tracking-tighter text-foreground">{accountNumber}</span>
              <CopyButton value={accountNumber} />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}