import MenuItems from "./MenuItems";

const Dropdown = ({submenus,dropdown,depthLevel,mobiletoggle}) => {
    depthLevel = depthLevel + 1;
    const dropdownClass = depthLevel > 1 ? "dropdown-submenu" :"";
    return(
        <ul className={`${mobiletoggle?"":"dropdown"} ${dropdownClass} ${dropdown ? "show" : "hidden"}`}>
            {submenus.map((submenu,index)=>(
                <MenuItems items={submenu} key={index} depthLevel={depthLevel}/>
            ))}
        </ul>
    );
};

export default Dropdown;