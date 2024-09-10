import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import Gameplay from "./pages/Gameplay";
// import WebApp from "@twa-dev/sdk";
import './index.css'
import Friends from "./pages/Friends";
import '@fontsource/inter'
import History from "./pages/History";
import Connect from "./pages/Connect";
import Wallet from "./pages/Wallet";
import Admin from "./Admin/Admin";
import { useRealtimeUserData } from "./hooks/useUserData";





function App() {
  // const BackButton = WebApp.BackButton;
  const name ="Habibilord"
  const userId = 214356

  const {userData} = useRealtimeUserData(userId, name)

  // BackButton.show();
  // BackButton.onClick(() => window.history.back());
  return (
    <Flex align={"center"} justify={"center"} minH={"100vh"} py={5} bgColor={'black'} overflow={'scroll'} className="relative">
      <Box className="glitter-background absolute inset-0 overflow-hidden">
        {/* Multiple glitter elements */}
        {[...Array(20)].map((_, i) => (
        <Box key={i} className="glitter"></Box>
      ))}
        {/* Add more glitter elements as needed */}
      </Box>
      <Box zIndex={0}>
        <BrowserRouter>
          <Routes>
            <Route index element={<Gameplay userData={userData} />}  />
            <Route path="history" element={<History userData={userData}  />} />
            <Route path="friends" element={<Friends userData={userData}  />} />
            <Route path="wallet" element={<Wallet userData={userData}  />} />
            <Route path="connect" element={<Connect userData={userData}  />} />
            <Route path="admin" element={<Admin userData={userData} />} />

          </Routes>
        </BrowserRouter>
      </Box>
    </Flex>
  );
}


export default App
