window.onload = () => {
    // getting each piece put into variables
    const submitBtn = document.getElementById("submit-button");
    const submitFld = document.getElementById("submit-field");
    const taskLst = document.getElementById("task-list");

    // add item to list when clicking the 'add item' button 
    submitBtn.addEventListener("click", () => {
        const newItem = document.createElement('li');
        newItem.setAttribute("class", "task-item");
        // newItem.setAttribute("contenteditable", "true");
        newItem.innerHTML = `<span>${submitFld.value}</span>`;

        const deleteBtn = document.createElement('button');
        deleteBtn.setAttribute("class", "material-symbols-outlined");
        deleteBtn.setAttribute("onclick", "this.parentElement.remove()");
        deleteBtn.innerHTML = 'delete';

        const editBtn = document.createElement('button');
        editBtn.setAttribute("class", "material-symbols-outlined");
        editBtn.setAttribute("onclick", "makeEditable(this);");
        editBtn.innerHTML = 'edit';

        newItem.appendChild(editBtn);
        newItem.appendChild(deleteBtn);
        taskLst.appendChild(newItem);
        submitFld.value = '';
    });

}
    
// turn content of li into an editable input
function makeEditable(source) {
    source.innerHTML = 'save';
    source.setAttribute("onclick", "saveEditable(this);");
    let li = source.parentElement;
    let span = source.previousElementSibling;
    let content = span.innerHTML;
    let editField = document.createElement('input');
    editField.setAttribute("type", "text");
    editField.setAttribute("value", content);
    li.replaceChild(editField, span);
}

//save edited item back to li
function saveEditable(source) {
    source.innerHTML = 'edit';
    source.setAttribute("onclick", "makeEditable(this)");
    let li = source.parentElement;
    let input = source.previousElementSibling;
    let content = input.value;
    let newSpan = document.createElement('span');
    newSpan.innerHTML = content;
    li.replaceChild(newSpan, input);
}