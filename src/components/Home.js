import React from "react";
import Search from "./Search";
import Main from "./Main";
const Home = () => {
    return(
    <>
        <header className="header">
            <Search />
        </header> 
        <main role="main" class="main">
            <Main /> 
        </main>
    </>
    )
}
export default Home ;