# Touch Center Payment Hub

Esta aplicación está configurada para funcionar en **GitHub Pages**.

## Solución al error de Git (Divergent Branches)

Si al hacer `git pull` recibes el error "Need to specify how to reconcile divergent branches", ejecuta estos comandos:

```bash
git config pull.rebase false
git pull origin main
```

Después de eso, podrás subir tus cambios normalmente:

```bash
git add .
git commit -m "Ajustes finales de diseño y QRs"
git push origin main
```

## Pasos para desplegar en GitHub Pages:

1. **Configurar GitHub Pages**:
   - Ve a la pestaña **Settings** de tu repositorio en GitHub.
   - En el menú lateral izquierdo, selecciona **Pages**.
   - En la sección "Build and deployment" > "Source", selecciona **GitHub Actions**.

2. **Activar el Workflow de Next.js**:
   - GitHub detectará que usas Next.js y te sugerirá un archivo de configuración. Haz clic en el botón **Configure**.
   - Se abrirá un editor con un archivo llamado `.github/workflows/nextjs.yml`. No necesitas cambiar nada, solo haz clic en **Commit changes...** arriba a la derecha.

3. **Listo**:
   - Cada vez que hagas un `git push` a la rama `main`, GitHub Actions construirá y publicará automáticamente tu sitio.

**Nota técnica:** La aplicación usa `output: 'export'` en `next.config.ts` para generar archivos estáticos, lo cual es ideal para GitHub Pages.
