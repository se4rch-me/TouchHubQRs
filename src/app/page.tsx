"use client";

import { useState, useEffect } from 'react';
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
  accountLabel?: string;
  redirectUrl?: string;
}

export default function Home() {
  const [view, setView] = useState<ViewState>('main');
  const [selectedItem, setSelectedItem] = useState<ItemEntry | null>(null);
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const walletMethods: ItemEntry[] = [
    {
      id: 'nequi',
      title: 'Nequi',
      subtitle: 'Escanea para pagar con Nequi',
      accountNumber: '3114970176',
      qrUrl: "/Nequi-qr.png",
      type: 'payment',
      accountLabel: 'Número'
    },
    {
      id: 'daviplata',
      title: 'Daviplata',
      subtitle: 'Escanea para pagar con Daviplata',
      accountNumber: '3114970176',
      qrUrl: "/Daviplata-qr.png",
      type: 'payment',
      accountLabel: 'Número'
    }
  ];

  const bankMethods: ItemEntry[] = [
    {
      id: 'bancolombia',
      title: 'Bancolombia',
      subtitle: 'Transferencia a Bancolombia',
      bankName: 'Bancolombia',
      accountType: 'Ahorros',
      accountNumber: '0091455851',
      qrUrl: "/Bancolobia-qr.png",
      type: 'payment',
      accountLabel: 'Número de Cuenta'
    }
  ];

  const socialMethods: ItemEntry[] = [
    {
      id: 'instagram',
      title: 'Instagram',
      subtitle: 'Síguenos en Instagram',
      infoLabel: 'touch_center284',
      qrUrl: "/qr-instagram.png",
      type: 'social',
      accountLabel: 'Usuario'
    },
    {
      id: 'whatsapp',
      title: 'WhatsApp',
      subtitle: 'Escríbenos directamente',
      infoLabel: '+57 3114970176',
      qrUrl: "/qr-pago.png",
      type: 'social',
      accountLabel: 'Contacto'
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
    <main className="min-h-screen bg-background flex flex-col items-center justify-start p-4 md:p-12 text-foreground">
      <header className="w-full max-w-4xl text-center mb-10 fade-in">
        <div className="flex justify-center">
          <div className="relative w-64 h-32 sm:w-80 sm:h-40">
            <Image
              src="/logo.png"
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
              onClick={() => handleSelectItem({
                id: 'google-rate',
                title: 'Calificarnos en Google',
                subtitle: 'Tu opinión es muy importante',
                qrUrl: "/touchShare.png",
                type: 'rate',
                infoLabel: 'Opiniones',
                accountLabel: 'Puntuar',
                redirectUrl: 'https://www.google.com/search?sca_esv=4743879a97d795b6&q=opiniones+de+touchcenter&uds=ALYpb_kH5N_kfrB-KsEDOaDf3REQS_SDa6jCnm7uV6ILGyPSXnmxSdBJAbJBE9m3em0etOvQgDtWXWGRj8nGrTguwalEMSwL_f-QBW1a9Daour5SvZt9WXK-UM8gZCtrXSQaEcOlwrrQzb97tZkblgJLK0naPqmg4a2nJty74R3HPGsf42aCZrnk7Bgmi85lDgmqR2ecQIVso5BWFwSIwB3HJyxQJCQMdFLVXKjcKtwJF-6_ESR6vA8d7xspWlK4wuvpE_0WUm-uDgbJSwQBaFdiirl_pobhz3uULEjwp_szewIHmz4XI8ZmFu3wP3Iw-lLbZToQnufAvynl73bWW4u4ck7mohlaEG3DFtCH-bh_Hr-iqF5aEvtxgZmFE5uVVtJmTZWRA7zwg_STtFnOd2nY6lr3Xh6YBpl40WiEB8N01-ZV1rPefEk&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOZDEKSgCV8e2CxGyNbpXVn5ydgJ-K6_MF9nbat174rM4XlkM7dgn_225G-3_aMD-WAkSSgiixqwLiBEdLHayUS_qHbmkWYW7KHkfDTaSO-vUWLC__g%3D%3D&sa=X&ved=2ahUKEwi-mLfl1PWSAxWvVzABHakLJM4Qk8gLegQIFhAB&ictx=1&biw=384&bih=693&dpr=1.88'
              })} 
            />
            <MenuCard 
              title="Conectar WiFi" 
              subtitle="Internet gratis" 
              icon={<Wifi size={40} />} 
              className="sm:col-span-2"
              onClick={() => handleSelectItem({
                id: 'wifi-connect',
                title: 'Conectar al WiFi',
                subtitle: 'Escanea para conectarte',
                qrUrl: "/Wifi.png",
                type: 'wifi',
                infoLabel: 'center284',
                accountLabel: 'Touch Center 5G'
              })} 
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
              className="w-full"
            />
            <div className="bg-muted/40 border border-muted p-6 rounded-[2rem] text-center shadow-sm">
              <p className="text-sm sm:text-base text-muted-foreground font-semibold">
                {selectedItem.type === 'payment' && "Envía el comprobante por WhatsApp para validar tu pago."}
                {selectedItem.type === 'social' && "¡Síguenos y entérate de nuestras promociones!"}
                {selectedItem.type === 'rate' && "Tu opinión nos ayuda a brindarte un mejor servicio."}
                {selectedItem.type === 'wifi' && "Solicita ayuda si tienes inconvenientes al conectar."}
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

function MenuCard({ title, subtitle, icon, onClick, className }: { title: string, subtitle: string, icon: React.ReactNode, onClick: () => void, className?: string }) {
  return (
    <Card 
      className={`p-6 sm:p-10 flex flex-col items-center justify-center gap-4 sm:gap-6 hover:shadow-2xl transition-all duration-300 cursor-pointer border-muted bg-card rounded-[2.5rem] group ${className}`}
      onClick={onClick}
    >
      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-muted flex items-center justify-center text-muted-foreground/50 group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-sm">
        {icon}
      </div>
      <div className="text-center">
        <h2 className="text-xl sm:text-2xl font-bold text-foreground/80 group-hover:text-foreground transition-colors">{title}</h2>
        <p className="text-xs sm:text-sm text-muted-foreground mt-1 font-semibold">{subtitle}</p>
      </div>
    </Card>
  );
}

function ListEntryCard({ title, subtitle, icon, onClick }: { title: string, subtitle: string, icon: React.ReactNode, onClick: () => void }) {
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
}