const Num =(props) =>{
    const onClick = (e) => {
        e.preventDefault();
        props.handleOnClick(props.num);
    };
    
    return(
        <button className='border-4 text-4xl hover:bg-slate-300	active:bg-slate-700	
            focus:outline-none focus:ring' 
        onClick={onClick}>{props.num}</button>
    )
};

export default Num;
