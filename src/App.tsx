import { NextUIProvider } from "@nextui-org/react";
import { Sidebar } from "./components/layout/Sidebar";
import { Main } from "./components/pages/Main";

function App() {
  return (
    <NextUIProvider>
      <div className="flex">
        <Sidebar />
        <Main />
      </div>
    </NextUIProvider>
  );
}

export default App;
