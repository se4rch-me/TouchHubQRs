# Touch Center Payment Hub

Esta aplicación está configurada para funcionar en **GitHub Pages**.

## Pasos para desplegar:

1. **Subir a GitHub**: Crea un repositorio en tu cuenta de GitHub y sube todo el código.
2. **Configurar GitHub Pages**:
   - Ve a la pestaña **Settings** de tu repositorio.
   - En el menú lateral, selecciona **Pages**.
   - En "Build and deployment" > "Source", selecciona **GitHub Actions**.
3. **Seleccionar Workflow**:
   - GitHub te sugerirá un workflow de **Next.js**. Haz clic en **Configure**.
   - Se creará un archivo `.github/workflows/nextjs.yml`. Haz clic en **Commit changes**.

## Solución de errores comunes:

### Error: Divergent Branches (al hacer pull)
Si ves un error que dice "Need to specify how to reconcile divergent branches", ejecuta:
```bash
git config pull.rebase false
git pull origin main
```
Luego podrás hacer tu `git commit` y `git push` normalmente.

**Nota importante:** Debido a que GitHub Pages es un host estático, las funciones de servidor (como Server Actions o integraciones de Genkit que requieran servidor) no funcionarán.