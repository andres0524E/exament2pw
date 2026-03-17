document.addEventListener('DOMContentLoaded', () => {
    
    const inputnumber = document.querySelector('#input-number');
    const inputname = document.querySelector('#input-name');
    const inputmonth = document.querySelector('#input-month');
    const inputyear = document.querySelector('#input-year');
    const inputcvv = document.querySelector('#input-cvv');
    
    const cardinner = document.querySelector('#card-inner');
    const displaynumber = document.querySelector('#display-number');
    const displayname = document.querySelector('#display-name');
    const displayexpiry = document.querySelector('#display-expiry');
    const displaycvv = document.querySelector('#display-cvv');

    const fechaactual = new Date();
    const mesactual = String(fechaactual.getMonth() + 1).padStart(2, '0');
    const anioactual = String(fechaactual.getFullYear()).substring(2);

    inputmonth.value = mesactual;
    inputyear.value = anioactual;

    const updateexpiry = () => {
        const mm = inputmonth.value;
        const yy = inputyear.value;
        displayexpiry.textContent = `${mm}/${yy}`;
    };

    updateexpiry();

    inputnumber.addEventListener('input', (e) => {
        let val = e.target.value.replace(/\D/g, '');
        let formatted = val.match(/.{1,4}/g)?.join(' ') || '';
        
        e.target.value = formatted;
        displaynumber.textContent = formatted || '4123 5678 9101 1121';
    });

    inputname.addEventListener('input', (e) => {
        let val = e.target.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');
        
        e.target.value = val;
        displayname.textContent = val.trim() || 'Andres Jeriel Cruz Resendiz';
    });

    inputcvv.addEventListener('focus', () => {
        cardinner.classList.add('is-flipped');
    });

    inputcvv.addEventListener('blur', () => {
        cardinner.classList.remove('is-flipped');
    });

    inputcvv.addEventListener('input', (e) => {
        let val = e.target.value.replace(/\D/g, '');
        e.target.value = val;
        displaycvv.textContent = val || '***';
    });

    inputmonth.addEventListener('change', updateexpiry);
    inputyear.addEventListener('change', updateexpiry);

    /* --- lógica del modal de éxito --- */
    const btnpay = document.querySelector('#btn-pay');
    const successmodal = document.querySelector('#success-modal');
    const closemodal = document.querySelector('#close-modal');

    // abrir el modal al hacer clic en pagar
    btnpay.addEventListener('click', () => {
        successmodal.classList.add('active');
    });

    // cerrar el modal con la 'x'
    closemodal.addEventListener('click', () => {
        successmodal.classList.remove('active');
    });

    // cerrar el modal si se hace clic fuera de la caja
    successmodal.addEventListener('click', (e) => {
        if (e.target === successmodal) {
            successmodal.classList.remove('active');
        }
    });
});