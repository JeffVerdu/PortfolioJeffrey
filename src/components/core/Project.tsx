import { Card, CardFooter } from "@nextui-org/card";
import { Button, Image } from "@nextui-org/react";
import { Github, Globe } from "lucide-react";
import { Project as ProjectType } from "../../types";

export const Project = ({
  name,
  description,
  github,
  url,
  path,
}: ProjectType) => {
  return (
    <Card
      isFooterBlurred
      className="w-full h-[250px] md:h-[400px] lg:h-[450px] 2xl:h-[600px] shadow-black shadow-xl lg:rounded-3xl bg-slate-950"
    >
      <Image
        removeWrapper
        alt={name}
        className="z-0 w-full h-full object-fill"
        src={path}
      />
      <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
        <div>
          <p className="text-black text-tiny md:text-sm lg:text-base 2xl:text-xl">
            {name}
          </p>
          <p className="text-black text-[10px] md:text-sm lg:text-base 2xl:text-lg">
            {description}
          </p>
        </div>
        <Button
          className="text-sm 2xl:text-base"
          color="default"
          radius="full"
          size="lg"
        >
          <a href={url} target="_blank" className="flex items-center gap-1">
            <Globe size={16} />
            Visitar
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};
