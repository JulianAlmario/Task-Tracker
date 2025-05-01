
import { Menu } from "lucide-react";
import AccountMenu from "./accountMenu";
import { BellIcon } from "./bellIcon";
import {HeaderLogoItems} from "./headerLogoItems";
import {  useEffect, useState } from "react";
import { ResponsiveMenu } from "./ResponsiveMenu";


export function Header({children}: {children: React.ReactNode}) {
    const [visible, setVisible] = useState(false);
    const [windowWidth, setWindow] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => setWindow(window.innerWidth);
      window.addEventListener("resize", handleResize);
      handleResize(); // Set initial width
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleMenuClick = () => {
        setVisible(!visible);
    };
    return(
        <>
          <header className="bg-gray-800 text-white p-4 shadow-md">
            <nav className="flex justify-between items-center max-w-7xl mx-auto">
           
                {windowWidth < 768 ? (
                  
                  <>
                   <button onClick={handleMenuClick} className="md:invisible">
                      <Menu />
                    </button>
                    <ResponsiveMenu visible={visible} close={handleMenuClick} />
                  </>
                ) : (
                  <HeaderLogoItems />
                )}
               
              <section className="flex gap-6 items-center">
                <BellIcon />
                <AccountMenu />
              </section>
            </nav>
          </header>
         {children}
        </> 
    );
}