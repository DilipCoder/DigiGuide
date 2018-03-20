import React, { Component } from "react";
import HomeScreen from "./home.js";
import About from "./about.js";
import Register from "./register.js";
import SideBar from "./SideBar.js";
import { DrawerNavigator } from "react-navigation";


const HomeScreenRouter = DrawerNavigator(

  {
    Home: { screen: HomeScreen },
    About: { screen: About },
    Register: { screen: Register }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default HomeScreenRouter;
