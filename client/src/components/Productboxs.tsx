import React from "react";
import { ProductType } from "../pages/Home";
import Productbox from "./Productbox";

interface ProductboxsPropsType {
  product?: Array<ProductType>;
}

const Productboxs = ({ product }: ProductboxsPropsType) => {
  return (
    <>
      {product?.map((p) => (
        <Productbox key={p._id} p={p} />
      ))}
    </>
  );
};

export default Productboxs;
