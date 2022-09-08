
const Options = (props) =>{

    return(
        <ul>
            <button className="m-3 active:bg-slate-500"
                onClick={()=> props.setGameDifficulty("easy")}
            >easy</button>

            <button className="m-3 active:bg-slate-500"
                onClick={()=> props.setGameDifficulty("medium")}
            >medium</button>

            <button className="m-3 active:bg-slate-500"
                onClick={()=> props.setGameDifficulty("hard")}
            >hard</button>

        </ul>
    )
};

export default Options;
