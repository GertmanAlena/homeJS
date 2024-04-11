const lsViewingsIdKey = 'id';
const lsViewingsNameKey = 'title';
const lsViewingsValueKey = 'viewing';

function getViewing() {
    const viewings = [];
    for (let i = 0; i < localStorage.length; i++) {
        console.log(localStorage.key(i));
        let k = localStorage.key(i);
        console.log(localStorage.getItem(k));
        viewings.push(localStorage.getItem(k));
    }
    if (viewings.length <= 0) {
        return [];
    }
    return JSON.parse(viewings);
};
function addViewing(id, title, viewing) {
    const viewings = getViewing();
    viewings.push({ id, title, viewing });
    localStorage.setItem(id, JSON.stringify(viewings));
}

function uid() {
    return Math.random().toString(36).slice(2);
}

function deleteViewing(id) {
    const viewings = getViewing();
    viewings.forEach(viewing => {
        console.log(viewing.title);
        if (viewing.id === id) {
            localStorage.removeItem(id);
        }
    });
}

export { getViewing, addViewing, uid, deleteViewing };