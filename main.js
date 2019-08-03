window.addEventListener('load', () => {

 
    // arreglo de elementos
    var elements ;

   

  var btn = document.querySelector('button');
  btn.addEventListener("click", ()=>{
    fetch('https://api.thecatapi.com/v1/breeds')
    .then(function(response) {
      return response.json();
    }).then(function(myJson) {
      
        console.log(myJson);
      elements = myJson;
      render();
                    // seleccionar lista de tareas
    const list = app.querySelector('.list-group');
    // llenar lista de tareas
    console.log(elements);
    list.append(...elements.map(getTask));
    });
    

  });





    
    function render(){
      
   
        // seleccionar #app y setear contenido
        const app = document.querySelector('#app');
        app.innerHTML = `
          <div class="card-body">
            <header class="form-group mb-0">
              <label> Información Gatos</label> 
            </header>
            <section class="list-group mt-4">

             </section>
           
          </div>
        `;




      }

  

        // crear un elemento tarea
  function getTask(elem, index) {
    const { text, checked } = elem;
    var item = document.createElement('div');
    item.setAttribute('class', 'list-group-item');
    item.innerHTML = `
    <label>Nombre: ${elem.name}</label> 
    <t>Origin: ${elem.origin}</t>
    <t>Descripcion: ${elem.description}</t><br>
    <button class="btn btn-sm btn-outline-secondary" id="ver" >ver mas</button>
    `;
   

    // eliminar el elemento al dar click en el botón de la x
    item.querySelector('#ver').addEventListener('click', (e) => {
      //elements.splice(index, 1);
      show(elem);
    });

    // retornar el elemento
    return item;
  }


  function show(item){
      console.log(item);
  }
});