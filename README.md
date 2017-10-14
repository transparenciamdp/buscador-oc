# Buscador de Ordenes de Compra de MGP

Esta aplicación consta de 3 partes principales:
* Un [scrapper](http://?) que convierte datos de la web del municipio a una DB MySQL
* Un backend [customsearch](http://github.com/tincho/customsearch) generador de queries para buscar determinado(s) término(s) en todos los campos especificados de diversas formas
* Un frontend basado en [react-customsearch](http://github.com/tincho/react-customsearch)

Este repositorio en sí contiene la instancación del frontend.

Ver código en [index.html](dist/index.html)

## Instrucciones

* Clonar o descargar

* `npm install`

* `npm start` - provee una falsa API para probar el frontend

## @TODO

Incluir react-customsearch como npm module instead of hard copying it into `dist/`
