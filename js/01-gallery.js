const foundationList = document.querySelector(".foundations-list");

const foundations = [
    {
        title: 'Save the Children',
        url:
            'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
        img: "./img/supports logo/support_9.png",
    },
    {
        title: 'Project HOPE',
        url: 'https://www.projecthope.org/country/ukraine/',
        img: "./img/supports logo/support_1.png",
    },
    {
        title: 'UNITED24',
        url: 'https://u24.gov.ua/uk',
        img: "./img/supports logo/support_2.png",
    },
    {
        title: 'International Medical Corps',
        url: 'https://internationalmedicalcorps.org/country/ukraine/',
        img: "./img/supports logo/support_3.png",
    },
    {
        title: 'Medicins Sans Frontieres',
        url: 'https://www.msf.org/ukraine',
        img: "./img/supports logo/support_4.png",
    },
    {
        title: 'RAZOM',
        url: 'https://www.razomforukraine.org/',
        img: "./img/supports logo/support_5.png",
    },
    {
        title: 'Action against hunger',
        url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
        img: "./img/supports logo/support_6.png",
    },
    {
        title: 'World vision',
        url: 'https://www.wvi.org/emergencies/ukraine',
        img: "./img/supports logo/support_7.png",
    },
    {
        title: 'Serhiy Prytula Charity Foundation',
        url: 'https://prytulafoundation.org/en',
        img: "./img/supports logo/support_8.png"
    },
];
const Murkup = foundations.map((elem, index, arr) => ` <li class="support-foundation">
      <span>0${index + 1}</span>
     <a href="${elem.url}" target="_blank"> <img class="foundation-logo" src="${elem.img}" alt="${elem.title}"></a>
    </li>`).join("");
foundationList.insertAdjacentHTML("afterbegin", Murkup);

const supportBtn = document.querySelector(".support-slider-button");
supportBtn.addEventListener('click', handlerSupport);
let up = false;
 supportBtn.innerHTML = `  <svg with="20" height="20"><use href="../img/sprite.svg#icon-down-arrow"></use></svg>`;
function handlerSupport() {
    if (!up) {
        foundationList.scrollBy(0, 300);
        if (foundationList.scrollTop + foundationList.offsetHeight >= foundationList.scrollHeight) {
            supportBtn.innerHTML = `  <svg with="20" height="20"><use href="../img/sprite.svg#icon-up-arrow"></use></svg>`;
            up = true;
            return;
        }
    }
  
    if (up) {
        foundationList.scrollBy(0, -300);
        if (foundationList.scrollTop === 0) {
            supportBtn.innerHTML = `  <svg with="20" height="20"><use href="../img/sprite.svg#icon-down-arrow"></use></svg>`;
            up = false;
            return;
    }
  }
}
// const openModalBtn = document.getElementById('openModalBtn');
// const modal = document.querySelector('.author-win');
// const signUpBtn = document.querySelector('.toggle-btn-up');
// const signInBtn = document.querySelector('.toggle-btn-in');
// const closeModalBtn = document.querySelector('.btn-close');
// const submitBtn = document.querySelector('.submit');
// const form = document.querySelector('.form-win');
// const userNameInput = document.getElementById('user-name');
// const emailInput = document.getElementById('e-mail');
// const passwordInput = document.getElementById('password');

// openModalBtn.addEventListener('click', () => {
//   modal.classList.remove('is-hidden');
//   signUpBtn.classList.add('active');
//   submitBtn.textContent = 'SIGN UP';
// });

// closeModalBtn.addEventListener('click', () => {
//   modal.classList.add('is-hidden');
//   signUpBtn.classList.remove('active');
//   signInBtn.classList.remove('active');
//   submitBtn.textContent = 'SIGN UP';
//   clearInputs();
// });

// signUpBtn.addEventListener('click', () => {
//   signUpBtn.classList.add('active');
//   signInBtn.classList.remove('active');
//   submitBtn.textContent = 'SIGN UP';
// });

// signInBtn.addEventListener('click', () => {
//   signInBtn.classList.add('active');
//   signUpBtn.classList.remove('active');
//   submitBtn.textContent = 'SIGN IN';
// });

// form.addEventListener('submit', (e) => {
//   e.preventDefault();

//   const userNameValue = userNameInput.value.trim();
//   const emailValue = emailInput.value.trim();
//   const passwordValue = passwordInput.value.trim();

//   if (userNameValue === '' || emailValue === '' || passwordValue === '') {
//     alert('Заповніть усі поля ');
//     return;
//   }

//   // Save data to local storage or perform other actions as needed

//   // Clear input fields
//   clearInputs();

//   alert('Відправлено!');
// });

// function clearInputs() {
//   userNameInput.value = '';
//   emailInput.value = '';
//   passwordInput.value = '';
// }

// const openModalBtn = document.getElementById('openModalBtn');
// const modal = document.querySelector('.author-win');
// const signUpBtn = document.querySelector('.toggle-btn-up');
// const signInBtn = document.querySelector('.toggle-btn-in');
// const closeModalBtn = document.querySelector('.btn-close');
// const submitBtn = document.querySelector('.submit');
// const form = document.querySelector('.form-win');
// const userNameInput = document.getElementById('user-name');
// const emailInput = document.getElementById('e-mail');
// const passwordInput = document.getElementById('password');

// openModalBtn.addEventListener('click', () => {
//   modal.classList.remove('is-hidden');
//   signUpBtn.classList.add('active');
//   submitBtn.textContent = 'SIGN UP';
// });

// closeModalBtn.addEventListener('click', () => {
//   modal.classList.add('is-hidden');
//   signUpBtn.classList.remove('active');
//   signInBtn.classList.remove('active');
//   submitBtn.textContent = 'SIGN UP';
// });

// signUpBtn.addEventListener('click', () => {
//   signUpBtn.classList.add('active');
//   signInBtn.classList.remove('active');
//   submitBtn.textContent = 'SIGN UP';
// });

// signInBtn.addEventListener('click', () => {
//   signInBtn.classList.add('active');
//   signUpBtn.classList.remove('active');
//   submitBtn.textContent = 'SIGN IN';
// });

// form.addEventListener('submit', (e) => {
//   e.preventDefault();

//   const userNameValue = userNameInput.value.trim();
//   const emailValue = emailInput.value.trim();
//   const passwordValue = passwordInput.value.trim();

//   if (userNameValue === '' || emailValue === '' || passwordValue === '') {
//     alert('Please fill in all fields');
//     return;
//   }

//   // Save data to local storage
//   const userData = {
//     userName: userNameValue,
//     email: emailValue,
//     password: passwordValue,
//   };

//   // Assuming you want to store multiple entries in an array
//   const storedData = JSON.parse(localStorage.getItem('userData')) || [];
//   storedData.push(userData);
//   localStorage.setItem('userData', JSON.stringify(storedData));

//   // Clear input fields
//   userNameInput.value = '';
//   emailInput.value = '';
//   passwordInput.value = '';

// });///////////////////////////////////////////////

// const openModalBtn = document.getElementById('openModalBtn');
// const modal = document.querySelector('.author-win');
// const signUpBtn = document.querySelector('.toggle-btn-up');
// const signInBtn = document.querySelector('.toggle-btn-in');
// const closeModalBtn = document.querySelector('.btn-close');
// const submitBtn = document.querySelector('.submit');

// openModalBtn.addEventListener('click', () => {
//   modal.classList.remove('is-hidden');
//   signUpBtn.classList.add('active');
//   submitBtn.textContent = 'SIGN UP';
// });

// closeModalBtn.addEventListener('click', () => {
//   modal.classList.add('is-hidden');
//   signUpBtn.classList.remove('active');
//   signInBtn.classList.remove('active');
//   submitBtn.textContent = 'SIGN UP';
// });

// signUpBtn.addEventListener('click', () => {
//   signUpBtn.classList.add('active');
//   signInBtn.classList.remove('active');
//   submitBtn.textContent = 'SIGN UP';
// });

// signInBtn.addEventListener('click', () => {
//   signInBtn.classList.add('active');
//   signUpBtn.classList.remove('active');
//   submitBtn.textContent = 'SIGN IN';
// });

  // const booksList = document.querySelector('.books-list');
  // const modal = document.querySelector('.modal');
  // const modalContent = document.querySelector('.modal-content');

  // // Функція для відображення повідомлення про помилку за допомогою Notiflix
  // function showErrorNotification(message) {
  //   Notiflix.Notify.Failure(message);
  // }

  // // Функція для отримання книг за вказаною категорією з сервера за допомогою Axios
  // function getBooksByCategory(category) {
  //   axios.get(`https://books-backend.p.goit.global/books/category?category=${category}`)
  //     .then(response => {
  //       const books = response.data.books;
  //       displayBooks(books);
  //     })
  //     .catch(error => {
  //       showErrorNotification('Помилка при отриманні даних з сервера.');
  //       console.error(error);
  //     });
  // }

  // // Функція для відображення книг на сторінці
  // function displayBooks(books) {
  //   booksList.innerHTML = '';
  //   books.forEach(book => {
  //     const bookItem = document.createElement('li');
  //     bookItem.className = 'books-item';
  //     bookItem.innerHTML = `
  //       <img class="books-img" src="${book.coverImageUrl}" alt="Обкладинка книги" />
  //       <h2 class="books-title">${book.title}</h2>
  //       <p class="books-author">${book.author}</p>
  //       <button class="book-details-button" data-bookid="${book.id}">SEE MORE</button>
  //     `;
  //     booksList.appendChild(bookItem);
  //   });

  //   // Додати обробник події для кнопок "See more"
  //   const seeMoreButtons = document.querySelectorAll('.book-details-button');
  //   seeMoreButtons.forEach(button => {
  //     button.addEventListener('click', () => {
  //       const bookId = button.getAttribute('data-bookid');
  //       getBookDetails(bookId);
  //     });
  //   });
  // }

  // // Функція для отримання деталей про книгу за допомогою Axios
  // function getBookDetails(bookId) {
  //   axios.get(`https://books-backend.p.goit.global/books/${bookId}`)
  //     .then(response => {
  //       const book = response.data;
  //       showModal(book);
  //     })
  //     .catch(error => {
  //       showErrorNotification('Помилка при отриманні деталей про книгу.');
  //       console.error(error);
  //     });
  // }

  // // Функція для відображення модального вікна з детальною інформацією про книгу
  // function showModal(book) {
  //   modalContent.innerHTML = `
  //     <h2>${book.title}</h2>
  //     <p>${book.author}</p>
  //     <img src="${book.coverImageUrl}" alt="Обкладинка книги" />
  //     <p>${book.description}</p>
  //   `;
  //   modal.style.display = 'block';
  // }

  // ... (додатковий код для обробки подій кнопок та логотипів благодійних фондів, як ви потребуєте)

// Wait for the DOM to be fully loaded



