import { NavLink } from 'react-router-dom';
import Dropdown from './Dropdown';
import {useState,useEffect,useRef} from "react";

const MenuItems = ({items,depthLevel,mobiletoggle}) => {
    const [dropdown,setDropdown] = useState(false);
    let ref = useRef();
    useEffect(()=>{
        const handler = (event)=>{
            if(dropdown && ref.current && !ref.current.contains(event.target)){
                setDropdown(false);
            }
        };
        document.addEventListener("mousedown",handler);
        document.addEventListener("touchstart",handler);
        return()=>{
            document.removeEventListener("mousedown",handler);
            document.removeEventListener("touchstart",handler);
        };
    },[dropdown]);
    const onMouseEnter = () =>{
        setDropdown(true);
    };
    const onMouseLeave = () =>{
        setDropdown(false);
    };
    return(
        <li className={`${mobiletoggle?"pl-2":"menu-items"}`} ref={ref}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        >
            {items.submenu ? (
                <>
               
                    <NavLink to={items.link} >
                <button type="button" aria-haspopup="menu"
                aria-expanded={dropdown?"true":"false"}
                onClick={()=>setDropdown((prev)=> !prev)}
                >
                
                    {items.title} {' '}
                    {depthLevel>0 ? <span>&raquo;</span>:<span className='arrow'></span>}
                    
                </button>
                </NavLink>

               
               
                <Dropdown submenus={items.submenu} dropdown={dropdown} depthLevel={depthLevel} mobiletoggle={mobiletoggle}/>
                </>
            ):(
                <NavLink to={items.link}>{items.title}</NavLink>
            )}
        </li>
    );
};

export default MenuItems;