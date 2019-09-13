const SendValid = () =>{
  const xhr = new XMLHttpRequest()
  const f = document.getElementById('formulario')

  function validar(){
    if(f.email.value != 0){
      Swal.fire(
        'Correo enviado',
        'Gracias por subscribirte',
        'success'
      )
    }
  }

  f.addEventListener('submit', e =>{
    e.preventDefault()
    validar()
    const form = new FormData(f)
    xhr.open('POST', 'enviar.php')
    xhr.onload = () =>{
      if(xhr.status == 200){
        console.log(xhr.responseText)
      }else{
        console.log('Error en la peticion: '+xhr.status)
      }
    }
    xhr.send(form)
    f.reset()
  })
}


export {SendValid}
