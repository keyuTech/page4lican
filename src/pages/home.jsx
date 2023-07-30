import React, { useState } from "react";
import {
  Page,
  Navbar,
  NavRight,
  Link,
  Block,
  BlockTitle,
  List,
  ListItem,
  Button,
  Icon,
  Toolbar,
  Tabs,
  Tab,
} from "framework7-react";
import Info from "../components/info";
import Work from "../components/work";
import Biography from "../components/biography";
import Contact from "../components/contact";

const HomePage = () => {
  const [selected, setSelected] = useState("info");

  return (
    <Page name="home">
      <Navbar sliding={false} title="LIQIONGYU">
        <NavRight>
          <div className="social-media-wrapper">
            <Block className="social-media">
              <Link href="https://www.instagram.com" target="_blank" external>
                <Icon icon="instagram" size={24} />
              </Link>
              <Link
                href="https://www.youtube.com/channel/UCW1798NA7oE5DitGZO7ou-A"
                target="_blank"
                external
              >
                <Icon icon="youtube" size={24} />
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=100026149746006"
                target="_blank"
                external
              >
                <Icon icon="facebook" size={24} />
              </Link>
            </Block>
          </div>
        </NavRight>
      </Navbar>
      {/* <List menuList className="list" outlineIos={true} strongIos>
        <ListItem
          title={"Info"}
          selected={selected === "info"}
          link={"/info/"}
          onClick={() => setSelected("info")}
        />
        <ListItem
          title={"Work/Project"}
          selected={selected === "work"}
          link={"/form/"}
          onClick={() => setSelected("work")}
        />
        <ListItem
          title={"Biography"}
          selected={selected === "biography"}
          link={"/info/"}
          onClick={() => setSelected("biography")}
        />
        <ListItem
          title={"Contact"}
          selected={selected === "contact"}
          link={"/info/"}
          onClick={() => setSelected("contact")}
        />
      </List> */}
      <Toolbar tabbar top>
        <Link tabLink="#info" tabLinkActive>
          Info
        </Link>
        <Link tabLink="#work">Work/Project</Link>
        <Link tabLink="#biography">Biography</Link>
        <Link tabLink="#contact">Contact</Link>
      </Toolbar>
      <Tabs>
        <Tab id={"info"} tabActive>
          <Info />
        </Tab>
        <Tab id={"work"}>
          <Work />
        </Tab>
        <Tab id={"biography"}>
          <Biography />
        </Tab>
        <Tab id={"contact"}>
          <Contact />
        </Tab>
      </Tabs>

      {/* <BlockTitle>Navigation</BlockTitle>
      <List strong inset dividersIos>
        <ListItem link="/info/" title="Info" />
        <ListItem link="/form/" title="Form" />
      </List> */}

      {/* <BlockTitle>Modals</BlockTitle>
      <Block className="grid grid-cols-2 grid-gap">
        <Button fill popupOpen="#my-popup">
          Popup
        </Button>
        <Button fill loginScreenOpen="#my-login-screen">
          Login Screen
        </Button>
      </Block>

      <BlockTitle>Panels</BlockTitle>
      <Block className="grid grid-cols-2 grid-gap">
        <Button fill panelOpen="left">
          Left Panel
        </Button>
        <Button fill panelOpen="right">
          Right Panel
        </Button>
      </Block> */}
      <Toolbar bottom>
        <p style={{ textAlign: "center", width: "100%" }}>
          © 2023 LIQIONGYU. All rights reserved.
        </p>
      </Toolbar>
    </Page>
  );
};
export default HomePage;
