/**
 * @author [Sanjeewa Ranuluge]
 * @email [sbandra725@gmail.com]
 * @create date 2021-06-16 00:41:12
 * @modify date 2021-06-16 00:41:12
 * @desc [description]
 */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSelectedProductDetail, removeProducts } from "../actions";
import { useParams } from "react-router-dom";
import classes from "./ProductDetail.module.css";

const ProductDetail = (props) => {
  const { productId } = useParams();
  const { productsReducer } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!!productId && productId !== "") {
      dispatch(fetchSelectedProductDetail(productId));
    }
    return () => {
      dispatch(removeProducts());
    };
  }, [productId, dispatch]);
  return (
    <div className={classes.container}>
      {!!productsReducer.selectedProductDetail ? (
        [productsReducer.selectedProductDetail].map((item) => (
          <div key={item.id} className={classes.inner_container}>
            <div className={classes.img_container}>
              <img src={`${item.image}`} alt="logo" />
            </div>
            <div className={classes.des_container}>
              <h3>{item.title}</h3>
              <span>Price : ${item.price} </span>
              <p>Description : {item.description}</p>
              <h3>Category : {item.category}</h3>
            </div>
          </div>
        ))
      ) : (
        <div className={classes.loading}>
          <h2>Loading...</h2>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
