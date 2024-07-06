import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
// if own asset, need to provide the path to the asset
import './index.css';

const firstBook = {
    title: "The Women: A Novel",
    author: "Kristin Hannah",
    imgUrl: "https://images-na.ssl-images-amazon.com/images/I/913C+MR3S5L._AC_UL900_SR900,600_.jpg"
}
const secondBook = {
    title: "Reckless (The Powerless Trilogy)",
    author: "Lauren Roberts",
    imgUrl: "https://images-na.ssl-images-amazon.com/images/I/81q6ecxcZUL._AC_UL900_SR900,600_.jpg"
}


const BookList = () => {
    return (
        <section className="booklist">
            <Book title={firstBook.title} author={firstBook.author} imgUrl={firstBook.imgUrl}>
                <p>lorem ipsum</p>
                <button>Click me</button>
            </Book>
            <Book title={secondBook.title} author={secondBook.author} imgUrl={secondBook.imgUrl}/>
        </section>
    )
}

const Book = (props) => {
    const {title, author, imgUrl, children} = props;

    console.log(props);

    return (
        <article className="book">
            <img src={imgUrl} alt={title}/>
            <h2>{title}</h2>
            <h4>{author}</h4>
            {children}
        </article>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
<StrictMode>
    <BookList/>
</StrictMode>
);