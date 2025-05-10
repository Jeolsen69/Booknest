function filterByGenre(genre) {
    alert(`Фильтрация по жанру: ${genre} (в разработке)`);
  }
  function filterBooks(category) {
    const books = document.querySelectorAll('.book-card');
  
    books.forEach(book => {
      if (category === 'all') {
        book.style.display = 'block';
      } else {
        if (book.classList.contains(category)) {
          book.style.display = 'block';
        } else {
          book.style.display = 'none';
        }
      }
    });
  }