import React from "react";
import "./imagelist.css";
const ImageList = (props) => {
  const images = props.images.map(({ id, description, urls }) => {
    return (
      <img key={id} src={urls.regular} alt={description} />
      //   const images = props.images.map((image) => {
      //    <img key={image.id} src={image.urls.regular} alt={image.description} />
    );
  });
  return <div className="image-list">{images}</div>;
};

export default ImageList;
