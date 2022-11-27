import React from "react";

const TableRow = ({ book, onDelete }) => {
  return (
    <tr>
      <th scope="row">{book.id}</th>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.isbn}</td>
      <td onClick={() => onDelete(book.id)}>
        <i className="fa-solid fa-trash-can"></i>
      </td>
    </tr>
  );
};

export default TableRow;
