
"use client";

import { useState } from 'react';
import Image from "next/image";
import { PaymentCard } from "@/components/payment-card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Wallet, Landmark } from "lucide-react";

export default function Home() {
  const [view, setView] = useState<'menu' | 'wallets' | 'banks'>('menu');

  const getPlaceholder = (id: string) => 
    PlaceHolderImages.find((img) => img.id === id)?.imageUrl || "/qr-pago.png";

  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-start p-6 md:p-12">
      {/* Header Section */}
      <header className="w-full max-w-4xl text-center mb-12 space-y-4 fade-in">
        <div className="flex justify-center mb-6">
          <div className="relative w-72 h-32">
            <Image
              src={getPlaceholder("logo")}
              alt="Touch Center Logo"
              fill
              className="object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)]"
              priority
              data-ai-hint="company logo"
            />
          </div>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Touch Center
        </h1>
        <p className="text-xl text-muted-foreground font-light">
          Punto de Pago Seguro
        </p>
      </header>

      {/* Main Menu View */}
      {view === 'menu' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl fade-in">
          <Card 
            className="p-8 flex flex-col items-center justify-center gap-6 hover:shadow-2xl transition-all cursor-pointer border-2 hover:border-primary/50 group bg-white rounded-3xl"
            onClick={() => setView('wallets')}
          >
            <div className="p-5 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <Wallet size={56} strokeWidth={1.5} />
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-foreground">Billeteras</h2>
              <p className="text-muted-foreground mt-1">Nequi y Daviplata</p>
            </div>
          </Card>

          <Card 
            className="p-8 flex flex-col items-center justify-center gap-6 hover:shadow-2xl transition-all cursor-pointer border-2 hover:border-primary/50 group bg-white rounded-3xl"
            onClick={() => setView('banks')}
          >
            <div className="p-5 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <Landmark size={56} strokeWidth={1.5} />
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-foreground">Bancos</h2>
              <p className="text-muted-foreground mt-1">Transferencias Directas</p>
            </div>
          </Card>
        </div>
      )}

      {/* Payment List View */}
      {view !== 'menu' && (
        <div className="w-full max-w-3xl space-y-6 fade-in">
          <div className="flex items-center gap-4 mb-6">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => setView('menu')} 
              className="rounded-full h-12 w-12 border-gray-200 shadow-sm"
            >
              <ArrowLeft className="h-6 w-6" />
            </Button>
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                {view === 'wallets' ? 'Billeteras Digitales' : 'Cuentas Bancarias'}
              </h2>
              <p className="text-sm text-muted-foreground">Selecciona tu método de preferencia</p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {view === 'wallets' ? (
              <>
                <PaymentCard
                  title="Nequi"
                  subtitle="Escanea para pagar"
                  accountNumber="3114970176"
                  qrUrl={getPlaceholder("qr-nequi")}
                  delay="0.1s"
                />
                <PaymentCard
                  title="Daviplata"
                  subtitle="Escanea para pagar"
                  accountNumber="3114970176"
                  qrUrl={getPlaceholder("qr-daviplata")}
                  delay="0.2s"
                />
              </>
            ) : (
              <>
                <PaymentCard
                  title="Bancolombia"
                  subtitle="Touch Center"
                  bankName="Bancolombia"
                  accountType="Ahorros"
                  accountNumber="123-456789-01"
                  qrUrl={getPlaceholder("qr-bank-elizabeth")}
                  delay="0.1s"
                />
                <PaymentCard
                  title="Davivienda"
                  subtitle="Touch Center"
                  bankName="Davivienda"
                  accountType="Ahorros"
                  accountNumber="987-654321-09"
                  qrUrl={getPlaceholder("qr-bank-cesar")}
                  delay="0.2s"
                />
              </>
            )}
          </div>
        </div>
      )}

      {/* Footer Info */}
      <footer className="mt-16 text-center text-muted-foreground opacity-50 text-sm fade-in" style={{ animationDelay: '0.6s' }}>
        <p>© {new Date().getFullYear()} Touch Center Payment Hub</p>
        <p className="mt-1">Punto de pago autorizado</p>
      </footer>
    </main>
  );
}
