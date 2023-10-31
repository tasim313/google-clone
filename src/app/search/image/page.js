import React from "react"
import Link from "next/link";
import ImageSearchResults from "@/components/ImageSearchResults";

const Next_SEARCH_KEY = "AIzaSyBsBIGPrHhQTw3QS2PacCbwoqJ5vdgS9YE"

const CONTEXT_KEY = "269ff30ac5eed49c3"

async function ImageSearchPage ({ searchParams }){

    const startIndex = searchParams.start || "1";

    await new Promise((resolve) => setTimeout(resolve, 2000));

    const response = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.SEARCH_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}}&searchType=image&start=${startIndex}`
    );

    if(!response.ok){
        console.log("response", response)
        throw new Error("Something went wrong")
    }

    const data = await response.json();

    const results = data.items;


    if(!results){
        return (
            <div className="flex flex-col justify-center items-center pt-10">
                <h1 className="text-3xl mb-4">No result found</h1>
                <p className="text-lg">Try searching for something else or go back to the homepage {" "}</p>
                <Link href="/" className="text-blue-500">Home</Link>
            </div>
        )
    }
    return(
        <>
        <div>
            {results && <ImageSearchResults results={data}/>}
        </div>
        </>
    )
}

export default ImageSearchPage;