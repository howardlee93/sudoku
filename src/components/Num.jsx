const Num =(props) =>{
    const onClick = (e) => {
        props.handleOnClick(props.num);
    };
    
    return(
        <button className='border-4 text-4xl' onClick={onClick}>{props.num}</button>
    )
};

export default Num;
