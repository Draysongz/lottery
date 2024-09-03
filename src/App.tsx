import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import WelcomePage from "./pages/WelcomePage";
import Prizes from "./pages/Prizes";
// import WebApp from "@twa-dev/sdk";
import './index.css'
import Modes from "./pages/modes";
import Login from "./pages/Login";

function App() {
  // const BackButton = WebApp.BackButton;

  // BackButton.show();
  // BackButton.onClick(() => window.history.back());
  return (
    <Flex align={"center"} justify={"center"} minH={"100vh"}>
      <Box w={""}>
        <BrowserRouter>
          <Routes>
            <Route index element={<WelcomePage />} />
            <Route path="prizes" element={<Prizes />} />
            <Route path="modes" element={<Modes />} />
            <Route path="login" element={<Login />} />

          </Routes>
        </BrowserRouter>
      </Box>
    </Flex>
  );
}


export default App
