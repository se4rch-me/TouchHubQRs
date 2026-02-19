
import Image from "next/image";
import { PaymentCard } from "@/components/payment-card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Home() {
  const getPlaceholder = (id: string) => 
    PlaceHolderImages.find((img) => img.id === id)?.imageUrl || "/qr-pago.png";

  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-start p-6 md:p-12">
      {/* Header Section */}
      <header className="w-full max-w-4xl text-center mb-12 space-y-4 fade-in">
        <div className="flex justify-center mb-6">
          <div className="relative w-20 h-20 rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            <Image
              src={getPlaceholder("logo")}
              alt="Touch Center Logo"
              fill
              className="object-cover"
              data-ai-hint="logo"
            />
          </div>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Touch Center
        </h1>
        <p className="text-xl text-muted-foreground font-light">
          Paga de forma rápida y segura
        </p>
      </header>

      {/* Payment Grid - Optimized for iPad (2 columns) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
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

        <PaymentCard
          title="Bancolombia"
          subtitle="Touch Center"
          bankName="Bancolombia"
          accountType="Ahorros"
          accountNumber="123-456789-01"
          qrUrl={getPlaceholder("qr-bank-elizabeth")}
          delay="0.3s"
        />

        <PaymentCard
          title="Davivienda"
          subtitle="Touch Center"
          bankName="Davivienda"
          accountType="Ahorros"
          accountNumber="987-654321-09"
          qrUrl={getPlaceholder("qr-bank-cesar")}
          delay="0.4s"
        />
      </div>

      {/* Footer Info */}
      <footer className="mt-16 text-center text-muted-foreground opacity-50 text-sm fade-in" style={{ animationDelay: '0.6s' }}>
        <p>© {new Date().getFullYear()} Touch Center Payment Hub</p>
        <p className="mt-1">Punto de pago autorizado</p>
      </footer>
    </main>
  );
}
