import TableRow from "./row";

const Table = ({ books, onDelete }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Author</th>
          <th scope="col">ISBN</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <TableRow key={book.id} book={book} onDelete={onDelete} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
