import { getViewing, addViewing } from './storage.js';

const nameViewingEl = document.querySelector('.viewing__name');
const viewingEl = document.querySelector('.viewing');
const viewingBtnEl = document.querySelector('.viewing__button');

viewingBtnEl.addEventListener('click', () => {
    const name = nameViewingEl.value;
    const viewing = viewingEl.value;
    const viewings = getViewing();
    if (name === "" || viewing === "") {
        alert('User already exists');
        return;
    }
    addViewing(name, viewing);
    location.href = "review.html";
});