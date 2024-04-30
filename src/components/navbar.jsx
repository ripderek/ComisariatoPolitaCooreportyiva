import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  Carousel,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon, XCircleIcon } from "@heroicons/react/24/outline";

/* 
interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}
function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        target={href ? "_blank" : "_self"}
        variant="small"
        className="font-medium"
      >
        {children}
      </Typography>
    </li>
  );
}
*/
export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);
  const [VerCarrusel, setVerCarruel] = React.useState(true);
  function handleOpen() {
    setOpen((cur) => !cur);
  }

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MTNavbar
      fullWidth
      shadow={false}
      blurred={false}
      //color={isScrolling ? "black" : "transparent"}
      color={isScrolling ? "red" : "white"}
      className="fixed top-0 z-50 border-0"
    >
      <div className="container mx-auto flex items-center justify-between">
        <Typography
          as="a"
          href="https://www.material-tailwind.com"
          target="_blank"
          variant="h6"
          color={isScrolling ? " white" : "black"}
        >
          Comisariato Polita
        </Typography>
        <ul
          className={`ml-10 hidden items-center gap-6 lg:flex ${
            isScrolling ? "text-white" : "  text-gray-900"
          }`}
        >
          <Typography as="a" variant="small" className="font-medium">
            Inicio
          </Typography>
          <Typography as="a" variant="small" className="font-medium">
            Quiénes Somos
          </Typography>
          <Typography as="a" variant="small" className="font-medium">
            Acerca de
          </Typography>
          <Typography as="a" variant="small" className="font-medium">
            Contacto
          </Typography>
          <Typography as="a" variant="small" className="font-medium">
            Facturación Electrónica
          </Typography>

          {/*  <NavItem href="https://www.material-tailwind.com/docs/react/installation">
            Docs
          </NavItem>*/}
        </ul>

        <div className="hidden gap-2 lg:flex lg:items-center">
          {/* 
          <IconButton
            variant="text"
            color={isScrolling ? "white" : "gray"}
            size="sm"
          >
            <i className="fa-brands fa-twitter text-base" />
          </IconButton>
          <IconButton
            variant="text"
            color={isScrolling ? "white" : "gray"}
            size="sm"
          >
            <i className="fa-brands fa-facebook text-base" />
          </IconButton>
          <IconButton
            variant="text"
            color={isScrolling ? "white" : "gray"}
            size="sm"
          >
            <i className="fa-brands fa-instagram text-base" />
          </IconButton>
          
          <a href="https://www.material-tailwind.com/blocks" target="_blank">
            <Button color={isScrolling ? "gray" : "white"} size="sm">
              Blocks
            </Button>
          </a>
          */}
        </div>
        <IconButton
          variant="text"
          color={isScrolling ? "white" : "gray"}
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-4 rounded-lg border-t border-blue-gray-50 bg-white px-6 py-5">
          <ul className="flex flex-col gap-4 text-blue-gray-900">
            <Typography as="a" variant="small" className="font-medium">
              Inicio
            </Typography>
            <Typography as="a" variant="small" className="font-medium">
              Quiénes Somos
            </Typography>
            <Typography as="a" variant="small" className="font-medium">
              Acerca de
            </Typography>
            <Typography
              as="a"
              // href={href || "#"}

              variant="small"
              className="font-medium"
            >
              Contacto
            </Typography>
            <Typography as="a" variant="small" className="font-medium">
              Facturación Electrónica
            </Typography>
          </ul>
          <div className="mt-4 flex items-center gap-2">
            <IconButton variant="text" color="gray" size="sm">
              <i className="fa-brands fa-twitter text-base" />
            </IconButton>
            <IconButton variant="text" color="gray" size="sm">
              <i className="fa-brands fa-facebook text-base" />
            </IconButton>
            <IconButton variant="text" color="gray" size="sm">
              <i className="fa-brands fa-instagram text-base" />
            </IconButton>
          </div>
        </div>
      </Collapse>
      <IconButton
        size="lg"
        color="white"
        className={`fixed bottom-8 right-8 z-40 rounded-full shadow-blue-gray-900 shadow-2xl border-x-4 border-y-4 p-8 
         bg-blue-900`}
        ripple={false}
      >
        <i className="fa-brands fa-facebook text-4xl text-white " />
      </IconButton>
      <IconButton
        size="lg"
        color="white"
        className={`fixed bottom-28 right-8 z-40 rounded-full shadow-blue-gray-900 shadow-2xl border-x-4 border-y-4 p-8 
         bg-green-600`}
        ripple={false}
      >
        <i className="fa-brands fa-whatsapp text-4xl text-white " />
      </IconButton>
      {VerCarrusel && (
        <Card
          className="mt-6 w-96 fixed bottom-8 left-2 z-40"
          color="transparent"
        >
          <CardHeader color="blue-gray" className="">
            <IconButton
              className="!absolute top-3 right-3 bg-yellow-600 shadow-none z-40"
              onClick={() => setVerCarruel(false)}
            >
              <XCircleIcon className="w-11" color="orange" />
            </IconButton>
            <Carousel loop={true} autoplay={true} className="rounded-xl">
              <img
                src="/Carrusel/1.jpg"
                alt="image 1"
                className="h-full w-full object-cover object-center"
              />
              <img
                src="/Carrusel/2.jpg"
                alt="image 2"
                className="h-full w-full object-cover object-center"
              />
              <img
                src="/Carrusel/3.jpg"
                alt="image 3"
                className="h-full w-full object-cover object-center"
              />
            </Carousel>
          </CardHeader>
        </Card>
      )}
    </MTNavbar>
  );
}

export default Navbar;
