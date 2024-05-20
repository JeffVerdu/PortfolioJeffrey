import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  Button,
} from "@nextui-org/react";
import { SquareMenu } from "lucide-react";
import { Mail } from "../core/Mail";

export const TopBar = () => {
  const scrollToSection = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const target = event.target as HTMLAnchorElement;
    const id = target.getAttribute("href")?.replace("#", "");
    const element = document.getElementById(String(id));
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="ml-1/4">
      <Navbar className="bg-slate-950 text-white shadow-[6px_0_7px_1px_rgba(255,255,255,0.3)]">
        <NavbarBrand className="hidden md:block">
          <a
            onClick={scrollToSection}
            href="#about"
            className="font-bold text-white text-xs md:text-base lg:text-xl 2xl:text-2xl"
          >
            JEFFREY VERDÚ
          </a>
        </NavbarBrand>

        <NavbarContent className="md:hidden">
          <NavbarItem>
            <Dropdown className="bg-slate-900 text-white shadow-md shadow-black/70">
              <DropdownTrigger>
                <Button
                  isIconOnly
                  variant="solid"
                  size="sm"
                  className="bg-transparent p-0"
                >
                  <SquareMenu color="#ffffff" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Links" variant="bordered">
                <DropdownItem key="about">
                  <div className="mb-1 cursor-default pointer-events-none">
                    <img
                      className="rounded-full overflow-hidden w-16 my-o mx-auto"
                      src="/logo_jv_portfolio.jpeg"
                      alt="Jeffrey Verdú"
                    />
                  </div>
                </DropdownItem>
                <DropdownItem key="about">
                  <a
                    onClick={scrollToSection}
                    href="#about"
                    className="text-white"
                  >
                    Sobre mi
                  </a>
                </DropdownItem>
                <DropdownItem key="projects">
                  <a
                    onClick={scrollToSection}
                    href="#projects"
                    className="text-white"
                  >
                    Proyectos
                  </a>
                </DropdownItem>
                <DropdownItem key="education">
                  <a
                    onClick={scrollToSection}
                    href="#education"
                    className="text-white"
                  >
                    Educación
                  </a>
                </DropdownItem>
                <DropdownItem key="resume">
                  <a
                    onClick={scrollToSection}
                    href="#resume"
                    className="text-white"
                  >
                    Experiencia laboral
                  </a>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="center">
          <NavbarItem>
            <Mail
              classes="text-white text-base 2xl:text-xl flex gap-1 items-center"
              iconSize={24}
            />
          </NavbarItem>
        </NavbarContent>

        <NavbarContent as="div" justify="end">
          <Dropdown
            placement="bottom-end"
            className="bg-slate-900 shadow-black shadow-lg"
          >
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                color="default"
                className="transition-transform w-9 h-9 2xl:w-12 2xl:h-12"
                name="Jeffrey Verdú"
                src="/avatar_jeffrey_topbar.jpg"
              />
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Profile Description"
              variant="bordered"
              className="text-white/70"
              closeOnSelect={false}
            >
              <DropdownItem className="h-10 cursor-default hover:text-white">
                <p className="font-semibold 2xl:text-lg">
                  Trainee Frontend Developer
                </p>
              </DropdownItem>
              <DropdownItem className="cursor-default hover:text-white 2xl:text-lg">
                ReactJS
              </DropdownItem>
              <DropdownItem className="cursor-default hover:text-white 2xl:text-lg">
                HTML
              </DropdownItem>
              <DropdownItem className="cursor-default hover:text-white 2xl:text-lg">
                CSS
              </DropdownItem>
              <DropdownItem className="cursor-default hover:text-white 2xl:text-lg">
                SASS
              </DropdownItem>
              <DropdownItem className="cursor-default hover:text-white 2xl:text-lg">
                TailwindCSS
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      </Navbar>
    </header>
  );
};
