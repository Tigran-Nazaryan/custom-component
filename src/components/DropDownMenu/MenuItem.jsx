const menuItem = ({children, onClick, key}) => {
    return (
        <div key={key} className="px-4 py-2 cursor-pointer hover:bg-gray-200" onClick={onClick}>
            {children}
        </div>
    )
}

export default menuItem;

