import { Card, CardFooter, CardHeader } from "@nextui-org/card";
import { Button, Image } from "@nextui-org/react";
import { Github, Globe } from "lucide-react";

export const Projects = () => {
  return (
    <Card
      isFooterBlurred
      className="w-full h-[250px] md:h-[400px] lg:h-[450px] 2xl:h-[600px] col-span-12 sm:col-span-5 shadow-black shadow-xl lg:rounded-3xl bg-slate-950"
    >
      <CardHeader className="absolute z-10 top-1 flex-col items-start"></CardHeader>
      <Image
        removeWrapper
        alt="TwistPlot"
        className="z-0 w-full h-full object-fill"
        src="/Portada_TwistPlot.png"
      />
      <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
        <div>
          <p className="text-black text-tiny md:text-sm lg:text-base 2xl:text-xl">
            <span className="font-semibold">Twist</span>Plot
          </p>
          <p className="text-black text-[10px] md:text-sm lg:text-base 2xl:text-lg">
            eCommerce - Proyecto final de certificación de ReactJS
          </p>
        </div>
        <div className="flex gap-4">
          <Button
            className="text-tiny 2xl:text-base"
            color="default"
            radius="full"
            size="sm"
          >
            <a
              href="https://github.com/JeffVerdu/eCommerceReactJS_Verdu"
              target="_blank"
              className="flex items-center gap-1"
            >
              <Github size={16} />
              GitHub
            </a>
          </Button>
          <Button
            className="text-tiny 2xl:text-base"
            color="default"
            radius="full"
            size="sm"
          >
            <a
              href="https://reactjs-ecommerce-twistplot-jeffrey.vercel.app/"
              target="_blank"
              className="flex items-center gap-1"
            >
              <Globe size={16} />
              Visitar
            </a>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
