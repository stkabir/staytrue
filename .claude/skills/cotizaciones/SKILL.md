---
name: Cotizaciones Stay True
description: Genera propuestas comerciales y cotizaciones en PDF con la identidad de Stay True. Úsala cuando el usuario pida una cotización, propuesta, presupuesto o presentación de precios para un cliente, o cuando quiera editar una cotización existente. Cubre el sistema de diseño A4, las secciones obligatorias, las constantes comerciales (pagos 30/40/30, hosting, garantía), la voz del documento y la generación del PDF con Chrome headless.
---

# Cotizaciones Stay True

Sistema para producir las propuestas comerciales de Stay True Digital Studio: HTML de una sola página → PDF A4 con Chrome headless.

**Referencia extensa:** `.cotizaciones/GUIA_COTIZACIONES.md` — paleta, catálogo de componentes CSS, constantes y checklist. Léela antes de escribir.
**Plantilla:** `.cotizaciones/plantilla/plantilla.html` — se clona, no se parte de cero ni se copia el HTML de otro cliente.

La carpeta `.cotizaciones/` está en `.gitignore`: las cotizaciones llevan datos de clientes y no se commitean.

---

## Flujo

### 1. Preguntar antes de escribir

Nunca arranques el HTML con huecos que vas a rellenar con supuestos. Lo que hay que tener antes de la primera línea:

- Nombre del cliente y del negocio.
- **Qué dijo en la reunión**: su problema, con sus palabras. Esto llena la página "Lo que nos pediste", que es obligatoria. Si no hubo conversación previa, hay que tenerla antes de cotizar.
- Conceptos y precios.
- Qué queda explícitamente fuera del alcance.
- Tiempos de entrega por proyecto.

Si el usuario trae un borrador, léelo completo y **pregunta todo lo que quede ambiguo antes de generar el PDF**. Los puntos que más se olvidan y luego generan reclamos: qué pasa al terminar el primer año, cuántas piezas incluye un catálogo, quién carga el contenido, cuántos usuarios, cuántas rondas de ajustes, y si algo genera costo recurrente.

Usa `AskUserQuestion` cuando la respuesta cambie un número impreso. Para el resto, aplica los valores de la sección de constantes y dilo en tu respuesta.

### 2. Armar el HTML

Clona `plantilla.html` a `.cotizaciones/cotizacion_nombre_cliente.html` y sustituye los marcadores `{{...}}`.

La carpeta `fonts/` tiene que quedar accesible desde el HTML: o copias la cotización dentro de `plantilla/`, o ajustas la ruta del `@font-face`. **Si la fuente no carga, el PDF sale en Arial y se nota.**

Duplica la página de alcance tantas veces como proyectos haya. Renumera `.sec-num` (secuencial, sin huecos), `.subhead .num` y `.foot .pg`.

### 3. Medir antes de generar

`.page` tiene `overflow: hidden`: **lo que no cabe desaparece sin aviso** y el PDF sale con texto cortado. Abre el HTML en Chrome y corre el script de la sección 6 de la guía.

- Desborde debe ser **0 en todas las páginas**.
- Ocupación objetivo: **75–88%**. Si una página pasa de 90%, mueve contenido a otra página antes que comprimir el texto: lo apretado se percibe barato.
- Si una página queda bajo 65%, súbele una sección o fusiónala.

### 4. Generar el PDF

```bash
"/c/Program Files/Google/Chrome/Application/chrome.exe" \
  --headless=new --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="RUTA\cotizacion_nombre_cliente.pdf" \
  "file:///RUTA/cotizacion_nombre_cliente.html"
```

Verifica el número de páginas:

```bash
node -e "const d=require('fs').readFileSync('ARCHIVO.pdf').toString('latin1');console.log((d.match(/\/Type\s*\/Page[^s]/g)||[]).length)"
```

### 5. Revisar antes de entregar

El checklist completo está en la guía. Lo que más se rompe:

- **Las leyendas de paquete cuadran con su precio.** Si el total dice "dos sitios y dos adicionales", suma los conceptos y confirma que dé esa cifra. Es el error más fácil de cometer al reacomodar un descuento, y el cliente lo detecta sumando.
- **No quedaron restos de versiones anteriores**: modalidades eliminadas, topes retirados, precios que ya no aplican, referencias cruzadas a secciones renumeradas.
- **Fechas iguales en los tres lugares**: portada, sección de vigencia y franja de cierre.
- **Una sola voz** en todo el documento.

---

## Secciones

### Núcleo · aparecen en las 6 cotizaciones hechas

Portada · Alcance · Inversión · Forma de pago · Tiempos · Condiciones · Aceptación con firmas.

### Obligatorias por decisión

- **Lo que nos pediste** — el problema del cliente antes de cualquier precio. Es lo que separa una propuesta de una lista de precios.
- **Quién es Stay True** — va justo antes de la aceptación, cuando ya vio el precio: 7+ años, 12+ proyectos, proyectos reales del giro más parecido al suyo.
- **Material que entrega el cliente** y **ajustes y soporte** — sin esto, el alcance queda abierto.

### Según aplique

- **Hosting, dominio y correo** — solo si hay un sitio que alojar.
- **Proceso de trabajo** y **preguntas frecuentes** — recomendadas; además rellenan páginas que quedarían vacías.

---

## Voz

**Se tutea al cliente en todo el documento.** El error clásico es mezclar tres registros: la portada lo saluda por su nombre, el cuerpo habla de "el cliente" en tercera persona y las preguntas frecuentes lo tutean. Leído de corrido parece escrito por tres personas.

En las cláusulas duras se nombra a las partes: **"Stay True"** y el nombre del cliente. Nunca "el cliente" genérico en un documento dirigido a una sola persona.

**Verbos activos.** "Publicamos el sitio", no "se realizará la publicación del sitio". Las nominalizaciones inflan el texto y lo vuelven impersonal.

---

## Constantes comerciales

| | |
|---|---|
| Precios | Siempre **+ IVA**, MXN, IVA al 16% |
| Pago | **30% anticipo · 40% avances · 30% entrega final**, solo transferencia |
| Mensualidades | Nota sin tabla: condiciones con previa solicitud |
| Rondas de ajustes | 2 |
| Soporte | 3 meses, solo corrección de errores |
| Hosting + dominio .com + 1 correo | Primer año incluido, por sitio |
| Renovación año 2 | **Sin cifras.** Tiene costo y se cotiza en su momento |
| Si no renueva | Se entrega copia del código fuente |
| Catálogos | Se declara el número de piezas incluidas; las adicionales van por unidad o paquete |
| Vigencia | 15 días naturales |
| Firma | Andrea Hernández · Stay True |
| Pie | staytruemx.com · 998 116 9584 · hola@staytruemx.com |

### Chatbots: nunca con cobro recurrente

Se venden como preguntas y respuestas configuradas, apoyadas en **modelos de IA gratuitos** que no cobran por consulta. Siempre va la nota de que un chatbot más avanzado se cotiza **por consumo**, porque los modelos de mayor capacidad cobran por consulta.

No metas **API oficial de WhatsApp Business** (cobra por conversación; la canalización se resuelve con un link `wa.me`) ni modelos de IA de pago, salvo que el cliente los pida. Estos clientes suelen llegar huyendo de las mensualidades: un cobro fijo recurrente mata la venta.
