import { useState } from "react";


const Options = () =>{

    const [difficulty, setDifficulty] = useState("easy");

    return(
        <ul>
            <button className="m-3"
                onClick={()=>setDifficulty("easy")}
            >easy</button>

            <button className="m-3"
                onClick={()=>setDifficulty("medium")}
            >medium</button>

            <button className="m-3"
                onClick={()=>setDifficulty("hard")}
            >hard</button>

        </ul>
    )
};

export default Options;
