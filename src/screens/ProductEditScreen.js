import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsProduct } from "../actions/productActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { Button } from "@mui/material";

function ProductEditScreen(props) {
  const productId = props.match.params.id;
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [countInStock, setCountInStock] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  const dispatch = useDispatch();
  useEffect(() => {
    if (!product || product._id !== productId) {
      dispatch(detailsProduct(productId));
    } else {
      setName(product.name);
      setAuthor(product.author);
      setCategory(product.category);
      setImage(product.image);
      setPrice(product.price);
      setCountInStock(product.countInStock);
      setRating(product.rating);
      setDescription(product.description);
    }
  }, [product, dispatch, productId]);
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Edit Product {productId}</h1>
        </div>
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            <div>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter name"
                value={name}
                maxLength="20"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="author">Author</label>
              <input
                id="author"
                type="text"
                placeholder="Enter author"
                value={author}
                maxLength="20"
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="category">Category</label>
              <input
                id="category"
                type="text"
                placeholder="Enter category"
                value={category}
                maxLength="20"
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="image">Image</label>
              <input
                id="image"
                type="text"
                placeholder="Enter image"
                value={image}
                maxLength="20"
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="price">Price</label>
              <input
                id="price"
                type="text"
                placeholder="Enter price"
                value={price}
                maxLength="20"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="countInStock">CountInStock</label>
              <input
                id="countInStock"
                type="text"
                placeholder="Enter countInStock"
                value={countInStock}
                maxLength="20"
                onChange={(e) => setCountInStock(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="rating">Rating</label>
              <input
                id="rating"
                type="text"
                placeholder="Enter rating"
                value={rating}
                maxLength="20"
                onChange={(e) => setRating(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <input
                id="description"
                type="text"
                placeholder="Enter description"
                value={description}
                maxLength="20"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div>
              <label></label>
              <Button
                className="primary"
                type="submit"
                size="large"
                sx={{ fontSize: "1.6rem" }}
                variant="contained"
              >
                Update
              </Button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}

export default ProductEditScreen;
