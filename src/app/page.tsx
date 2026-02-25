"use client";

import { useState } from 'react';
import Image from "next/image";
import { PaymentCard } from "@/components/payment-card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
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

  const getPlaceholder = (id: string) => 
    PlaceHolderImages.find((img) => img.id === id)?.imageUrl || "/qr-pago.png";

  const walletMethods: ItemEntry[] = [
    {
      id: 'nequi',
      title: 'Nequi',
      subtitle: 'Escanea para pagar con Nequi',
      accountNumber: '3114970176',
      qrUrl: getPlaceholder("qr-nequi"),
      type: 'payment'
    },
    {
      id: 'daviplata',
      title: 'Daviplata',
      subtitle: 'Escanea para pagar con Daviplata',
      accountNumber: '3114970176',
      qrUrl: getPlaceholder("qr-daviplata"),
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
      qrUrl: getPlaceholder("qr-bank-elizabeth"),
      type: 'payment'
    },
    {
      id: 'davivienda',
      title: 'Davivienda',
      subtitle: 'Transferencia a Davivienda',
      bankName: 'Davivienda',
      accountType: 'Ahorros',
      accountNumber: '987-654321-09',
      qrUrl: getPlaceholder("qr-bank-cesar"),
      type: 'payment'
    }
  ];

  const socialMethods: ItemEntry[] = [
    {
      id: 'instagram',
      title: 'Instagram',
      subtitle: 'Síguenos en Instagram',
      infoLabel: '@touchcenter',
      qrUrl: getPlaceholder("qr-instagram"),
      type: 'social'
    },
    {
      id: 'facebook',
      title: 'Facebook',
      subtitle: 'Visita nuestro perfil',
      infoLabel: 'Touch Center Oficial',
      qrUrl: getPlaceholder("qr-facebook"),
      type: 'social'
    },
    {
      id: 'whatsapp',
      title: 'WhatsApp',
      subtitle: 'Escríbenos directamente',
      infoLabel: 'Atención al Cliente',
      qrUrl: getPlaceholder("qr-whatsapp"),
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
      <header className="w-full max-w-4xl text-center mb-12 space-y-4 fade-in">
        <div className="flex justify-center">
          <div className="relative w-80 h-40">
            <Image
              src={getPlaceholder("logo")}
              alt="Touch Center Logo"
              fill
              className="object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.3)]"
              priority
              data-ai-hint="company logo"
            />
          </div>
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
              {view === 'detail' ? 'Escanea la información' : 'Selecciona una opción'}
            </p>
          </div>
        </div>
      )}

      {/* Content Switching Area */}
      <div className="w-full max-w-2xl">
        {/* VIEW: MAIN MENU */}
        {view === 'main' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 fade-in">
            <MenuCard 
              title="Billeteras" 
              subtitle="Nequi y Daviplata" 
              icon={<Wallet size={48} />} 
              onClick={() => setView('wallets')} 
            />
            <MenuCard 
              title="Bancos" 
              subtitle="Transferencias" 
              icon={<Landmark size={48} />} 
              onClick={() => setView('banks')} 
            />
            <MenuCard 
              title="Redes Sociales" 
              subtitle="Contáctanos" 
              icon={<Share2 size={48} />} 
              onClick={() => setView('social')} 
            />
            <MenuCard 
              title="Calificarnos" 
              subtitle="Danos 5 estrellas" 
              icon={<Star size={48} />} 
              onClick={() => handleSelectItem({
                id: 'google-rate',
                title: 'Calificarnos en Google',
                subtitle: 'Tu opinión es muy importante',
                qrUrl: getPlaceholder("qr-google"),
                type: 'rate',
                infoLabel: 'Google Maps'
              })} 
            />
            <MenuCard 
              title="Conectar WiFi" 
              subtitle="Internet gratis" 
              icon={<Wifi size={48} />} 
              className="sm:col-span-2"
              onClick={() => handleSelectItem({
                id: 'wifi-connect',
                title: 'Conectar al WiFi',
                subtitle: 'Escanea para conectarte automáticamente',
                qrUrl: getPlaceholder("qr-wifi"),
                type: 'wifi',
                infoLabel: 'Red: TouchCenter_Guest'
              })} 
            />
          </div>
        )}

        {/* VIEW: WALLET SUB-SELECTION */}
        {view === 'wallets' && (
          <div className="grid grid-cols-1 gap-4 fade-in">
            {walletMethods.map((method) => (
              <ListEntryCard 
                key={method.id} 
                title={method.title} 
                subtitle={`Pagar con ${method.title}`} 
                icon={<Phone size={32} />} 
                onClick={() => handleSelectItem(method)} 
              />
            ))}
          </div>
        )}

        {/* VIEW: BANK SUB-SELECTION */}
        {view === 'banks' && (
          <div className="grid grid-cols-1 gap-4 fade-in">
            {bankMethods.map((method) => (
              <ListEntryCard 
                key={method.id} 
                title={method.title} 
                subtitle={`${method.bankName} - ${method.accountType}`} 
                icon={<Building2 size={32} />} 
                onClick={() => handleSelectItem(method)} 
              />
            ))}
          </div>
        )}

        {/* VIEW: SOCIAL SUB-SELECTION */}
        {view === 'social' && (
          <div className="grid grid-cols-1 gap-4 fade-in">
            {socialMethods.map((method) => (
              <ListEntryCard 
                key={method.id} 
                title={method.title} 
                subtitle={method.subtitle} 
                icon={
                  method.id === 'instagram' ? <Instagram size={32} /> : 
                  method.id === 'facebook' ? <Facebook size={32} /> : 
                  <MessageCircle size={32} />
                } 
                onClick={() => handleSelectItem(method)} 
              />
            ))}
          </div>
        )}

        {/* VIEW: INDEPENDENT DETAIL */}
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
            
            <div className="bg-primary/5 border border-primary/10 p-6 rounded-2xl text-center">
              <p className="text-sm text-primary font-semibold">
                {selectedItem.type === 'payment' && "IMPORTANTE: Envía el comprobante por WhatsApp para validar tu transacción."}
                {selectedItem.type === 'social' && "¡Síguenos para estar al tanto de todas nuestras novedades y promociones!"}
                {selectedItem.type === 'rate' && "¡Gracias por tu apoyo! Nos ayuda a seguir mejorando para ti."}
                {selectedItem.type === 'wifi' && "Si tienes problemas para conectar, solicita ayuda a nuestro personal."}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center text-muted-foreground opacity-40 text-sm fade-in" style={{ animationDelay: '0.6s' }}>
        <p>© {new Date().getFullYear()} Touch Center Hub</p>
        <p className="mt-1">Servicios y Pagos</p>
      </footer>
    </main>
  );
}

function MenuCard({ title, subtitle, icon, onClick, className }: { title: string, subtitle: string, icon: React.ReactNode, onClick: () => void, className?: string }) {
  return (
    <Card 
      className={`p-8 flex flex-col items-center justify-center gap-6 hover:shadow-xl transition-all cursor-pointer border-muted hover:border-primary/50 group bg-card rounded-3xl ${className}`}
      onClick={onClick}
    >
      <div className="p-5 rounded-full bg-muted text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
        {icon}
      </div>
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground">{title}</h2>
        <p className="text-muted-foreground mt-1">{subtitle}</p>
      </div>
    </Card>
  );
}

function ListEntryCard({ title, subtitle, icon, onClick }: { title: string, subtitle: string, icon: React.ReactNode, onClick: () => void }) {
  return (
    <Card 
      className="p-6 flex items-center justify-between hover:shadow-md transition-all cursor-pointer border-muted hover:border-primary/30 group bg-card rounded-2xl"
      onClick={onClick}
    >
      <div className="flex items-center gap-6">
        <div className="p-4 rounded-full bg-muted text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>
      </div>
      <div className="text-primary font-bold flex items-center gap-2">
        Ver <span className="text-2xl">›</span>
      </div>
    </Card>
  );
}