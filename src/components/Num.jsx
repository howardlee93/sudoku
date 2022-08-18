const Num =(props) =>{
    const onClick = (e) => {
        props.onClick(props.num);
    };
    
    return(
        <button className='border-4 text-4xl' onClick={onClick}>{props.num}</button>
    )
};

export default Num;
