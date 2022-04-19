/* global showButton */
// hamburger

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));
// speakers

const album_1 = {
  name: 'The Getaway',
  release: '2016',
  description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  featuredImage: './assets/Images/album_10.jpg',
};

const album_2 = {
  name: 'Im With You',
  release: '2011',
  description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  featuredImage: './assets/Images/album_9.jpg',
};

const album_3 = {
  name: 'Stadium Arcadium',
  release: '2006',
  description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  featuredImage: './assets/Images/album_8.jpg',
};

const album_4 = {
  name: 'By the Way',
  release: '2002',
  description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  featuredImage: './assets/Images/album_7.jpg',
};

const album_5 = {
  name: 'Californication',
  release: '1999',
  description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  featuredImage: './assets/Images/album_6.jpg',
};

const album_6 = {
  name: 'One Hot Minute',
  release: '1995',
  description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  featuredImage: './assets/Images/album_5.jpg',
};

const album_7 = {
  name: 'Blood Sugar Sex Magik',
  release: '1991',
  description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  featuredImage: './assets/Images/album_4.jpg',
};

const album_8 = {
  name: "Mother's Milk",
  release: '1989',
  description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  featuredImage: './assets/Images/albumX.jpg',
};

const album_9 = {
  name: 'The Uplift Mofo Party Plan',
  release: '1987',
  description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  featuredImage: './assets/Images/album_3.jpg',
};

const album_10 = {
  name: 'Freaky Styley',
  release: '1985',
  description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  featuredImage: './assets/Images/album_2.jpg',
};

const album11 = {
  name: 'The Red Hot Chili Peppers',
  release: '1984',
  description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  featuredImage: './assets/Images/album_1.jpg',
};

const albumArray = [
  album_1,
  album_2,
  album_3,
  album_4,
  album_5,
  album_6,
  album_7,
  album_8,
  album_9,
  album_10,
  album11,
];

const generateTeam = () => {
  const placeTeam = document.querySelector('.cards-container');
  albumArray.forEach((cd) => {
    placeTeam.insertAdjacentHTML(
      'beforeend',
      `<li>
        <div>
        <img class="cdfront" src="${cd.featuredImage}" alt="${cd.name}">
        </div>
        <div class="description">
          <h3>${cd.name}</h3>
          <h4>${cd.release} </h4>
          <hr>
          <p>${cd.description}</p>
        </div>
    </li>`,
    );
  });
};
document.addEventListener('DOMContentLoaded', () => {
  generateTeam();
});

// show more or less

const content = document.querySelector('.content');
const buttonMore = document.querySelector('.button .show-more');
const buttonLess = document.querySelector('.button .show-less');
const button = document.querySelector('.button');
const arrowIcon = document.querySelector('.button .fas');

const initial = {
  showAllContent: true,
};

button.addEventListener('click', () => {
  const defaultValue = {
    element: arrowIcon,
    currentIcon: 'fa-shell-down',
    newIcon: 'fa-chevron-up',
  };

  function changeIcon(value) {
    const { element, currentIcon, newIcon } = value;

    element.classList.add(newIcon);
    element.classList.remove(currentIcon);
  }

  if (initial.showAllContent) {
    showButton(buttonLess);
    showButton(buttonMore, false);
    content.classList.remove('gradient', 'maxHeight');
  } else {
    showButton(buttonLess, false);
    showButton(buttonMore);

    defaultValue.currentIcon = 'fa-chevron-up';
    defaultValue.newIcon = 'fa-shell-down';

    content.classList.add('gradient', 'maxHeight');
  }

  changeIcon(defaultValue);
  initial.showAllContent = !initial.showAllContent;
});
