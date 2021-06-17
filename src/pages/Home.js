/**
 * @author [Sanjeewa Ranuluge]
 * @email [sbandra725@gmail.com]
 * @create date 2021-06-16 00:40:36
 * @modify date 2021-06-16 00:40:36
 * @desc [description]
 */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductList } from "../actions";
import { Link } from "react-router-dom";
import classes from "./Home.module.css";
const Home = () => {
  const dispatch = useDispatch();
  const { productsReducer } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchProductList());
  }, []);
  return (
    <div className={classes.grid_container}>
      {productsReducer.productList.map((item) => (
        <div className={classes.card}>
          <Link key={item.id} to={`/${item.id}`}>
            <img alt="Avatar" src={`${item.image}`} />
            <h5>{item.title}</h5>
            <h6>{item.category}</h6>
            <span>Price: {item.price}</span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
