# Touch Center Payment Hub

Esta aplicación está lista para ser desplegada en **GitHub Pages**.

## Pasos para desplegar:

1. **Subir a GitHub**: Crea un repositorio en tu cuenta de GitHub y sube todo el código.
2. **Configurar GitHub Pages**:
   - Ve a la pestaña **Settings** de tu repositorio.
   - En el menú lateral, selecciona **Pages**.
   - En "Build and deployment" > "Source", selecciona **GitHub Actions**.
3. **Seleccionar Workflow**:
   - GitHub te sugerirá un workflow de **Next.js**. Haz clic en **Configure**.
   - Se creará un archivo `.github/workflows/nextjs.yml`. Haz clic en **Commit changes**.
4. **Despliegue automático**: GitHub ejecutará el proceso de construcción y en pocos minutos tu sitio estará en vivo en `https://tu-usuario.github.io/tu-repo/`.

**Nota importante:** Debido a que GitHub Pages es un host estático, las funciones de servidor (como Server Actions o integraciones de Genkit que requieran servidor) no funcionarán. Si necesitas esas funciones en el futuro, te recomendamos usar **Firebase App Hosting**.
