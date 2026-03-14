document.addEventListener('DOMContentLoaded', () => {
    
    const inputnumber = document.querySelector('#input-number');
    const inputname = document.querySelector('#input-name');
    const inputmonth = document.querySelector('#input-month');
    const inputyear = document.querySelector('#input-year');
    const inputcvv = document.querySelector('#input-cvv');
    
    const displaynumber = document.querySelector('#display-number');
    const displayname = document.querySelector('#display-name');
    const displayexpiry = document.querySelector('#display-expiry');

    // --- nueva lógica para fecha actual ---
    const fechaactual = new Date();
    // obtenemos el mes (se suma 1 porque enero es 0) y aseguramos que tenga 2 dígitos
    const mesactual = String(fechaactual.getMonth() + 1).padStart(2, '0');
    // obtenemos los últimos 2 dígitos del año actual
    const anioactual = String(fechaactual.getFullYear()).substring(2);

    // asignamos los valores a los selectores
    inputmonth.value = mesactual;
    inputyear.value = anioactual;

    // actualización de fecha en la tarjeta
    const updateexpiry = () => {
        const mm = inputmonth.value;
        const yy = inputyear.value;
        displayexpiry.textContent = `${mm}/${yy}`;
    };

    // llamamos la función una vez al inicio para que la tarjeta muestre la fecha actual
    updateexpiry();
    // --------------------------------------

    // validación: solo números y formato con espacios
    inputnumber.addEventListener('input', (e) => {
        let val = e.target.value.replace(/\D/g, '');
        let formatted = val.match(/.{1,4}/g)?.join(' ') || '';
        
        e.target.value = formatted;
        displaynumber.textContent = formatted || '4123 5678 9101 1121';
    });

    // validación: solo letras
    inputname.addEventListener('input', (e) => {
        let val = e.target.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');
        
        e.target.value = val;
        displayname.textContent = val.trim() || 'Andres Jeriel Cruz Resendiz';
    });

    // validación: solo números para el cvv
    inputcvv.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D/g, '');
    });

    inputmonth.addEventListener('change', updateexpiry);
    inputyear.addEventListener('change', updateexpiry);
});