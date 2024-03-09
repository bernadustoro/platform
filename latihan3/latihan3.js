var inputNama = document.querySelector('#name');
var inputPilihan = document.querySelector('#pilihan');
var container = document.querySelector('.contain')
const btn = document.querySelector('#btn');

var tamp = [];
var pilihan;

btn.addEventListener('click', tombolTekan);

function tombolTekan() {
    var nama = inputNama.value.trim();
    pilihan = inputPilihan.value;
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
    const ok = document.createElement('button');
    ok.type = 'submit';
    ok.setAttribute('id', 'btnOK');
    ok.textContent = 'OK';
    container.appendChild(ok);

    const okb = document.querySelector('#btnOK');
    okb.addEventListener('click', function(e) {
        const inp = document.querySelectorAll('#pilihan')
        for (let index = 0; index < inp.length; index++) {
            tamp[index] = inp[index].value;

        }
        inputHobi();
        ok.disabled = true;
    });
}

function inputHobi() {
    const containDrop = document.createElement('div');
    containDrop.setAttribute('class', 'form-group');

    const hobiLabel = document.createElement('label');
    hobiLabel.textContent = 'Hobi';
    hobiLabel.setAttribute('for', 'hobi');

    const hobiSelect = document.createElement('select');
    hobiSelect.setAttribute('id', 'hobi');

    const hobi = ['membaca', 'sepakbola'];

    hobi.forEach(function(hobi) {
        const optionElement = document.createElement('option');
        optionElement.textContent = hobi;
        // optionElement.value = hobi;
        hobiSelect.appendChild(optionElement);
    });

    containDrop.appendChild(hobiLabel);
    containDrop.appendChild(hobiSelect);
    container.appendChild(containDrop);
}