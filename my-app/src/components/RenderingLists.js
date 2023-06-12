import React from 'react'
import Book from './book'

function RenderingLists() {
    const bookList = [
        'mockingbird',
        'gatsby',
        'catcher'
    ]

    const books = [
        {
            title: 'mockingbird',
            author: 'harper lee',
            pages: 281
        },
        {
            title: 'gatsby',
            author: 'fitzgerald',
            pages: 218
        },
        {
            title: 'catcher',
            author: 'salinger',
            pages: 234
        }
    ]
    return (
        <div>
            {bookList.map(book => {
                return <h2 key={book}>{book}</h2>
            })}
            <hr/>
            {
                books.map(book => {
                    return (
                        <div key={book.title}>
                            <h5>
                                {book.title}
                            </h5>
                            <p>
                                {book.author}
                            </p>
                            <p>
                                {book.pages}
                            </p>
                        </div>
                    )
                })
            }
            <hr/>
            {
                books.map(book => {
                    return <Book key={book.title} book={book}/>
                })
            }
        </div>
    )
}

export default RenderingLists