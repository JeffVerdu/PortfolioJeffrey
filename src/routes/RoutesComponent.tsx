import { Route, Routes } from "react-router-dom";
import { Main } from "../components/pages/Main";

export const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
};
