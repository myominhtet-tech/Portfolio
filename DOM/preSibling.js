const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');

const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');

const listUl = document.querySelector('ul');

// document.addEventListener('click', (event) => {
//     console.log(event.target);
// });

listUl.addEventListener('click', (event) => {
    if (event.target.tagName == 'BUTTON') {

        if (event.target.className == 'remove') {

            let li = event.target.parentNode;
            let ul = li.parentNode;
            ul.removeChild(li);

        }
        if (event.target.className == 'up') {

            let li = event.target.parentNode;
            let prevLi = li.previousElementSibling;
            let ul = li.parentNode;
            if (prevLi) {
                ul.insertBefore(li, prevLi);
            }

        }
    }
});



toggleList.addEventListener('click', () => {
    if (listDiv.style.display == 'none') {
        listDiv.style.display = 'block';
        toggleList.textContent = 'Hide list';
    } else {
        listDiv.style.display = 'none';
        toggleList.textContent = 'Show list';
    }
});

descriptionButton.addEventListener('click', () => {
    descriptionP.innerHTML = descriptionInput.value + ':';
    descriptionInput.value = '';
});

addItemButton.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.createElement('li');
    li.textContent = addItemInput.value;

    ul.appendChild(li);
    addItemInput.value = '';
});