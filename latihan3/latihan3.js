var inputNama = document.querySelector('#name');
var inputPilihan = document.querySelector('#pilihan');
var container = document.querySelector('.contain')
const btn = document.querySelector('#btn');

var tamp = [];

function tombolTekan() {
    var nama = inputNama.value.trim();
    var pilihan = inputPilihan.value;
    if (nama == '' || pilihan == '') {
        alert('jangan ada yang kosong');
    } else {
        inputPilih();
    }
}

function inputPilih() {
    btn.remove();
    const element = document.querySelectorAll('.form-group')
    element.forEach(function(e) {
        e.parentNode.removeChild(e);
    });

    var batas = parseInt(inputPilihan.value.trim());
    for (let index = 0; index < batas; index++) {
        const pilih = document.createElement('div');
        pilih.classList.add('form-group');

        const label = document.createElement('label');
        label.textContent = 'pilihan' + (index + 1) + ':';
        label.setAttribute('for', 'pilihan');

        const input = document.createElement('input');
        input.type = 'text';
        input.setAttribute('id', 'pilihan');

        pilih.appendChild(label);
        pilih.appendChild(input);
        container.appendChild(pilih);
    }


}

btn.addEventListener('click', tombolTekan);