
"use client";

import { useState } from 'react';
import Image from "next/image";
import { PaymentCard } from "@/components/payment-card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Wallet, Landmark, Phone, Building2 } from "lucide-react";

type ViewState = 'main' | 'wallets' | 'banks' | 'detail';

interface PaymentMethod {
  id: string;
  title: string;
  subtitle: string;
  accountNumber: string;
  qrUrl: string;
  bankName?: string;
  accountType?: string;
}

export default function Home() {
  const [view, setView] = useState<ViewState>('main');
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod | null>(null);

  const getPlaceholder = (id: string) => 
    PlaceHolderImages.find((img) => img.id === id)?.imageUrl || "/qr-pago.png";

  const walletMethods: PaymentMethod[] = [
    {
      id: 'nequi',
      title: 'Nequi',
      subtitle: 'Escanea para pagar con Nequi',
      accountNumber: '3114970176',
      qrUrl: getPlaceholder("qr-nequi"),
    },
    {
      id: 'daviplata',
      title: 'Daviplata',
      subtitle: 'Escanea para pagar con Daviplata',
      accountNumber: '3114970176',
      qrUrl: getPlaceholder("qr-daviplata"),
    }
  ];

  const bankMethods: PaymentMethod[] = [
    {
      id: 'bancolombia',
      title: 'Bancolombia',
      subtitle: 'Transferencia a Bancolombia',
      bankName: 'Bancolombia',
      accountType: 'Ahorros',
      accountNumber: '123-456789-01',
      qrUrl: getPlaceholder("qr-bank-elizabeth"),
    },
    {
      id: 'davivienda',
      title: 'Davivienda',
      subtitle: 'Transferencia a Davivienda',
      bankName: 'Davivienda',
      accountType: 'Ahorros',
      accountNumber: '987-654321-09',
      qrUrl: getPlaceholder("qr-bank-cesar"),
    }
  ];

  const handleSelectMethod = (method: PaymentMethod) => {
    setSelectedMethod(method);
    setView('detail');
  };

  const handleBack = () => {
    if (view === 'detail') {
      const isWallet = walletMethods.some(m => m.id === selectedMethod?.id);
      setView(isWallet ? 'wallets' : 'banks');
      setSelectedMethod(null);
    } else {
      setView('main');
    }
  };

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

      {/* Navigation and Title */}
      {view !== 'main' && (
        <div className="w-full max-w-2xl mb-8 flex items-center gap-4 fade-in">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={handleBack} 
            className="rounded-full h-12 w-12 border-gray-200 shadow-sm shrink-0"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <div>
            <h2 className="text-2xl font-bold text-foreground">
              {view === 'wallets' && 'Billeteras Digitales'}
              {view === 'banks' && 'Cuentas Bancarias'}
              {view === 'detail' && selectedMethod?.title}
            </h2>
            <p className="text-sm text-muted-foreground">
              {view === 'detail' ? 'Escanea o copia el número' : 'Selecciona una opción'}
            </p>
          </div>
        </div>
      )}

      {/* Content Switching Area */}
      <div className="w-full max-w-2xl">
        {/* VIEW: MAIN MENU */}
        {view === 'main' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 fade-in">
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

        {/* VIEW: WALLET SUB-SELECTION */}
        {view === 'wallets' && (
          <div className="grid grid-cols-1 gap-4 fade-in">
            {walletMethods.map((method) => (
              <Card 
                key={method.id}
                className="p-6 flex items-center justify-between hover:shadow-lg transition-all cursor-pointer border-2 hover:border-primary/50 group bg-white rounded-2xl"
                onClick={() => handleSelectMethod(method)}
              >
                <div className="flex items-center gap-6">
                  <div className="p-4 rounded-full bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <Phone size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{method.title}</h3>
                    <p className="text-sm text-muted-foreground">Pagar con {method.title}</p>
                  </div>
                </div>
                <div className="text-primary font-bold flex items-center gap-2">
                  Ver QR <span className="text-2xl">›</span>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* VIEW: BANK SUB-SELECTION */}
        {view === 'banks' && (
          <div className="grid grid-cols-1 gap-4 fade-in">
            {bankMethods.map((method) => (
              <Card 
                key={method.id}
                className="p-6 flex items-center justify-between hover:shadow-lg transition-all cursor-pointer border-2 hover:border-primary/50 group bg-white rounded-2xl"
                onClick={() => handleSelectMethod(method)}
              >
                <div className="flex items-center gap-6">
                  <div className="p-4 rounded-full bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <Building2 size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{method.title}</h3>
                    <p className="text-sm text-muted-foreground">{method.bankName} - {method.accountType}</p>
                  </div>
                </div>
                <div className="text-primary font-bold flex items-center gap-2">
                  Ver Info <span className="text-2xl">›</span>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* VIEW: INDEPENDENT PAYMENT DETAIL */}
        {view === 'detail' && selectedMethod && (
          <div className="fade-in space-y-6">
            <PaymentCard
              title={selectedMethod.title}
              subtitle={selectedMethod.subtitle}
              accountNumber={selectedMethod.accountNumber}
              qrUrl={selectedMethod.qrUrl}
              bankName={selectedMethod.bankName}
              accountType={selectedMethod.accountType}
              className="w-full shadow-2xl border-2 border-primary/10 p-8"
            />
            
            <div className="bg-primary/5 border border-primary/10 p-6 rounded-2xl text-center">
              <p className="text-sm text-primary font-semibold">
                IMPORTANTE: Una vez realizado el pago, envía el comprobante por WhatsApp para validar tu transacción.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center text-muted-foreground opacity-50 text-sm fade-in" style={{ animationDelay: '0.6s' }}>
        <p>© {new Date().getFullYear()} Touch Center Payment Hub</p>
        <p className="mt-1">Punto de pago autorizado</p>
      </footer>
    </main>
  );
}
