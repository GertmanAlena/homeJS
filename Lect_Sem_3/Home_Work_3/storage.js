const lsViewingsNameKey = 'name';
const lsViewingsValueKey = 'viewing';
function getViewing() {
    const viewings = localStorage.getItem(lsViewingsNameKey);
    if (!viewings) {
        return [];
    }
    return JSON.parse(viewings);
};
function addViewing(name, viewing) {
    const viewings = getViewing();
    viewings.push({ name, viewing });
    localStorage.setItem(lsViewingsNameKey, JSON.stringify(viewings));
}

function uid() {
    return Math.random().toString(36).slice(2);
}

function deleteViewing(a) {
    const viewings = getViewing();
    viewings.forEach(viewing => {
        console.log(viewing.name);
        if (viewing.name === a) {
            // localStorage.removeItem();
            console.log(viewing.viewing);
        }
    });
    // if (!viewings.some(viewing => viewing.name === a)) {
    //     throw new Error('Invalid login or password');
    // }
    // localStorage.removeItem(a);
    
}

export { getViewing, addViewing, uid, deleteViewing };