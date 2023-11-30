export function boxRequest(coordinates, layerName){
    const body = {
        coordinates,
        tabla:layerName
    }
    fetch('http://localhost:3001/caja',
        {
            method: 'POST',
            mode: 'cors',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        })
        .then(r => r.json())
        .then(response => {
            const { resultado } = response;
            console.log(resultado)

            const modalRequest = document.querySelector("#request")
            const newTable = document.createElement("table");
            newTable.id = "tableRequest";
            const newTableHead = document.createElement("thead");
            const newTableBody = document.createElement("tbody");

            const newTableHeadRow = document.createElement("tr");

            const newTableHeadTdNombre = document.createElement("th");
            const newTableHeadTdTipo = document.createElement("th");
            const newTableHeadTdResponsable = document.createElement("th");
            const newTableHeadTdCargo = document.createElement("th");

            newTableHeadTdNombre.innerText = "Nombre";
            newTableHeadTdTipo.innerText = "Tipo";
            newTableHeadTdResponsable.innerText = "Responsable";
            newTableHeadTdCargo.innerText = "Cargo";

            newTableHeadRow.appendChild(newTableHeadTdNombre)
            newTableHeadRow.appendChild(newTableHeadTdTipo)
            newTableHeadRow.appendChild(newTableHeadTdResponsable)
            newTableHeadRow.appendChild(newTableHeadTdCargo)

            newTableHead.appendChild(newTableHeadRow);

            resultado.forEach(element => {
                var tr = document.createElement("tr");
                const { nombre, tipo, responsabl, cargo } = element;

                var trNombre = document.createElement("td");
                var trTipo = document.createElement("td");
                var trResponsabl = document.createElement("td");
                var trCargo = document.createElement("td");

                trNombre.innerText = nombre;
                trTipo.innerText = tipo;
                trResponsabl.innerText = responsabl;
                trCargo.innerText = cargo;

                tr.appendChild(trNombre)
                tr.appendChild(trTipo)
                tr.appendChild(trResponsabl)
                tr.appendChild(trCargo)

                newTableBody.appendChild(tr);
            })
            newTable.appendChild(newTableHead)
            newTable.appendChild(newTableBody)
            modalRequest.appendChild(newTable);
            modalRequest.classList.add('requestShow')
            modalRequest.showModal();

        })
        .catch(e => console.log(`Error cargando feature`, e.message))
}

export function pointRequest(coordinates, layerName, pixel){
    const body = {
        coordinates,
        tabla:layerName,
        pixel
    }
    fetch('http://localhost:3001/punto',
        {
            method: 'POST',
            mode: 'cors',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        })
        .then(r => r.json())
        .then(response => {
            const { resultado } = response;
            console.log(resultado)

            const modalRequest = document.querySelector("#request")
            const newTable = document.createElement("table");
            newTable.id = "tableRequest";
            const newTableHead = document.createElement("thead");
            const newTableBody = document.createElement("tbody");

            const newTableHeadRow = document.createElement("tr");

            const newTableHeadTdNombre = document.createElement("td");
            const newTableHeadTdTipo = document.createElement("td");
            const newTableHeadTdResponsable = document.createElement("td");
            const newTableHeadTdCargo = document.createElement("td");

            newTableHeadTdNombre.innerText = "Nombre";
            newTableHeadTdTipo.innerText = "Tipo";
            newTableHeadTdResponsable.innerText = "Responsable";
            newTableHeadTdCargo.innerText = "Cargo";
            newTableBody
            newTableHeadRow.appendChild(newTableHeadTdNombre)
            newTableHeadRow.appendChild(newTableHeadTdTipo)
            newTableHeadRow.appendChild(newTableHeadTdResponsable)
            newTableHeadRow.appendChild(newTableHeadTdCargo)

            newTableHead.appendChild(newTableHeadRow);

            resultado.forEach(element => {
                var tr = document.createElement("tr");
                const { nombre, tipo, responsabl, cargo } = element;

                var trNombre = document.createElement("td");
                var trTipo = document.createElement("td");
                var trResponsabl = document.createElement("td");
                var trCargo = document.createElement("td");

                trNombre.innerText = nombre;
                trTipo.innerText = tipo;
                trResponsabl.innerText = responsabl;
                trCargo.innerText = cargo;

                tr.appendChild(trNombre)
                tr.appendChild(trTipo)
                tr.appendChild(trResponsabl)
                tr.appendChild(trCargo)

                newTableBody.appendChild(tr);
            })
            newTable.appendChild(newTableHead)
            newTable.appendChild(newTableBody)
            modalRequest.appendChild(newTable);
            modalRequest.classList.add('requestShow')
            modalRequest.showModal();

        })
        .catch(e => console.log(`Error cargando feature`, e.message))
}

