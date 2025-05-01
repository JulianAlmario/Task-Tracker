import { Logo } from "../Logo";
import { NavbarItems } from "./navbarItems";

export function HeaderLogoItems() {
  return (
    <section className="flex gap-6 items-center max-[768px]:flex-col">
      <div className="w-14">
        <Logo />
      </div>
      <section>
        <NavbarItems />
      </section>
    </section>
  );
}
