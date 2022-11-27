import { useState } from "react";

const Form = ({ onAdd }) => {
  const [title, setTitle] = useState(""),
    [author, setAuthor] = useState(""),
    [isbn, setIsbn] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!title) {
      alert("Please enter a title");
      return;
    }
    onAdd({ title, author, isbn });

    setTitle("");
    setAuthor("");
    setIsbn("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="bookTitle" className="form-label">
          Title
        </label>
        <input
          type="text"
          name="bookTitle"
          id="bookTitle"
          className="form-control"
          placeholder="Enter the title of the book"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="bookAuthor" className="form-label">
          Author
        </label>
        <input
          type="text"
          name="bookAuthor"
          id="bookAuthor"
          className="form-control"
          placeholder="Enter the name of the book author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="bookIsbn" className="form-label">
          ISBN
        </label>
        <input
          type="number"
          name="bookIsbn"
          id="bookIsbn"
          className="form-control"
          placeholder="Enter the ISBN of the book"
          value={isbn}
          onChange={(e) => setIsbn(e.target.value)}
        />
      </div>
      <div className="d-grid">
        <button className="btn btn-primary" type="submit">
          Add To List
        </button>
      </div>
    </form>
  );
};

export default Form;
