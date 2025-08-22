import { Link } from "react-router-dom";
import { Home, CalendarCheck , ClipboardList  } from "lucide-react";

export const navbarItems: {name: string, route: string, icon:any}[] = [
    {name: "Home", route: "/home", icon: <Home className="w-4 h-4" />},
    {name:"Dashboard",route:"/dashboard", icon: <ClipboardList  className="w-4 h-4" />},
    {name:"Schedule",route:"/schedule", icon: <CalendarCheck className="w-4 h-4" />},
];

export function NavbarItems() {
     return (
         <ul className="flex gap-2 max-[768px]:flex-col max-[768px]:items-start">
            {navbarItems.map((item, index) => (
          <li key={index} className="">
           <button className="hover:bg-gray-500 hover cursor-pointer p-4"> <Link to={item.route}>{item.name}</Link></button>
          </li>
         ))}
         </ul>
     );
}