document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.querySelector('form');
    const inputNombre = document.getElementById('inputNombre');
    const tablaResultados = document.getElementById('tablaResultados');
    const estado = document.getElementById('estado');
  
    formulario.addEventListener('submit', async (e) => {
      e.preventDefault();
      const nombre = inputNombre.value.trim();
      if (nombre === '') {
        alert('Por favor, ingresa el nombre del personaje');
        return;
      }
      tablaResultados.innerHTML = '';
      estado.innerText = 'Buscando personajes...';
  
      try {
        const respuesta = await fetch(`https://rickandmortyapi.com/api/character/?name=${nombre}`);
        if (respuesta.ok) {
          const data = await respuesta.json();
          const resultados = data.results;
  
          if (resultados.length === 0) {
            estado.innerText = 'No se encontraron personajes';
          } else {
            resultados.forEach((personaje) => {
              const row = document.createElement('tr');
              const idCell = document.createElement('td');
              idCell.textContent = personaje.id;
              const nombreCell = document.createElement('td');
              nombreCell.textContent = personaje.name;
              const especieCell = document.createElement('td');
              especieCell.textContent = personaje.species;
              const generoCell = document.createElement('td');
              generoCell.textContent = personaje.gender;
              const estadoCell = document.createElement('td');
              estadoCell.textContent = personaje.status;
              const imagenCell = document.createElement('td');
              const imagen = document.createElement('img');
              imagen.src = personaje.image;
              imagen.alt = personaje.name;
              imagenCell.appendChild(imagen);
  
              row.appendChild(idCell);
              row.appendChild(nombreCell);
              row.appendChild(especieCell);
              row.appendChild(generoCell);
              row.appendChild(estadoCell);
              row.appendChild(imagenCell);
  
              tablaResultados.appendChild(row);
  
              // Mostrar los datos en la consola
              console.log(`id: ${personaje.id}`);
              console.log(`Nombre: ${personaje.name}`);
              console.log(`Especie: ${personaje.species}`);
              console.log(`Género: ${personaje.gender}`);
              console.log(`Estado: ${personaje.status}`);
              console.log(`Imagen: ${personaje.image}`);
              
            });
  
            estado.innerText = `Mostrando ${resultados.length} personaje(s)`;
          }
        } else {
          estado.innerText = 'Error en la consulta a la API';
        }
      } catch (error) {
        estado.innerText = 'Error en la consulta a la API';
        console.log(error);
      }
    });
  });