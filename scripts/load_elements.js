const url = "https://67db607d1fd9e43fe47460c0.mockapi.io/alpha/Users";

const fillInData = (data) => {
  const body = document.querySelector("tbody");
  data.forEach((element) => {
    let row = document.createElement("tr");
    row.innerHTML = `
                  <th scope="row">${element.id}</th>
                  <td>${element.nombre} ${element.primer_apellido} ${
      element.segundo_apellido
    }</td>
                  <td>${element.curp}</td>
                  <td>${element.genero}</td>
                  <td>${element.estatus ? "Aprobado" : "Reprobado"}</td>
                  <th scope="row">
                    <a href="#">
                      <img
                        src="img/trash_icon.png"
                        alt="delete"
                        id="delete-icon"
                      />
                    </a>
                  </th>
                  <th scope="row">
                    <a href="#">
                      <img src="img/edit_icon.png" alt="edit" id="edit-icon" />
                    </a>
                  </th>`;
    body.appendChild(row);
  });
};

fetch(url)
  .then((response) => response.json())
  .then((data) => fillInData(data));
