import React from 'react';
import ReactDOM from 'react-dom';
import CustomSearch from './react-customsearch/app.jsx';

const currency = v => "$ " + parseFloat(v);

let rootElement = document.querySelector("#search-form");
let
    src = rootElement.attributes["api-src"].value || "/",
    columnNames = {
        ordendecompra: "No. OC",
        anio: "Año",
        fechaemision: "Emisión",
        reparticion: "Repartición",
        proveedor: "Proveedor",
        descripcion: "Descripción",
        preciounitario: "Precio unitario",
        cantidad: "Cantidad",
        unidadmedida: "U.M",
        preciototal: "Precio total"
    },
    fieldFormatters = {
        preciounitario: currency,
        preciototal: currency,
        fechaemision: d => {
          if (d === "1900-01-01T00:00:00.000Z") {
            return "Sin especificar";
          }
          return new Date(d).toISOString().slice(0,10);
        }
    },
    limit = 20;

// @TODO about column headers, it might be good a "resilient" behavior where first raw columnNames are shown
// then "translations" / displayable text may come from an XHRequest or other source async'ly, and update

ReactDOM.render(<CustomSearch options={{src, columnNames, limit, fieldFormatters}} />, rootElement);
