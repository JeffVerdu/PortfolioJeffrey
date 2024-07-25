import { Copy } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

export const Mail = ({
  classes,
  iconSize,
}: {
  classes: string;
  iconSize: number;
}) => {
  const email = "jeffverdu@gmail.com";

  const notify = () => {
    setTimeout(() => {
      toast.success("Correo copiado, conversemos!", {
        position: "top-center",
        duration: 800,
        style: {
          background: "rgb(15 23 42)",
          color: "#fff",
          paddingInline: "2rem",
        },
      });
    }, 50);
  };

  return (
    <div className={`${classes}`}>
      {email}
      <Copy
        size={iconSize}
        onClick={async () => {
          await navigator.clipboard.writeText(email);
          notify();
        }}
        className="cursor-pointer"
      />
      <Toaster />
    </div>
  );
};
