# Sitio web — Maestra Raima

Página bilingüe (español/inglés), responsive y enfocada en convertir visitantes en consultas por
WhatsApp.

## Ver la página

1. Abre una terminal en esta carpeta.
2. Ejecuta `npm start`.
3. Visita `http://127.0.0.1:4173`.

## WhatsApp

El contacto configurado es `+57 317 745 9831`. El mensaje inicial cambia automáticamente de
español a inglés según el idioma activo en la página.

## Preparar la versión de producción

Ejecuta `npm run build`. Los archivos listos para publicar se generan en `dist/`.

Configuración recomendada para Cloudflare Pages:

- Rama de producción: `main`
- Comando de compilación: `npm run build`
- Directorio de salida: `dist`
- Dominio: `dominiosyendulzamientos.com`
