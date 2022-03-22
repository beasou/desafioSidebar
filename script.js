function toggle(){
    const menu = document.querySelector('.sidebar')

    const resultado = menu.classList.contains('active')
    menu.classList.toggle('active', !resultado)
}