import React from "react";
import { categoryData } from "./Categorydata";
import "./Category.css";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { borderRadius } from "@mui/system";

const Categories = () => {
  const history = useHistory();
  const handleshowbookcategory = (category, id) => {
    if (id === 5) {
      history.push(`/showbook/جامعه`);
    } else {
      history.push(`/showbook/${category}`);
    }
  };
  return (
    <div className="categories-section">
      <Typography
        variant="h5"
        style={{
          fontWeight: 800,
          color: "#1565C0",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        چه موضوعاتی داریم؟
      </Typography>
      <div className="categories-section__items" style={{ marginTop: "-20px" }}>
        {categoryData.map((category) => (
          <div style={{ marginTop: "30px" }}>
            <button
              key={category.key}
              className="Catgory_button"
              onClick={() =>
                handleshowbookcategory(category.title, category.id)
              }
              variant="contained"
              style={{
                backgroundColor: category.color,
                borderRadius: "10px",
                color: "white",
                borderColor: category.color,
              }}
            >
              {category.title}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
