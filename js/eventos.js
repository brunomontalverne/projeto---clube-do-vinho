


function enviar() {
    event.preventDefault(); //impedir que o formulário seja enviado

    let input_nome = document.getElementById('nome');
    let input_desc = document.getElementById('descricao');
    let erro_nome = document.getElementById('erro_nome');
    let erro_desc = document.getElementById('erro_descricao');

    if (input_nome.value == '') {
    //  input_nome.style.border = '1px solid red';
        input_nome.classList.add('is-invalid');
        input_nome.classList.remove('is-valid');
        erro_nome.style.display = 'block';
    } else {
        //   input_nome.style.border = '2px solid green';
        input_nome.classList.remove('is-invalid');
        input_nome.classList.add('is-valid');
        erro_nome.style.display = 'none';
    }

    if (input_desc.value == '') {
    //  input_desc.style.border = '1px solid red';
        input_desc.classList.remove('is-valid');
        input_desc.classList.add('is-invalid');
        erro_desc.style.display = 'block';
    } else {
    //  input_desc.style.border = '2px solid green';
        input_desc.classList.add('is-valid');
        input_desc.classList.remove('is-invalid');
        erro_desc.style.display = 'none';
    }
}




