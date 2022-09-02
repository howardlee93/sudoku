const Modal = ({open}) =>{
    const showHide = open ? "" : "hidden";

    return(
        <div className={ `flex justify-center items-center flex-col ${showHide} bg-black`}>
        <p className="text-sm text-white">
        Fill the grid with your keyboard so that every
        row, column and 3×3 box contains the digits 1 to 9, without repeating.
        A zero denotes a place to be filled.
        </p>
       
        </div>
    )
};

export default Modal;
