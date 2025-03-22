const apiUrl = "https://67db607d1fd9e43fe47460c0.mockapi.io/alpha/Users";

function validateForm(names, flastname, slastname, curp, status, gender) {
  if (!names.trim()) {
    alert("El campo Nombre no puede estar vacío.");
    return false;
  }
  if (!flastname.trim()) {
    alert("El campo Primer Apellido no puede estar vacío.");
    return false;
  }
  if (!slastname.trim()) {
    alert("El campo Segundo Apellido no puede estar vacío.");
    return false;
  }
  if (!curp.trim()) {
    alert("El campo CURP no puede estar vacío.");
    return false;
  }
  if (!status) {
    alert("Debes seleccionar un Estatus.");
    return false;
  }
  if (!gender) {
    alert("Debes seleccionar un Género.");
    return false;
  }
  return true;
}

function addElement() {
  const names1 = document.getElementById("name").value;
  const flastname1 = document.getElementById("f-lastname").value;
  const slastname1 = document.getElementById("s-lastname").value;
  const curp1 = document.getElementById("icurp").value;
  const status1 = document.querySelector('input[name="status"]:checked')?.value;
  const gender1 = document.querySelector('input[name="gen"]:checked')?.value;

  if (!validateForm(names1, flastname1, slastname1, curp1, status1, gender1)) {
    return;
  }

  const newElem = {
    nombre: names1,
    primer_apellido: flastname1,
    segundo_apellido: slastname1,
    genero: gender1,
    curp: curp1,
    estatus: status1,
  };

  fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify(newElem),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      alert("El elemento se añadio exitosamente");
      window.location.href = "../elements.html";
    })
    .catch((error) => {
      alert("El proceso de añadir un elemento fallo");
    });
}

const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  addElement();
});
