'use strict';

const inputElement = document.getElementById('firstInput');
const firstbtn = document.querySelector('.firstbtn');
const secondbtn = document.querySelector('.secondbtn');
const tabl = document.querySelector('.tabl');

if (inputElement) {
    inputElement.addEventListener('focus', () => {
        const showDiv = document.createElement('div');
        const textInDiv = document.createElement('p');
        textInDiv.textContent = 'Этот див для ввода текста';
        showDiv.appendChild(textInDiv);
        document.body.appendChild(showDiv);

        inputElement.addEventListener('blur', () => {
            document.body.removeChild(showDiv);
        });
    });
}

firstbtn.addEventListener('click', ()=>{
    let link = prompt('Enter your link');
    if (link && (link.startsWith('http://') || link.startsWith('https://'))) {
        secondbtn.addEventListener('click', ()=>{
            window.open(link, '_blank')
        })
    } else {
        document.body.removeChild(secondbtn);
    }
})

tabl.addEventListener('click', ()=>{
    let number = 1;

    for (let i = 0; i < 10; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < 10; j++) {
            const cell = document.createElement('td');
            cell.textContent = number++;
            row.appendChild(cell);
        }
        tabl.appendChild(row);
    }
})

const showRandomPhotoButton = document.getElementById("showRandomPhoto");
const randomPhotoElement = document.getElementById("randomPhoto");

const photoPaths = [
    "/img/1jpg.jpg",
    "/img/2.jpg",
    "/img/3.jpg",
    "/img/4.jpg",
    "/img/5.jpg",
    "/img/6.jpg",
    "/img/7.jpg",
    "/img/8.jpg",
    "/img/9.jpg",
    "/img/10.jpg",
];

function showRandomPhoto() {
    const randomIndex = Math.floor(Math.random() * photoPaths.length);
    const randomPhotoPath = photoPaths[randomIndex];
    randomPhotoElement.src = randomPhotoPath;
}
showRandomPhotoButton.addEventListener("click", showRandomPhoto);
