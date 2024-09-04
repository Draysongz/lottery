import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import Gameplay from "./pages/Gameplay";
// import WebApp from "@twa-dev/sdk";
import './index.css'
import TopUsers from "./pages/TopUsers";
import Friends from "./pages/Friends"

function App() {
  // const BackButton = WebApp.BackButton;

  // BackButton.show();
  // BackButton.onClick(() => window.history.back());
  return (
    <Flex align={"center"} justify={"center"} minH={"100vh"}>
      <Box>
        <BrowserRouter>
          <Routes>
            <Route index element={<Gameplay />} />
            <Route path="leaderboard" element={<TopUsers />} />
            <Route path="friends" element={<Friends />} />

          </Routes>
        </BrowserRouter>
      </Box>
    </Flex>
  );
}


export default App
