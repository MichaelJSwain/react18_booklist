import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";


const BookList = () => {
    return (
        <section>
            <Book />
            <Book />
            <Book />
            <Book />
        </section>
    )
}

const Book = () => {
    return (
        <article>
            <Image/>
            <Title />
            <Author />
        </article>
    )
}

const Image = () => <h2>placeholder image</h2>
const Title = () => {
    return <h2>Book Title</h2>
}
const Author = () => <h4>Author</h4>

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
<StrictMode>
    <BookList/>
</StrictMode>
);