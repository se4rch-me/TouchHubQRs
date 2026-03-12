
# Touch Center Payment Hub

Esta aplicación está configurada para funcionar en **GitHub Pages** y como **PWA** (Progressive Web App).

## Cómo usar sin Internet en tu iPad

Para usar la aplicación en tu iPad sin depender de una conexión constante:
1. Abre el sitio web publicado en Safari desde tu iPad (mientras tengas internet).
2. Toca el botón de **Compartir** (el cuadrado con la flecha hacia arriba).
3. Selecciona **"Añadir a la pantalla de inicio"** (Add to Home Screen).
4. Se creará un icono de "Touch Hub" en tu iPad. Una vez hecho esto, podrás abrirla y ver los códigos QR incluso si no tienes conexión a internet.

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
   - Se abrirá un archivo llamado `.github/workflows/nextjs.yml`. Haz clic en **Commit changes...**.

3. **Listo**:
   - Cada vez que hagas un `git push` a la rama `main`, se publicará automáticamente.

**Nota técnica:** La aplicación usa `output: 'export'` para generar archivos estáticos compatibles con cualquier servidor web básico.
