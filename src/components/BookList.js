import BookShow from './BookShow';

function BookList({ books, onEdit, onDelete }) {
  const reneredBooks = books.map((book) => (
    <BookShow onEdit={onEdit} onDelete={onDelete} key={book.id} book={book} />
  ));

  return <div className="book-list">{reneredBooks}</div>;
}

export default BookList;
