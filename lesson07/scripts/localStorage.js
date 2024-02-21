const input = document.querySelector("#favchap");
input.focus();
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapters() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener('click', () => {
    if (input.value != '') {  
      displayList(input.value);
      chaptersArray.push(input.value);
      setChapters(); 
      input.value = ''; 
      input.focus(); 
    }
});

function displayList(item) {
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    li.textContent = item; 
    deletebutton.textContent = '❌';
    deletebutton.classList.add('delete'); 
    li.append(deletebutton);
    list.append(li);
    deletebutton.addEventListener('click', function () {
    list.removeChild(li);
    deleteChapter(li.textContent)
    input.focus()
    });
}

function setChapters() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}
function getChapters() {
  return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1);
  chaptersArray = chaptersArray.filter(item => item !== chapter);
  setChapters();
}


// button.addEventListener('click',()=> {
//     if (input.value !== "") {
//             input.focus();
//     } else {
//         input.focus();
//     }
//     const li = document.createElement("li");
//     const deleteButtom =document.createElement("button");
//     li.innerHTML = input.value;
//     deleteButtom.textContent = "❌";
//     li.append(deleteButtom);
//     list.append(li);
//     deleteButtom.addEventListener('click',() => {
//         list.removeChild(li)
//         input.focus();
//     })
//     input.value = " ";
// })