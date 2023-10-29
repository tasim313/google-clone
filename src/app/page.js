import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
import Image from "next/image";
import React from "react";

const Home = () =>{
 
  return(
    <>
    {/* Header section */}
    <HomeHeader/>

    {/* Body section */}
    <div className="flex flex-col items-center mt-24">
        <Image
         width="300"
         height="100"
         src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png'
         alt="image is not found"
        />
        <HomeSearch></HomeSearch>
    </div>
    </>
  )
}

export default Home;