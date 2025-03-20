const apiUrl = "https://67db607d1fd9e43fe47460c0.mockapi.io/alpha/Users";

function addElement() {
  const names1 = document.getElementById("name").value;
  const flastname1 = document.getElementById("f-lastname").value;
  const slastname1 = document.getElementById("s-lastname").value;
  const curp1 = document.getElementById("icurp").value;
  const status1 = document.querySelector('input[name="status"]:checked')?.value;
  const gender1 = document.querySelector('input[name="gen"]:checked')?.value;

  const newElem = {
    nombre: names1,
    primer_apellido: flastname1,
    segundo_apellido: slastname1,
    genero: gender1,
    curp: curp1,
    estatus: status1,
    id: 30,
  };

  fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify(newElem),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => (window.location.href = "../elements.html"));
}

const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  addElement();
});
