import people from "./data.js";
import getElement from "./get.js";

const slideContainer = getElement('.slide-container');

const nextbtn = getElement('.next-btn');
const prevbtn = getElement('.prev-btn');

slideContainer.innerHTML = people.map((data, slideIndex) => {
    const { img, name, job, text } = data;
    let pos = 'next'
    if (slideIndex === 0) {
        pos = 'active';
    }
    if (slideIndex === people.length - 1) {
        pos = 'last';
    }
    return `<article class="slide ${pos}">
                <img src="${img}" class="img" alt="jane do">
                <h4>${name}</h4>
                <p class="title">${job}</p>
                <p class="text">${text}</p>
                <div class="quote-icon">
                    <i class="fas fa-quote-right"></i>
                </div>
            </article>`
}).join('');


const addclasses = (type) => {
    const active = getElement('.active');
    const last = getElement('.last');

    let next = active.nextElementSibling;

    if (!next) {
        next = slideContainer.firstElementChild;
    }
    active.classList.remove('active');
    next.classList.remove('next');
    last.classList.remove('last');


    if (type === 'prev') {
        active.classList.add('next');
        last.classList.add('active');
        next = last.previousElementSibling
        if (!next) {
            next = slideContainer.lastElementChild;
        }
        next.classList.remove('next');
        next.classList.add('last');
        return
    }

    active.classList.add('last');
    next.classList.add('active');
    last.classList.add('next');

}

nextbtn.addEventListener('click', function () {
    addclasses()
})

prevbtn.addEventListener('click', function () {
    addclasses('prev');
})

