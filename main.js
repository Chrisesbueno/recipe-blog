const checkedChange = document.getElementsByClassName('check') // Recuerda que los IDs son unicos, si quieres usar el mismo nombre usa las clases
const arrayCheck = [...checkedChange]; //Aqui guardas la collecion entera de los elementos con la clase check

arrayCheck.forEach(element => { // basicamente le estas diciendo que por cada elemento dentro del arrayCheck guarde su hermano en el textChange y luego escuche si su checkbox cambio, si esta checked pues cambie el estilo de su hermano
    const textChange = element.nextElementSibling
    element.addEventListener('change', function() {
        textChange.style.textDecoration = this.checked ? 'line-through' : 'initial'
    })
});

console.log(arrayCheck)