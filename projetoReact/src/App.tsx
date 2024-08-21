


//import SideBar from "./components/SiderBar/sideBar";

import "./index.css";

import { Header } from "./components/Header/Header";
import SideBar from "./components/SiderBar/SideBar";
import { AppContext } from "./contexts/AppController";
import { Outlet } from "react-router-dom";
import { AppContainer, MainContent } from "./AppStyles";

function App() {
  return (
    <AppContext>
      <AppContainer>
        <SideBar />
        <MainContent>
          <Header />
          <Outlet />
        </MainContent>
      </AppContainer>
    </AppContext>
  );
}

export default App;