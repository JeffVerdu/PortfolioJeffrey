import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";

export default function InfoCard({
  title,
  place,
  description,
  year,
}: {
  title: string;
  place: string;
  description: string;
  year: string;
}) {
  return (
    <Card className="w-full shadow-black shadow-lg bg-slate-900 text-white hover:scale-105 transition-transform duration-300 ease-in-out">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md 2xl:text-xl">{title}</p>
          <p className="text-small 2xl:text-lg text-default-500">{place}</p>
          <p className="text-small 2xl:text-lg text-default-500">{year}</p>
        </div>
      </CardHeader>
      <Divider className="bg-white" />
      <CardBody>
        <p className="text-sm 2xl:text-lg">{description}</p>
      </CardBody>
    </Card>
  );
}
