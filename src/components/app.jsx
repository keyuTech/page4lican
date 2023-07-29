import React, { useState, useEffect } from "react";

import {
  f7,
  f7ready,
  App,
  Panel,
  Views,
  View,
  Popup,
  Page,
  Navbar,
  Toolbar,
  NavRight,
  Link,
  Block,
  BlockTitle,
  LoginScreen,
  LoginScreenTitle,
  List,
  ListItem,
  ListInput,
  ListButton,
  BlockFooter,
  Icon,
} from "framework7-react";

import routes from "../js/routes";
import store from "../js/store";

const MyApp = () => {
  // Framework7 Parameters
  const f7params = {
    name: "page4lican", // App name
    theme: "auto", // Automatic theme detection

    // App store
    store: store,
    // App routes
    routes: routes,
  };

  return (
    <App {...f7params}>
      {/* <Panel right reveal dark>
        <View>
          <Page>
            <Navbar title="Right Panel" />
            <Block>
              <List mediaList>
                <ListItem
                  title={"Info"}
                  selected={true}
                  link={"/info/"}
                ></ListItem>
              </List>
            </Block>
          </Page>
        </View>
      </Panel> */}
      <View main className="safe-areas" url="/" />

      {/* Popup */}
      {/* <Popup id="my-popup">
        <View>
          <Page>
            <Navbar title="Popup">
              <NavRight>
                <Link popupClose>Close</Link>
              </NavRight>
            </Navbar>
            <Block>
              <p>Popup content goes here.</p>
            </Block>
          </Page>
        </View>
      </Popup> */}
    </App>
  );
};
export default MyApp;
