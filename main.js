function renderTable(duplas) {
  const table = document.querySelector("#resultTable");
  let html = "";
  let i = 1;
  html += `<tr><th>Equipe</th><th>Nome 1</th><th>Nome 2</th></tr>`;
  for (let duo of duplas) {
    html += `<tr><td>${i++}</td><td>${duo[0]}</td><td>${
      duo[1] ?? ""
    }</td></tr>`;
  }

  table.innerHTML = html;
}

function formarDuplas(pessoas) {
  let pessoasRestantes = pessoas.slice();
  let duplas = [];

  while (pessoasRestantes.length >= 2) {
    let duo = [];

    let randomIndex1 = Math.floor(Math.random() * pessoasRestantes.length);
    duo.push(pessoasRestantes[randomIndex1]);
    pessoasRestantes.splice(randomIndex1, 1);

    let randomIndex2 = Math.floor(Math.random() * pessoasRestantes.length);
    duo.push(pessoasRestantes[randomIndex2]);
    pessoasRestantes.splice(randomIndex2, 1);
    duo = duo.sort();
    duplas.push(duo);
  }

  if (pessoasRestantes.length === 1) {
    duplas.push([pessoasRestantes[0]]);
  }

  return duplas;
}

function getPersonArray() {
  let persons = document.querySelectorAll("#person");
  let personsArray = [];
  for (let person of persons) {
    if (person.value !== "") personsArray.push(person.value);
  }
  return personsArray;
}

document.querySelector("#btnRandomize").addEventListener("click", (event) => {
  event.preventDefault();
  const persons = getPersonArray();
  if (persons.length < 2) {
    alert("Insira pelo menos dois nomes");
    return;
  }
  const duplas = formarDuplas(persons);
  renderTable(duplas);
});
