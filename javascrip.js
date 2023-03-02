const boton1 =  document.getElementById("one"), section1 = document.getElementById("botton");
section1.classList.add("section1")
boton1.addEventListener('click', () => {
   section1.innerHTML=`
   <p><strong>Email:</strong> juan.perez@email.com</p>
   <p><strong>Teléfono:</strong> 555-1234</p>
   <p><strong>Direccion:</strong> avenida-siempreviva</p>`
  
})
