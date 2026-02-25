"use client";

import { useState } from 'react';
import Image from "next/image";
import { PaymentCard } from "@/components/payment-card";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
  MessageCircle 
} from "lucide-react";

type ViewState = 'main' | 'wallets' | 'banks' | 'social' | 'rate' | 'wifi' | 'detail';

interface ItemEntry {
  id: string;
  title: string;
  subtitle: string;
  accountNumber?: string;
  qrUrl: string;
  bankName?: string;
  accountType?: string;
  type: 'payment' | 'social' | 'wifi' | 'rate';
  infoLabel?: string;
}

export default function Home() {
  const [view, setView] = useState<ViewState>('main');
  const [selectedItem, setSelectedItem] = useState<ItemEntry | null>(null);

  const walletMethods: ItemEntry[] = [
    {
      id: 'nequi',
      title: 'Nequi',
      subtitle: 'Escanea para pagar con Nequi',
      accountNumber: '3114970176',
      qrUrl: "/qr-pago.png",
      type: 'payment'
    },
    {
      id: 'daviplata',
      title: 'Daviplata',
      subtitle: 'Escanea para pagar con Daviplata',
      accountNumber: '3114970176',
      qrUrl: "/qr-pago.png",
      type: 'payment'
    }
  ];

  const bankMethods: ItemEntry[] = [
    {
      id: 'bancolombia',
      title: 'Bancolombia',
      subtitle: 'Transferencia a Bancolombia',
      bankName: 'Bancolombia',
      accountType: 'Ahorros',
      accountNumber: '123-456789-01',
      qrUrl: "/qr-pago.png",
      type: 'payment'
    },
    {
      id: 'davivienda',
      title: 'Davivienda',
      subtitle: 'Transferencia a Davivienda',
      bankName: 'Davivienda',
      accountType: 'Ahorros',
      accountNumber: '987-654321-09',
      qrUrl: "/qr-pago.png",
      type: 'payment'
    }
  ];

  const socialMethods: ItemEntry[] = [
    {
      id: 'instagram',
      title: 'Instagram',
      subtitle: 'Síguenos en Instagram',
      infoLabel: '@touchcenter',
      qrUrl: "/qr-pago.png",
      type: 'social'
    },
    {
      id: 'facebook',
      title: 'Facebook',
      subtitle: 'Visita nuestro perfil',
      infoLabel: 'Touch Center Oficial',
      qrUrl: "/qr-pago.png",
      type: 'social'
    },
    {
      id: 'whatsapp',
      title: 'WhatsApp',
      subtitle: 'Escríbenos directamente',
      infoLabel: 'Atención al Cliente',
      qrUrl: "/qr-pago.png",
      type: 'social'
    }
  ];

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
      } else {
        setView('main');
      }
      setSelectedItem(null);
    } else {
      setView('main');
    }
  };

  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-start p-6 md:p-12">
      {/* Header Section */}
      <header className="w-full max-w-4xl text-center mb-12 fade-in">
        <div className="flex justify-center">
          <div className="relative w-80 h-40">
            <Image
              src="/logo.png"
              alt="Touch Center Logo"
              fill
              className="object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)]"
              priority
            />
          </div>
        </div>
        <div className="mt-4 space-y-1">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Touch Center</h1>
          <p className="text-lg text-muted-foreground font-medium">Punto de Atención y Pago</p>
        </div>
      </header>

      {/* Navigation and Title */}
      {view !== 'main' && (
        <div className="w-full max-w-2xl mb-8 flex items-center gap-4 fade-in">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={handleBack} 
            className="rounded-full h-12 w-12 border-muted shadow-sm shrink-0 bg-card hover:bg-muted"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <div>
            <h2 className="text-2xl font-bold text-foreground">
              {view === 'wallets' && 'Billeteras Digitales'}
              {view === 'banks' && 'Cuentas Bancarias'}
              {view === 'social' && 'Nuestras Redes'}
              {view === 'detail' && selectedItem?.title}
            </h2>
            <p className="text-sm text-muted-foreground">
              {view === 'detail' ? 'Información completa' : 'Selecciona una opción'}
            </p>
          </div>
        </div>
      )}

      {/* Content Area */}
      <div className="w-full max-w-2xl">
        {/* VIEW: MAIN MENU */}
        {view === 'main' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 fade-in">
            <MenuCard 
              title="Billeteras" 
              subtitle="Nequi y Daviplata" 
              icon={<Wallet size={44} />} 
              onClick={() => setView('wallets')} 
            />
            <MenuCard 
              title="Bancos" 
              subtitle="Transferencias" 
              icon={<Landmark size={44} />} 
              onClick={() => setView('banks')} 
            />
            <MenuCard 
              title="Redes Sociales" 
              subtitle="Contáctanos" 
              icon={<Share2 size={44} />} 
              onClick={() => setView('social')} 
            />
            <MenuCard 
              title="Calificarnos" 
              subtitle="Danos 5 estrellas" 
              icon={<Star size={44} />} 
              onClick={() => handleSelectItem({
                id: 'google-rate',
                title: 'Calificarnos en Google',
                subtitle: 'Tu opinión es muy importante',
                qrUrl: "/qr-pago.png",
                type: 'rate',
                infoLabel: 'Google Maps'
              })} 
            />
            <MenuCard 
              title="Conectar WiFi" 
              subtitle="Internet gratis" 
              icon={<Wifi size={44} />} 
              className="sm:col-span-2"
              onClick={() => handleSelectItem({
                id: 'wifi-connect',
                title: 'Conectar al WiFi',
                subtitle: 'Escanea para conectarte',
                qrUrl: "/qr-pago.png",
                type: 'wifi',
                infoLabel: 'Red: TouchCenter_Guest'
              })} 
            />
          </div>
        )}

        {/* VIEW: SUB-LISTS */}
        {(view === 'wallets' || view === 'banks' || view === 'social') && (
          <div className="grid grid-cols-1 gap-4 fade-in">
            {view === 'wallets' && walletMethods.map((m) => (
              <ListEntryCard key={m.id} title={m.title} subtitle={m.subtitle} icon={<Phone size={32} />} onClick={() => handleSelectItem(m)} />
            ))}
            {view === 'banks' && bankMethods.map((m) => (
              <ListEntryCard key={m.id} title={m.title} subtitle={m.subtitle} icon={<Building2 size={32} />} onClick={() => handleSelectItem(m)} />
            ))}
            {view === 'social' && socialMethods.map((m) => (
              <ListEntryCard 
                key={m.id} 
                title={m.title} 
                subtitle={m.subtitle} 
                icon={
                  m.id === 'instagram' ? <Instagram size={32} /> : 
                  m.id === 'facebook' ? <Facebook size={32} /> : 
                  <MessageCircle size={32} />
                } 
                onClick={() => handleSelectItem(m)} 
              />
            ))}
          </div>
        )}

        {/* VIEW: DETAIL */}
        {view === 'detail' && selectedItem && (
          <div className="fade-in space-y-6">
            <PaymentCard
              title={selectedItem.title}
              subtitle={selectedItem.subtitle}
              accountNumber={selectedItem.accountNumber || selectedItem.infoLabel || ''}
              qrUrl={selectedItem.qrUrl}
              bankName={selectedItem.bankName}
              accountType={selectedItem.accountType}
              className="w-full shadow-xl border border-muted p-8"
            />
            <div className="bg-muted/30 border border-muted p-6 rounded-3xl text-center">
              <p className="text-sm text-muted-foreground font-medium">
                {selectedItem.type === 'payment' && "Envía el comprobante por WhatsApp para validar tu pago."}
                {selectedItem.type === 'social' && "¡Síguenos y entérate de nuestras promociones!"}
                {selectedItem.type === 'rate' && "Tu opinión nos ayuda a brindarte un mejor servicio."}
                {selectedItem.type === 'wifi' && "Solicita ayuda si tienes inconvenientes al conectar."}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center text-muted-foreground/50 text-xs fade-in" style={{ animationDelay: '0.4s' }}>
        <p>© {new Date().getFullYear()} Touch Center Hub • Servicios y Pagos</p>
      </footer>
    </main>
  );
}

function MenuCard({ title, subtitle, icon, onClick, className }: { title: string, subtitle: string, icon: React.ReactNode, onClick: () => void, className?: string }) {
  return (
    <Card 
      className={`p-10 flex flex-col items-center justify-center gap-6 hover:shadow-xl transition-all duration-300 cursor-pointer border-muted bg-card rounded-[2.5rem] group ${className}`}
      onClick={onClick}
    >
      <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center text-muted-foreground/60 group-hover:bg-accent group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground/80 group-hover:text-foreground transition-colors">{title}</h2>
        <p className="text-muted-foreground mt-1 font-medium">{subtitle}</p>
      </div>
    </Card>
  );
}

function ListEntryCard({ title, subtitle, icon, onClick }: { title: string, subtitle: string, icon: React.ReactNode, onClick: () => void }) {
  return (
    <Card 
      className="p-6 flex items-center justify-between hover:shadow-lg transition-all duration-300 cursor-pointer border-muted bg-card rounded-3xl group"
      onClick={onClick}
    >
      <div className="flex items-center gap-6">
        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center text-muted-foreground/60 group-hover:bg-accent group-hover:text-white transition-all duration-300">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground/80 group-hover:text-foreground transition-colors">{title}</h3>
          <p className="text-sm text-muted-foreground font-medium">{subtitle}</p>
        </div>
      </div>
      <div className="text-muted-foreground/40 font-black text-2xl group-hover:text-accent transition-colors mr-2">
        ›
      </div>
    </Card>
  );
}