import React from 'react'

export default function Header({ title, children }) {
    return(
        <header>
            <h1>{title? title : "Titulo Vazio"}</h1>
            {children}
        </header>
    )
}