import { NextUIProvider } from "@nextui-org/react";
import { Sidebar } from "./components/layout/Sidebar";
import { Main } from "./components/pages/Main";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <NextUIProvider>
      <div className="flex">
        <Sidebar />
        <Main />
      </div>
      <Analytics />
    </NextUIProvider>
  );
}

export default App;
