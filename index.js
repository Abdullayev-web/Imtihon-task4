let btn = document.querySelector('button')
let time = document.querySelector('h1')
btn.addEventListener('click', ()=>{
    setInterval(()=>{
        let vaqt = new Date()
        let soat = vaqt.getHours()
        let minut = vaqt.getMinutes()
        let sekund = vaqt.getSeconds()
        time.innerHTML = `${soat} : ${minut} : ${sekund}`
        console.log('hello');
    }, 1000)
})