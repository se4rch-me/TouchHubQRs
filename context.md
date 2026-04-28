# Documento Instructivo: Proyecto TheMacSide

Este documento sirve como **contexto base (prompt)** para la creación de un nuevo proyecto desde cero. El nuevo proyecto se llama **TheMacSide** y debe ser construido tomando como inspiración la arquitectura, el diseño y la funcionalidad del proyecto actual (TouchHubQRs), pero siendo un proyecto completamente independiente.

---

## 1. Descripción General del Proyecto a Crear
Debes desarrollar **TheMacSide**, una aplicación web progresiva (PWA) diseñada para funcionar como un portal o "hub" centralizado de servicios y pagos para el negocio TheMacSide. 
- **Dispositivos Objetivo**: Principalmente pensada para ser visualizada en dispositivos como iPads o tablets, en formato apaisado o vertical.
- **Objetivo Principal**: Permitir a los clientes en la tienda física acceder rápidamente a códigos QR para realizar pagos, o para acceder al formulario de ingreso de sus equipos.

## 2. Características y Secciones Requeridas
La aplicación debe ser más simplificada que el proyecto base. Contará **únicamente** con un Menú Central (Grid) de 3 opciones principales:

1. **Billeteras Digitales**:
   - Tarjetas o accesos directos para opciones de pago móvil rápido (ej. Nequi, Daviplata).
2. **Bancos**:
   - Información para realizar transferencias bancarias (ej. cuenta de Bancolombia).
3. **Ingreso (Mesa de Ayuda)**:
   - Formulario de ingreso de dispositivos y contacto de soporte técnico para el taller.

### Vista de Detalles (`PaymentCard`)
- Al dar clic en cualquiera de las 3 opciones principales, la aplicación debe renderizar una vista de detalle (tipo `PaymentCard`).
- Esta tarjeta unificada debe mostrar: un código QR, instrucciones, números de cuenta, etiquetas (accountLabel/infoLabel) o botones de acción externa (como abrir el formulario web).
- **Importante**: Se debe mantener el estilo unificado y el comportamiento del botón "Regresar" para navegar fluidamente entre el menú principal y las vistas de detalle.

## 3. Stack Tecnológico a Utilizar
El nuevo proyecto debe inicializarse utilizando el siguiente stack:
- **Framework**: Next.js (App Router, aunque se permite mantener la lógica principal como una Single Page Application manejada por estados dentro de `page.tsx`).
- **Lenguaje**: TypeScript (`.tsx`, `.ts`).
- **Estilos**: Tailwind CSS.
- **Componentes de UI**: Interfaz moderna basada en componentes tipo *shadcn/ui* (como `Card`, `Button`).
- **Iconografía**: `lucide-react`.

## 4. Arquitectura y Navegación Sugerida
Se recomienda mantener la navegación sencilla basada en el estado de React (ej. variables `view` y `selectedItem`):
- `view`: Para controlar qué capa ve el usuario (ej. `'main'` para el menú principal, `'wallets'` o `'banks'` para listas, o `'detail'` para la vista del QR).
- `selectedItem`: Para almacenar temporalmente la información del ítem al que se le dio clic, pasándola como props a la `PaymentCard`.

## 5. Requisitos de Despliegue
- El proyecto debe configurarse para permitir exportación estática agregando `output: 'export'` en el archivo `next.config.ts`.
- Debe soportar despliegue automatizado mediante **GitHub Actions / GitHub Pages**.
- Debe configurarse como PWA para poder ser instalada en el inicio de un iPad y funcionar offline tras el primer caché.
