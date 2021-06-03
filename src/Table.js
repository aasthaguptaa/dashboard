import React from "react";
import auth from "./auth";
import Header from './Header';
import { Menu } from "./Menu";
import Footer from './Footer';
import PostDataTable from "./table-postdata";

export const Table = props => {
  return (
    <>
    <div>
      <div class="wrapper">
      <Header/>
      <Menu/>
      <PostDataTable/>
      <Footer/>
      </div>
      <button
        onClick={() => {
          auth.logout(() => {
            props.history.push("/");
          });
        }}
      >
        Logout
      </button>
    </div>
    </>
  );
};