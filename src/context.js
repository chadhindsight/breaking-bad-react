import React, { useState, useEffect } from "react";
import axios from "axios";

export const Context = React.createContext();

export function ContextController({ children }) {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const [query, setQuery] = useState('')

    useEffect(() => {
        // You cant put an async function directly on useEffect so that's why we have fetchItems
        const fetchItems = async () => {
            setIsLoading(true)
            const result = await axios(
                `https://www.breakingbadapi.com/api/characters?name=${query}`
            )

            console.log(result.data)

            setItems(result.data)
            setIsLoading(false)
        }

        fetchItems()
    }, [query])

    return (
        <Context.Provider value={{ value: [items, setItems], value2: [isLoading], value3: [query, setQuery] }}>{children}</Context.Provider>
    );
}