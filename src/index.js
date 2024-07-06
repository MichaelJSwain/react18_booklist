import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
// if own asset, need to provide the path to the asset
import './index.css';


const BookList = () => {
    return (
        <section className="booklist">
            <Book />
            <Book />
            <Book />
            <Book />
        </section>
    )
}

const Book = () => {
    return (
        <article className="book">
            <Image/>
            <Title />
            <Author />
        </article>
    )
}

const Image = () => <img src='https://images-na.ssl-images-amazon.com/images/I/913C+MR3S5L._AC_UL900_SR900,600_.jpg' alt='The Women: A Novel'/>
const Title = () => {
    return <h2>The Women: A Novel</h2>
}
const Author = () => <h4>Kristin Hannah</h4>

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
<StrictMode>
    <BookList/>
</StrictMode>
);