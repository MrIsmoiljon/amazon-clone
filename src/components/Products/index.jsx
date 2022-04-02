import { Button } from "@mui/material";
import React from "react";
import "./product.css";
import hoodie from "../assets/images/hoodie 1.jpg";
import { products } from "../../utilities/products.js";

const Product = ({ image, price, rating }) => {
  return (
    <div className="product">
      <div className="product__info">
        {products.map((value) => {
          return (
            <div key={value.id}>
              <p>{value.title}</p>
              <p className="product__price">
                <span>$ </span>
                <strong> {price} </strong>
              </p>

              <div className="product__rating">
                <p>{value.stars}</p>
              </div>
            </div>
          );
        })}
      </div>
      <img src={image} alt="" />

      <Button
        variant="primary"
        sx={{
          backgroundColor: "#f0c14b",
          borderColor: "#a88734",
          marginTop: "10px",
        }}
      >
        Add to Cart
      </Button>
    </div>
  );
};

export default Product;
