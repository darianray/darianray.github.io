import React from "react";

function Home(){
    var newButton = 'new button :D';
    return(
        <div>
            <div> Hi, this is Home</div>
        <button onClick={console.log(newButton)}>Click</button>
        </div>
        
    )
}

export default Home;