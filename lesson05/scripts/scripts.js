const input = document.querySelector("input");
input.focus();
const button = document.querySelector('button');
const list = document.querySelector('#list');


button.addEventListener('click',()=> {
    if (input.value !== "") {
            input.focus();
    } else {
        input.focus();
    }
    const li = document.createElement("li");
    const deleteButtom =document.createElement("button");
    li.innerHTML = input.value;
    deleteButtom.textContent = "❌";
    li.append(deleteButtom);
    list.append(li);
    deleteButtom.addEventListener('click',() => {
        list.removeChild(li)
        input.focus();
    })
    input.value = " ";
})