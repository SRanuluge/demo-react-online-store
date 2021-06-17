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
import { useParams } from "react-router";

const ProductDetail = () => {
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
  }, []);
  return (
    <div style={{ width: "100%", height: "100%" }}>
      {!!productsReducer.selectedProductDetail ? 
        [productsReducer.selectedProductDetail].map((item) => (
          <div  key={item.id} style={{ width: "100%", height: "100%" }}>
            <img style={{ width: "auto", height: 150 }} src={`${item.image}`} />
            <h2>{item.title}</h2>
            <h4>{item.category}</h4>
            <span>{item.price}</span>
            <p>{item.description}</p>
          </div>
        )) :<div>Loading....</div>}
    </div>
  );
};

export default ProductDetail;
