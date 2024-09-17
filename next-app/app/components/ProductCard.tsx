import React from "react";
import AddToCart from "./AddToCart";
//import styles from "./ProductCard.module.css";

const ProductCard = () => {
  return (
    <div className="p-5 my-5 bg-amber-400 text-white text-xl hover:bg-amber-500">
      <AddToCart />
    </div>
  );
};

export default ProductCard;
