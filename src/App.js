import Form from "./components/form";
import Table from "./components/table";
import Pagination from "./components/pagination";
import { useState, useEffect } from "react";

function App() {
  // fetch all books from the database
  const [books, setBooks] = useState([]);
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
    setLoading(false);
  }, []);

  // add a book to the list
  function addBook(book) {
    fetch("http://localhost:5000/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book),
    })
      .then((res) => res.json())
      .then((data) => {
        setBooks([...books, data]);
      });
  }

  // delete a book from the list
  function deleteBook(id) {
    fetch(`http://localhost:5000/books/${id}`, {
      method: "DELETE",
    }).then(() => {
      setBooks(books.filter((book) => book.id !== id));
    });
  }

  // limit the number of books displayed on the page & add pagination
  const [currentPage, setCurrentPage] = useState(1),
    [loading, setLoading] = useState(false),
    [booksPerPage] = useState(5),
    indexOfLastBook = currentPage * booksPerPage,
    indexOfFirstBook = indexOfLastBook - booksPerPage,
    currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  // add a search bar to filter the books by title, author, or ISBN
  function searchBooks(query) {
    fetch(`http://localhost:5000/books`)
      .then((res) => res.json())
      .then((data) =>
        setBooks(
          data.filter(
            (book) =>
              book.title.includes(query) ||
              book.author.includes(query) ||
              book.isbn.includes(query)
          )
        )
      );
  }

  return (
    <div className="container">
      <div className="row">
        <h1>Book List</h1>
        <Form onAdd={addBook} />
      </div>
      <br />
      <br />
      <div className="row">
        <input
          type="text"
          placeholder="Filter by book title, author, or ISBN"
          onKeyUp={(e) => searchBooks(e.target.value)}
        />
      </div>
      <br />
      <div className="row">
        <Table books={currentBooks} onDelete={deleteBook} />
      </div>
      <br />
      <div className="row">
        <Pagination
          setCurrentPage={setCurrentPage}
          totalBooks={books.length}
          booksPerPage={booksPerPage}
        />
      </div>
    </div>
  );
}

export default App;
