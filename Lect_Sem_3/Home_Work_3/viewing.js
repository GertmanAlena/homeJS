import { getViewing, uid, addViewing } from './storage.js';

const nameViewingEl = document.querySelector('.viewing__name');
const viewingEl = document.querySelector('.viewing');
const viewingBtnEl = document.querySelector('.viewing__button');

viewingBtnEl.addEventListener('click', () => {
    const name = nameViewingEl.value;
    const viewing = viewingEl.value;
    const id = uid();
    viewingBtnEl.id = id;
    if (name === "" || viewing === "") {
        alert('User already exists');
        return;
    }
    addViewing(id, name, viewing);
    location.href = "review.html";
});