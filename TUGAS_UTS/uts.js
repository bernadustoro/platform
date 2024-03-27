var home = document.getElementById('pills-beranda-tab');
var newsBtn = document.getElementById('pills-Tentang-tab');
var kisahBtn = document.getElementById('pills-kisahku-tab');
var pendidikanBtn = document.getElementById('pills-pendi-tab');
var tugasBtn = document.getElementById('pills-tugas-tab');

var kontenhome = document.getElementById('pills-beranda');
var kontennews = document.getElementById('pills-tentang');
var kontenKisahku = document.getElementById('pills-kisah');
var kontenPendidik = document.getElementById('pills-pendi');
var kontentugas = document.getElementById('pills-tugas');

var homecopy = kontenhome.cloneNode(true);


newsBtn.addEventListener('click', function() {
    kontenhome.style.backgroundColor = 'white';
    kontenhome.innerHTML = kontennews.innerHTML;
});

home.addEventListener('click', function() {
    kontenhome.innerHTML = homecopy.innerHTML;
});

kisahBtn.addEventListener('click', function() {
    kontenhome.innerHTML = kontenKisahku.innerHTML;
});
pendidikanBtn.addEventListener('click', function() {
    kontenhome.innerHTML = kontenPendidik.innerHTML;
});
tugasBtn.addEventListener('click', function() {
    kontenhome.innerHTML = kontentugas.innerHTML;


    var firstNama = document.querySelector('#first-name');
    var lastNama = document.querySelector('#Last-name');
    var inputPilihan = document.querySelector('#pilihan');
    var email = document.querySelector('#email');
    var container = document.querySelector('.contain-tugas')
    const btn = document.querySelector('#tombolok');

    var tamp = [];
    var pilihan;
    var txtARy = '';

    btn.addEventListener('click', tombolTekan);

    function tombolTekan() {
        var Namadepan = firstNama.value.trim();
        var Namabelakang = lastNama.value.trim();
        email = email.value.trim();
        pilihan = inputPilihan.value;
        if (Namadepan == '' || pilihan == '' || Namabelakang == '' || email == '') {
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
            label.textContent = 'HOBI' + (index + 1) + ':';
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
            okb.disabled = true;
            inputHobi();
        });
    }

    function inputHobi() {
        const lineBreak = document.createElement('br');
        container.appendChild(lineBreak);
        const containCheckboxes = document.createElement('div');
        containCheckboxes.setAttribute('class', 'form-group');

        const hobiLabel = document.createElement('label');
        hobiLabel.textContent = 'Hobi paling disukai';
        hobiLabel.setAttribute('for', 'hobi');


        var batas = parseInt(inputPilihan.value.trim());
        for (var i = 0; i < batas; i++) {
            const checkboxContainer = document.createElement('div');
            checkboxContainer.setAttribute('class', 'form-check');

            const checkboxInput = document.createElement('input');
            checkboxInput.type = 'checkbox';
            checkboxInput.setAttribute('class', 'form-check-input');
            checkboxInput.setAttribute('name', 'hobi');
            checkboxInput.value = tamp[i]; // Memberikan nilai yang unik kepada masing-masing checkbox
            checkboxContainer.appendChild(checkboxInput);

            const checkboxLabel = document.createElement('label');
            checkboxLabel.setAttribute('class', 'form-check-label');
            checkboxLabel.textContent = 'Hobi ' + (i + 1);
            checkboxContainer.appendChild(checkboxLabel);

            containCheckboxes.appendChild(checkboxContainer);

        }

        container.appendChild(hobiLabel);
        container.appendChild(containCheckboxes);

        const ok1 = document.createElement('button');
        ok1.type = 'submit';
        ok1.setAttribute('id', 'btn_ok');
        ok1.textContent = 'Submit';
        container.appendChild(ok1);

        const tombol_OK = document.querySelector('#btn_ok');
        tombol_OK.addEventListener('click', function(e) {
            const nama = firstNama.value + ' ' + lastNama.value;
            const jmlpil = inputPilihan.value;


            const selectedHobis = [];
            document.querySelectorAll('input[name=hobi]:checked').forEach(function(checkbox) {
                selectedHobis.push(checkbox.value);
            });
            for (let i = 0; i < tamp.length; i++) {
                txtARy += ' HOBI ' + (i + 1) + ' ' + tamp[i] + ', ';

            }
            tombol_OK.disabled = true;
            const txt = "<p>" + 'Hallo,nama Saya ' + nama + ', dengan email ' + email + ' saya mempunyai sejumlah ' + jmlpil + ' pilihan hobi yaitu ' + txtARy + ' dan hobi yang paling saya suka ' + selectedHobis.join(', ') + "</p>";
            container.insertAdjacentHTML('beforeend', txt);
        });
    }

});