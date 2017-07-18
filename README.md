# Buscador de Ordenes de Compra de MGP

Esta aplicación consta de 3 partes principales:
* Un [scrapper](http://?) que convierte datos de la web del municipio a una DB MySQL
* Un backend [customsearch](http://github.com/tincho/customsearch) generador de queries para buscar determinado(s) término(s) en todos los campos especificados de diversas formas
* Un frontend basado en [react-customsearch](http://github.com/tincho/react-customsearch)

Este repositorio en sí contiene el frontend.

# Cómo usarlo

Se debe incluir en el HTML un elemento con los atributos
* `id="search-form"`
* `api-src="/api_root"` opcional, default: `/`. Debe coincidir con la ruta donde atiende el backend (que debe estar en el **mismo dominio** que el frontend)

Ejemplo:
```HTML
<div id="search-form" api-src="/api_ordenes"></div>
```

En la misma página, incluir la aplicación "compilada", al final del elemento `</body>`:

```HTML
<script src="app.build.min.js" type="text/javascript"></script>
```

# Cómo modificar / compilar

Para generar el archivo "app.build.min.js" necesitamos:

* NodeJS (solo probé en su versión 4 pero probablemente ande bien en versiones posteriores). Recomiendo instalarlo usando [Node Version Manager](https://github.com/creationix/nvm)

```
git clone https://...../mgp_customsearch --recursive
cd mgp_customsearch
npm install
```

> Nota: en versiones de git previas a 1.6 no funciona `git clone --recursive` . Se debe hacer `git submodule update --init` dentro del repositorio luego de clonarlo para bajar react-customsearch, que actualmente es requerido como git submodule. **En futuras releases se instalará como dependencia de npm**

A continuación contamos con varias tareas automatizadas, las podemos ver ejecutando `npm run`.

La que nos importa específicamente es:

```
npm run build
```

Este comando genera el archivo `dist/app.build.min.js` listo para incluir en el HTML

# Cómo probarlo localmente

1. Simulando un backend falso:
`npm run dev`
2. Usando un backend "real":
 * Clonar y configurar una instancia de [customsearch](http://github.com/tincho/customsearch)
 * Linkear el directorio `dist` del frontend dentro de `public`: `cd public && ln -s /ruta/a/mgp_customsearch/dist`
 * Iniciar el backend: `API_ROOT=/api_ordenes npm start`

 Acceder
