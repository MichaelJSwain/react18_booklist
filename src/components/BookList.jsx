import Book from "./Book"

const BookList = ({books}) => {
    return (
        <>
            {books.map(book => {
                return <Book book={book}/>
            })}
        </>
    )
}