

const NumPad = () =>{
  
    //onenter


    return (
        <>
        <div className="flex justify-center mb-1">
        {[1,2,3].map((num) => {
            return(
                <p key={num}>{num}</p>
            )
        })}
        </div>

       <div className="flex justify-center mb-1">
        {[4,5,6].map((num) => {
            return(
                <p key={num}>{num}</p>
            )
        })}
        </div>

        <div className="flex justify-center mb-1">{[7,8,9].map((num) => {
            return(
                <p key={num}>{num}</p>
            )
        })}
        </div>

       </>

    )
};



export default NumPad;