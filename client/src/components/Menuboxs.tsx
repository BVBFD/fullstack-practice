import React from "react";
import { MenuType } from "../pages/Home";
import Menubox from "./Menubox";

interface MenuboxsPropsType {
  menu?: Array<MenuType>;
}

const Menuboxs = ({ menu }: MenuboxsPropsType) => {
  return (
    <>
      {menu?.map((m) => (
        <Menubox key={m._id} m={m} />
      ))}
    </>
  );
};

export default Menuboxs;
