
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
  function searchBooks() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const books = document.querySelectorAll('.book-card');
    let found = 0;
  
    books.forEach(book => {
      const title = book.querySelector('h3').innerText.toLowerCase();
      const author = book.querySelector('p').innerText.toLowerCase();
  
      if (title.includes(query) || author.includes(query)) {
        book.style.display = 'block';
        found++;
      } else {
        book.style.display = 'none';
      }
    });
  
    const msg = document.getElementById('noResultsMessage');
    msg.style.display = found === 0 ? 'block' : 'none';
  }