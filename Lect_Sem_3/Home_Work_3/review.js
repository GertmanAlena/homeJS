import { getViewing, uid, deleteViewing } from './storage.js';

const viewingsEl = document.querySelector('.viewings');

const viewings = getViewing();
viewings.forEach(viewing => {
    const id = viewing.id;
    console.log(viewing.title);
    console.log(id);
    const productEl = document.createElement('div');
    productEl.id = id;
    productEl.classList.add('viewing');
    const productNameEl = document.createElement('h3');
    productNameEl.classList.add('viewing__name');
    productNameEl.textContent = viewing.title;
    const btnEl = document.createElement('button');
    btnEl.classList.add('viewing__button');
    btnEl.id = id;
    btnEl.textContent = 'показать отзывы';
    const btnDelEl = document.createElement('button');
    btnDelEl.classList.add('viewing__button__delete');
    btnDelEl.id = id;
    btnDelEl.textContent = 'удалить отзывы';

    viewingsEl.append(productEl)
    productEl.append(productNameEl, btnEl, btnDelEl);
});

const btnExitEl = document.querySelector('.viewing__buttonExit');
const buttonAll = document.querySelectorAll('.viewing__button');
const buttonDeleteAll = document.querySelectorAll('.viewing__button__delete');

buttonAll.forEach(button => {
    button.addEventListener('click', () => {
        const divEl = button.parentElement.querySelector('.viewing__name');
        if (button.textContent === 'показать отзывы') {
            viewings.forEach(viewing => {
                if (button.id === viewing.id) {
                    button.textContent = 'скрыть отзывы';
                    const ulEl = document.createElement('ul');
                    ulEl.classList.add('ul_viewing');
                    const liEl = document.createElement('li');
                    liEl.textContent = viewing.viewing;
                    ulEl.append(liEl);
                    divEl.append(ulEl);
                }
            });
        }
        else if (button.textContent === 'скрыть отзывы') {
            const ulViewingEl = document.querySelector('.ul_viewing');
            ulViewingEl.remove();
            button.textContent = 'показать отзывы';
        }
    });
});

btnExitEl.addEventListener('click', () => {
    location.href = "viewing.html";
});

buttonDeleteAll.forEach(button => {
    button.addEventListener('click', () => {
        console.log(button.id);
        viewings.forEach(viewing => {
            if (button.id === viewing.id) {
                const ulEl = document.querySelector('.ul_viewing');
                console.log();
                ulEl.remove();
                const divEl = document.querySelector('.viewing__name');
                divEl.remove();
                deleteViewing(button.id);
            }
        });
        alert('Отзыв удален');
    });
});
