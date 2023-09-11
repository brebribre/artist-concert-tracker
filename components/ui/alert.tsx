
function Alert(props:any){
    return (
        <div className="p-2 my-5 bg-indigo-800 items-center text-indigo-100 leading-none rounded-full flex lg:inline-flex" role="alert">
            <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">{props.tag}</span>
            <span className="text-xs font-semibold mr-2 text-left flex-auto md:text-sm">{props.text}</span>
            
        </div>        
    )
}

export default Alert;

//<svg className="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>