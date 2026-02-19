
"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
        "border-none shadow-lg rounded-2xl overflow-hidden fade-in bg-white",
        className
      )}
      style={{ animationDelay: delay }}
    >
      <CardHeader className="pb-2 space-y-1">
        <CardTitle className="text-xl font-semibold tracking-tight text-foreground">
          {title}
        </CardTitle>
        {subtitle && (
          <p className="text-sm text-muted-foreground font-medium">{subtitle}</p>
        )}
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="relative aspect-square w-full max-w-[240px] mx-auto bg-gray-50 rounded-xl border-2 border-dashed border-gray-200 flex items-center justify-center p-2 group transition-all">
          <Image
            src={qrUrl}
            alt={`${title} QR Code`}
            width={400}
            height={400}
            className="rounded-lg object-contain w-full h-full drop-shadow-md"
            data-ai-hint="qr code"
          />
        </div>
        
        <div className="space-y-3 bg-gray-50 p-4 rounded-xl">
          {bankName && (
            <div className="flex justify-between items-center text-sm border-b border-gray-200 pb-2">
              <span className="text-muted-foreground">Banco</span>
              <span className="font-semibold">{bankName}</span>
            </div>
          )}
          {accountType && (
            <div className="flex justify-between items-center text-sm border-b border-gray-200 pb-2">
              <span className="text-muted-foreground">Tipo</span>
              <span className="font-semibold">{accountType}</span>
            </div>
          )}
          <div className="flex flex-col space-y-2 pt-1">
            <span className="text-xs uppercase tracking-wider text-muted-foreground font-bold">Número de Cuenta / Celular</span>
            <div className="flex items-center justify-between">
              <span className="text-lg font-mono font-bold tracking-tight">{accountNumber}</span>
              <CopyButton value={accountNumber} />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
