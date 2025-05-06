window.onload = () => {
    // getting each piece put into variables
    const submitBtn = document.getElementById("submit-button");
    const submitFld = document.getElementById("submit-field");
    const taskLst = document.getElementById("task-list");

    submitBtn.addEventListener("click", () => {
        const newItem = document.createElement('li');
        const remove = document.createElement('button');
        remove.setAttribute("class", "material-symbols-outlined");
        const edit = document.createElement('button');
        edit.setAttribute("class", "material-symbols-outlined");
        remove.innerHTML = 'delete';
        edit.innerHTML = 'edit';
        newItem.setAttribute("class", "task-item");
        newItem.innerHTML = `${submitFld.value}`;
        newItem.appendChild(remove);
        newItem.appendChild(edit);
        taskLst.appendChild(newItem);
        submitFld.value = '';
    });
};