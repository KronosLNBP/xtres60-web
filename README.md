# xtres60-web

Sitio de **XTres60** (https://x360.com.mx): agencia de marketing digital en CDMX. Especialistas en imagen, presencia y difusión. En alianza con Grupo Empresarial Díaz.

Sitio estático (HTML, CSS y JavaScript, sin compilación). Reemplaza la app de React anterior.

## Estructura

```
index.html                 Página de inicio
redes-sociales.html        Servicio de gestión de redes sociales (cotización por WhatsApp)
desarrollo-web.html        Servicio de desarrollo web y software (casos y cotización por WhatsApp)
aviso-de-privacidad.html   Aviso de privacidad
404.html                   Página de error
.htaccess                  Página 404 y redirecciones de las rutas anteriores (/servicios, /contacto)
css/styles.css             Estilos (naranja #E46038, negro, gris cálido)
js/config.js               Número de WhatsApp (editar aquí)
js/main.js                 Menú, filtro de casos y formulario
img/logo-xtres60.*         Logo oficial (tomado de la página de Facebook)
robots.txt, sitemap.xml    SEO
```

## Datos usados (de Facebook y del sitio anterior)
- Holbein 135, Col. Noche Buena, Benito Juárez, CDMX 03720
- 55 5476 8850 (teléfono y WhatsApp — confirmar que ese número tiene WhatsApp)
- facebook.com/Xtres60 (+14 mil seguidores)
- 4 servicios y 4 casos de éxito del sitio anterior

## Pendientes
- Logo en alta resolución (el actual es de 200 px, tomado de Facebook).
- Fotos o capturas reales de cada caso de éxito y un resultado medible por caso.
- Logos de clientes.
- Correo de contacto e Instagram/TikTok si los hay.

## Publicación
Cada cambio en `main` se publica por FTP (`.github/workflows/deploy.yml`) con los secrets `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD` y `FTP_SERVER_DIR` de este repositorio. Antes de subir, el flujo respalda las páginas que reemplaza en los *Artifacts* de cada ejecución (90 días). Los archivos del sitio anterior que no se reemplazan (por ejemplo `assets/`) se quedan en el servidor y se pueden borrar a mano.

## Probar en tu computadora

```
python3 -m http.server 8000
```
