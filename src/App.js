import logo from "./logo.svg";
import "./App.less";
import React from "react";
import { CardsContext } from "./context/CardsContext";
import { DrawerContext } from "./context/DrawerContext";
import { useDrawer } from "./hooks/useDrawer";

import Card from "./components/Card/Card";
import { Layout, Grid } from "antd";
import EditDrawer from "./components/EditDrawer/EditDrawer";
import { useCards } from "./hooks/useCards";

const { Header, Content } = Layout;
const { useBreakpoint } = Grid;

const App = () => {
  const { open, cleanup, showDrawer, hideDrawer, handleClose, selectedCardId } =
    useDrawer();
  const { cards, duplicateCard, editCard, deleteCard } = useCards();
  const screens = useBreakpoint();

  return (
    <CardsContext.Provider
      value={{ cards, duplicateCard, editCard, deleteCard }}
    >
      <div className="App">
        <Layout style={{ height: "100%", minHeight: "100vh" }}>
          <DrawerContext.Provider
            value={{
              open,
              cleanup,
              showDrawer,
              hideDrawer,
              handleClose,
              selectedCardId,
            }}
          >
            <Header
              style={{
                position: "fixed",
                zIndex: 1,
                width: "100%",
                background: "#FFFFFF",
                padding: "0 24px",
                height: "90px",
              }}
              onClick={open ? () => hideDrawer() : undefined}
            >
              <img
                className="logo"
                alt="logo"
                src={logo}
                style={{
                  maxWidth: "200px",
                  width: "100%",
                  maxHeight: "23.7px",
                  margin: "33px 0",
                }}
              />
            </Header>
            <Content
              className="site-layout"
              style={{
                padding: screens.lg ? "0 50px" : screens.md ? "0 10px" : "0px",
                marginTop: "90px",
                position: "relative",
              }}
            >
              <div
                className="site-layout-background"
                style={{ padding: screens.xs ? 12 : 24, minHeight: 380 }}
              >
                {cards.map((card) => (
                  <Card
                    key={`card-${card.id}`}
                    title={card.titleText}
                    {...card}
                  >
                    {card.bodyText}
                  </Card>
                ))}
              </div>
              <EditDrawer />
            </Content>
          </DrawerContext.Provider>
        </Layout>
      </div>
    </CardsContext.Provider>
  );
};

export default App;
