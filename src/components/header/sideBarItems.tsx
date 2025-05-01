import { Link } from "react-router-dom";
import { navbarItems } from "./navbarItems";


export function SideBarItems() {
    return ( 
        <ul>
            {navbarItems.map((item, index) => (
                <li key={index} className="w-full font-bold">
                    <button className="p-4 flex items-center gap-2"> 
                        {item.icon}
                        <Link to={item.route}>{item.name}</Link>
                    </button>
                </li>
            ))}
        </ul>
    );
}