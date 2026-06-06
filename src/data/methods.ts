export interface ItemEntry {
  id: string;
  title: string;
  subtitle: string;
  accountNumber?: string;
  qrUrl: string;
  bankName?: string;
  accountType?: string;
  type: 'payment' | 'social' | 'wifi' | 'rate' | 'help-desk';
  infoLabel?: string;
  accountLabel?: string;
  redirectUrl?: string;
}

export const walletMethods: ItemEntry[] = [
  {
    id: 'nequi',
    title: 'Nequi',
    subtitle: 'Escanea para pagar con Nequi',
    accountNumber: '3114970176',
    qrUrl: "Nequi-qr.png",
    type: 'payment',
    accountLabel: 'Número'
  },
  {
    id: 'daviplata',
    title: 'Daviplata',
    subtitle: 'Escanea para pagar con Daviplata',
    accountNumber: '3114970176',
    qrUrl: "Daviplata-qr.png",
    type: 'payment',
    accountLabel: 'Número'
  }
];

export const bankMethods: ItemEntry[] = [
  {
    id: 'bancolombia',
    title: 'Bancolombia',
    subtitle: 'Transferencia a Bancolombia',
    bankName: 'Bancolombia',
    accountType: 'Ahorros',
    accountNumber: '0091455851\n@jesus8568',
    qrUrl: "Bancolobia-qr.png",
    type: 'payment',
    accountLabel: 'Cuenta / Llave'
  }
];

export const socialMethods: ItemEntry[] = [
  {
    id: 'instagram',
    title: 'Instagram',
    subtitle: 'Síguenos en Instagram',
    infoLabel: 'touch_center284',
    qrUrl: "qr-instagram.png",
    type: 'social',
    accountLabel: 'Usuario'
  },
  {
    id: 'facebook',
    title: 'Facebook',
    subtitle: 'Visítanos en Facebook',
    infoLabel: 'Touch Center',
    qrUrl: "FacebooklQR.png",
    type: 'social',
    accountLabel: 'Página'
  },
  {
    id: 'whatsapp',
    title: 'WhatsApp',
    subtitle: 'Escríbenos directamente',
    infoLabel: '+57 3114970176',
    qrUrl: "WhatsappQR.png",
    type: 'social',
    accountLabel: 'Contacto'
  }
];

export const helpDeskMethods: ItemEntry[] = [
  {
    id: 'device-intake',
    title: 'Ingreso de Dispositivo',
    subtitle: 'Registra un nuevo dispositivo',
    infoLabel: 'Formulario de ingreso',
    qrUrl: "ClienteForm.png",
    type: 'help-desk',
    accountLabel: 'Formulario',
    redirectUrl: 'https://form-client-vercel.vercel.app/'
  }
];

export const wifiMethod: ItemEntry = {
  id: 'wifi-connect',
  title: 'Conectar al WiFi',
  subtitle: 'Escanea para conectarte',
  qrUrl: "Wifi.png",
  type: 'wifi',
  infoLabel: 'teamtc26',
  accountLabel: 'Touch Center 5G'
};

export const rateMethod: ItemEntry = {
  id: 'google-rate',
  title: 'Calificarnos en Google',
  subtitle: 'Tu opinión es muy importante',
  qrUrl: "touchShare.png",
  type: 'rate',
  infoLabel: 'Opiniones',
  accountLabel: 'Puntuar',
  redirectUrl: 'https://www.google.com/search?sca_esv=4743879a97d795b6&q=opiniones+de+touchcenter&uds=ALYpb_kH5N_kfrB-KsEDOaDf3REQS_SDa6jCnm7uV6ILGyPSXnmxSdBJAbJBE9m3em0etOvQgDtWXWGRj8nGrTguwalEMSwL_f-QBW1a9Daour5SvZt9WXK-UM8gZCtrXSQaEcOlwrrQzb97tZkblgJLK0naPqmg4a2nJty74R3HPGsf42aCZrnk7Bgmi85lDgmqR2ecQIVso5BWFwSIwB3HJyxQJCQMdFLVXKjcKtwJF-6_ESR6vA8d7xspWlK4wuvpE_0WUm-uDgbJSwQBaFdiirl_pobhz3uULEjwp_szewIHmz4XI8ZmFu3wP3Iw-lLbZToQnufAvynl73bWW4u4ck7mohlaEG3DFtCH-bh_Hr-iqF5aEvtxgZmFE5uVVtJmTZWRA7zwg_STtFnOd2nY6lr3Xh6YBpl40WiEB8N01-ZV1rPefEk&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOZDEKSgCV8e2CxGyNbpXVn5ydgJ-K6_MF9nbat174rM4XlkM7dgn_225G-3_aMD-WAkSSgiixqwLiBEdLHayUS_qHbmkWYW7KHkfDTaSO-vUWLC__g%3D%3D&sa=X&ved=2ahUKEwi-mLfl1PWSAxWvVzABHakLJM4Qk8gLegQIFhAB&ictx=1&biw=384&bih=693&dpr=1.88'
};
