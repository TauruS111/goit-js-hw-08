
  const booksList = document.querySelector('.books-list');
  const modal = document.querySelector('.modal');
  const modalContent = document.querySelector('.modal-content');

  // Функція для відображення повідомлення про помилку за допомогою Notiflix
  function showErrorNotification(message) {
    Notiflix.Notify.Failure(message);
  }

  // Функція для отримання книг за вказаною категорією з сервера за допомогою Axios
  function getBooksByCategory(category) {
    axios.get(`https://books-backend.p.goit.global/books/category?category=${category}`)
      .then(response => {
        const books = response.data.books;
        displayBooks(books);
      })
      .catch(error => {
        showErrorNotification('Помилка при отриманні даних з сервера.');
        console.error(error);
      });
  }

  // Функція для відображення книг на сторінці
  function displayBooks(books) {
    booksList.innerHTML = '';
    books.forEach(book => {
      const bookItem = document.createElement('li');
      bookItem.className = 'books-item';
      bookItem.innerHTML = `
        <img class="books-img" src="${book.coverImageUrl}" alt="Обкладинка книги" />
        <h2 class="books-title">${book.title}</h2>
        <p class="books-author">${book.author}</p>
        <button class="book-details-button" data-bookid="${book.id}">SEE MORE</button>
      `;
      booksList.appendChild(bookItem);
    });

    // Додати обробник події для кнопок "See more"
    const seeMoreButtons = document.querySelectorAll('.book-details-button');
    seeMoreButtons.forEach(button => {
      button.addEventListener('click', () => {
        const bookId = button.getAttribute('data-bookid');
        getBookDetails(bookId);
      });
    });
  }

  // Функція для отримання деталей про книгу за допомогою Axios
  function getBookDetails(bookId) {
    axios.get(`https://books-backend.p.goit.global/books/${bookId}`)
      .then(response => {
        const book = response.data;
        showModal(book);
      })
      .catch(error => {
        showErrorNotification('Помилка при отриманні деталей про книгу.');
        console.error(error);
      });
  }

  // Функція для відображення модального вікна з детальною інформацією про книгу
  function showModal(book) {
    modalContent.innerHTML = `
      <h2>${book.title}</h2>
      <p>${book.author}</p>
      <img src="${book.coverImageUrl}" alt="Обкладинка книги" />
      <p>${book.description}</p>
    `;
    modal.style.display = 'block';
  }

  // ... (додатковий код для обробки подій кнопок та логотипів благодійних фондів, як ви потребуєте)


