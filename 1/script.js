/*
    1 : get the buttons in the accardion
    2 : when any button clicked
    2-1 : check if any div has "show" class remove it
    2-2 : if clicked button !un contain "show" class remove all classes and then add "show" to button that clicked
*/
// 1
const accardionbtns = document.querySelectorAll('.accardion-container button');
// 2
accardionbtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        // 2-1
        if (e.target.classList.contains('show')) {
            e.target.classList.remove('show');
            return
        }
        // 2-2
        if (!e.target.classList.contains('show')) {
            for (let i = 0; i < accardionbtns.length; i++) {
                accardionbtns[i].classList.remove('show')
            }
            e.target.classList.add('show');
        }
    })
})