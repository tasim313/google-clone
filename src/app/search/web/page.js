import React from "react";

const Next_SEARCH_KEY = "AIzaSyBsBIGPrHhQTw3QS2PacCbwoqJ5vdgS9YE"

const CONTEXT_KEY = "269ff30ac5eed49c3"

async function WebSearchPage ({ searchParams }){

    const startIndex = searchParams.start || "1";

    const response = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.SEARCH_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}}&start=${startIndex}`
    );

    const data = await response.json();

    const results = data.items;

    console.log(results)

    return(
        <>
        <div>
            {results && results.map(result =><h1>{result.title}</h1>)}
        </div>
        </>
    )
}

export default WebSearchPage;