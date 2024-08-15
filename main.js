// modal
const modal = document.querySelector('.modal-container');
const modalContent = document.querySelector('.modal-content');

// open
document.querySelector('.hero__btn').addEventListener('click', () => {
    modal.classList.add('show-modal');

    setTimeout(()=>{
        modalContent.classList.add('modal-increase');
    }, 200);
});

// close
document.querySelector('.modal__button').addEventListener('click', () => {
    modalContent.classList.remove('modal-increase');


    setTimeout(()=>{
        modal.classList.remove('show-modal');
    }, 200);
});