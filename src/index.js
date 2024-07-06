import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
// if own asset, need to provide the path to the asset
import './index.css';

const title = "The Women: A Novel";
const author = "Kristin Hannah";
const imgUrl = "https://images-na.ssl-images-amazon.com/images/I/913C+MR3S5L._AC_UL900_SR900,600_.jpg"

const BookList = () => {
    return (
        <section className="booklist">
            <Book title={title} author={author} imgUrl={imgUrl}/>
            <Book title={title} author={author} imgUrl={imgUrl}/>
        </section>
    )
}

const Book = (props) => {
    const {title, author, imgUrl} = props;

    return (
        <article className="book">
            <img src={imgUrl} alt={title}/>
            <h2>{title}</h2>
            <h4>{author}</h4>
        </article>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
<StrictMode>
    <BookList/>
</StrictMode>
);