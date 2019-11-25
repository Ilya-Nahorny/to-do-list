let tds = document.querySelectorAll('td');
let myModal = document.getElementById('myModal');
let closeModal = document.getElementById('close-modal');

let modalWindow = function(){
    for(i = 0; i<tds.length;i++){
        console.log(tds[i])
        tds[i].addEventListener('dblclick', function(){
            myModal.classList.toggle('modal-open');
        })
        closeModal.addEventListener('click', function(){
            myModal.classList.toggle('modal-open');
        })
    }
} 

modalWindow();