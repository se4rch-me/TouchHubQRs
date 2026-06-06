"use client";

import { useState, useEffect } from 'react';
import Image from "next/image";
import { PaymentCard } from "@/components/payment-card";
import { Button } from "@/components/ui/button";
import { MenuCard } from "@/components/MenuCard";
import { ListEntryCard } from "@/components/ListEntryCard";
import { 
  ItemEntry, 
  walletMethods, 
  bankMethods, 
  socialMethods, 
  helpDeskMethods, 
  wifiMethod, 
  rateMethod 
} from "@/data/methods";
import {
  ArrowLeft,
  Wallet,
  Landmark,
  Phone,
  Building2,
  Share2,
  Star,
  Wifi,
  Instagram,
  Facebook,
  MessageCircle,
  Headphones
} from "lucide-react";

type ViewState = 'main' | 'wallets' | 'banks' | 'social' | 'rate' | 'wifi' | 'help-desk' | 'detail';

export default function Home() {
  const [view, setView] = useState<ViewState>('main');
  const [selectedItem, setSelectedItem] = useState<ItemEntry | null>(null);
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const handleSelectItem = (item: ItemEntry) => {
    setSelectedItem(item);
    setView('detail');
  };

  const handleBack = () => {
    if (view === 'detail' && selectedItem) {
      if (selectedItem.type === 'payment') {
        const isWallet = walletMethods.some(m => m.id === selectedItem.id);
        setView(isWallet ? 'wallets' : 'banks');
      } else if (selectedItem.type === 'social') {
        setView('social');
      } else if (selectedItem.type === 'help-desk') {
        setView('main');
      } else {
        setView('main');
      }
      setSelectedItem(null);
    } else {
      setView('main');
    }
  };

  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-start p-4 md:p-12 text-foreground">
      <header className="w-full max-w-4xl text-center mb-10 fade-in">
        <div className="flex justify-center">
          <div className="relative w-64 h-32 sm:w-80 sm:h-40">
            <Image
              src="logo.png"
              alt="Touch Center Logo"
              fill
              className="object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.15)]"
              priority
            />
          </div>
        </div>
      </header>

      {view !== 'main' && (
        <div className="w-full max-w-2xl mb-8 flex items-center gap-4 fade-in px-2">
          <Button
            variant="outline"
            size="icon"
            onClick={handleBack}
            className="rounded-full h-10 w-10 sm:h-12 sm:w-12 border-muted shadow-sm shrink-0 bg-card hover:bg-muted"
          >
            <ArrowLeft className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground" />
          </Button>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-foreground/90 leading-tight">
              {view === 'wallets' && 'Billeteras Digitales'}
              {view === 'banks' && 'Cuentas Bancarias'}
              {view === 'social' && 'Nuestras Redes'}
              {view === 'help-desk' && 'Mesa de Ayuda'}
              {view === 'detail' && selectedItem?.title}
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground font-medium">
              {view === 'detail' ? 'Escanea el código QR' : 'Selecciona una opción'}
            </p>
          </div>
        </div>
      )}

      <div className="w-full max-w-2xl">
        {view === 'main' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 fade-in px-2">
            <MenuCard
              title="Billeteras"
              subtitle="Nequi y Daviplata"
              icon={<Wallet size={40} />}
              onClick={() => setView('wallets')}
            />
            <MenuCard
              title="Bancos"
              subtitle="Transferencias"
              icon={<Landmark size={40} />}
              onClick={() => setView('banks')}
            />
            <MenuCard
              title="Redes Sociales"
              subtitle="Contáctanos"
              icon={<Share2 size={40} />}
              onClick={() => setView('social')}
            />
            <MenuCard
              title="Calificarnos"
              subtitle="Danos 5 estrellas"
              icon={<Star size={40} />}
              onClick={() => handleSelectItem(rateMethod)}
            />
            <MenuCard
              title="Ingreso"
              subtitle="Mesa de Ayuda"
              icon={<Headphones size={40} />}
              className="sm:col-span-2"
              onClick={() => handleSelectItem(helpDeskMethods[0])}
            />
            <MenuCard
              title="Conectar WiFi"
              subtitle="Internet gratis"
              icon={<Wifi size={40} />}
              className="sm:col-span-2"
              onClick={() => handleSelectItem(wifiMethod)}
            />
          </div>
        )}

        {(view === 'wallets' || view === 'banks' || view === 'social') && (
          <div className="grid grid-cols-1 gap-4 fade-in px-2">
            {view === 'wallets' && walletMethods.map((m) => (
              <ListEntryCard key={m.id} title={m.title} subtitle={m.subtitle} icon={<Phone size={28} />} onClick={() => handleSelectItem(m)} />
            ))}
            {view === 'banks' && bankMethods.map((m) => (
              <ListEntryCard key={m.id} title={m.title} subtitle={m.subtitle} icon={<Building2 size={28} />} onClick={() => handleSelectItem(m)} />
            ))}
            {view === 'social' && socialMethods.map((m) => (
              <ListEntryCard
                key={m.id}
                title={m.title}
                subtitle={m.subtitle}
                icon={
                  m.id === 'instagram' ? <Instagram size={28} /> :
                    m.id === 'facebook' ? <Facebook size={28} /> :
                      <MessageCircle size={28} />
                }
                onClick={() => handleSelectItem(m)}
              />
            ))}
          </div>
        )}

        {view === 'detail' && selectedItem && (
          <div className="fade-in space-y-8 px-2">
            <PaymentCard
              title={selectedItem.title}
              subtitle={selectedItem.subtitle}
              accountNumber={selectedItem.accountNumber || selectedItem.infoLabel || ''}
              accountLabel={selectedItem.accountLabel}
              qrUrl={selectedItem.qrUrl}
              bankName={selectedItem.bankName}
              accountType={selectedItem.accountType}
              actionUrl={selectedItem.redirectUrl}
              actionLabel={selectedItem.type === 'help-desk' ? 'Abrir' : 'Ir'}
              className="w-full"
            />
            <div className="bg-muted/40 border border-muted p-6 rounded-[2rem] text-center shadow-sm">
              <p className="text-sm sm:text-base text-muted-foreground font-semibold">
                {selectedItem.type === 'payment' && "Envía el comprobante por WhatsApp para validar tu pago."}
                {selectedItem.type === 'social' && "¡Síguenos y entérate de nuestras promociones!"}
                {selectedItem.type === 'rate' && "Tu opinión nos ayuda a brindarte un mejor servicio."}
                {selectedItem.type === 'wifi' && "Solicita ayuda si tienes inconvenientes al conectar."}
                {selectedItem.type === 'help-desk' && "Escanea el código QR o haz clic en Abrir para registrar tu dispositivo."}
              </p>
            </div>
          </div>
        )}
      </div>

      <footer className="mt-16 text-center text-muted-foreground/60 text-xs sm:text-sm fade-in" style={{ animationDelay: '0.4s' }}>
        <p>© {currentYear ?? '2025'} Touch Center Hub • Servicios y Pagos</p>
      </footer>
    </main>
  );
}
