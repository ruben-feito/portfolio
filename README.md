# Portfolio Personal - Astro.js

Un portfolio moderno y optimizado construido con Astro.js, Tailwind CSS y transiciones de vista fluidas.

## ✨ Características

- **Astro.js**: Generación de sitios estáticos rápida y optimizada
- **Transiciones de Vista**: Navegación suave entre páginas con `astro:transitions`
- **SEO Optimizado**: Meta tags completos, Open Graph, Twitter Cards, datos estructurados JSON-LD
- **Responsive Design**: Diseño adaptativo con Tailwind CSS
- **PWA Ready**: Manifest.json y configuración para Progressive Web App
- **Performance**: Compresión HTML, estilos inline, optimización de imágenes

## 🚀 Estructura del Proyecto

```text
/
├── public/
│   ├── favicon.svg
│   ├── manifest.json
│   ├── og-image.jpg
│   ├── robots.txt
│   ├── sitemap.xml.js
│   └── .htaccess
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Welcome.astro
│   │   └── SEO.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── index.astro
│       ├── about.astro
│       ├── stack.astro
│       ├── marketplaces.astro
│       └── projects.astro
├── astro.config.mjs
├── package.json
├── pnpm-lock.yaml
├── tailwind.config.mjs
└── tsconfig.json
```

## 🛠️ Comandos

| Comando              | Acción                                      |
|----------------------|---------------------------------------------|
| `pnpm install`       | Instalar dependencias                       |
| `pnpm dev`           | Iniciar servidor de desarrollo en `localhost:4321` |
| `pnpm build`         | Construir sitio para producción en `./dist/` |
| `pnpm preview`       | Previsualizar build localmente              |
| `pnpm astro check`   | Verificar tipos y errores                  |

## 📈 SEO y Performance

### Meta Tags Implementados
- Títulos y descripciones optimizados por página
- Open Graph para Facebook/LinkedIn
- Twitter Cards para Twitter
- URLs canónicas
- Meta robots y viewport

### Datos Estructurados (JSON-LD)
- **Person**: Para la página principal
- **AboutPage**: Para la página "Sobre mí"
- **Service**: Para servicios/marketplaces
- **CollectionPage**: Para proyectos

### Archivos SEO
- `sitemap.xml.js`: Sitemap dinámico
- `robots.txt`: Instrucciones para crawlers
- `manifest.json`: PWA configuration
- `.htaccess`: Headers de cache y seguridad

### Optimizaciones de Performance
- Compresión HTML automática
- Estilos inline para CSS crítico
- Optimización de imágenes con Sharp
- Caching headers en .htaccess

## 🚀 Deployment

### Netlify
```bash
pnpm build
# Subir el contenido de ./dist/ a Netlify
```

### Vercel
```bash
pnpm build
# Subir el contenido de ./dist/ a Vercel
```

### GitHub Pages
```bash
pnpm build
# Subir el contenido de ./dist/ a la rama gh-pages
```

## 🔧 Configuración Pre-deployment

Antes de desplegar, actualiza las siguientes URLs con tu dominio real:

1. **En `src/components/SEO.astro`**:
   - Cambia `https://tu-dominio.com` por tu URL real

2. **En `public/sitemap.xml.js`**:
   - Actualiza la URL base

3. **En `public/manifest.json`**:
   - Cambia `start_url` y otros URLs

4. **Crea una imagen Open Graph real**:
   - Reemplaza `public/og-image.jpg` con una imagen de 1200x630px

## 📊 Monitoreo SEO

### Herramientas Recomendadas
- **Google Search Console**: Verifica indexación
- **Google Analytics**: Rastreo de visitantes
- **Rich Results Test**: Valida datos estructurados
- **Lighthouse**: Auditoría de performance

### Verificación
- Agrega meta tags de verificación de Google Search Console
- Configura Google Analytics en `Layout.astro`

## 🎨 Personalización

### Colores y Tema
- Modifica `tailwind.config.mjs` para colores personalizados
- Actualiza variables CSS en `Layout.astro`

### Contenido
- Edita páginas en `src/pages/`
- Actualiza datos en componentes
- Modifica datos estructurados según tu información

## 📝 Notas Importantes

- El sitemap se genera dinámicamente basado en las páginas existentes
- Las transiciones de vista requieren JavaScript habilitado
- El sitio es completamente estático - no requiere servidor backend
- Optimizado para Core Web Vitals

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

---

Hecho con ❤️ usando [Astro.js](https://astro.build/)
