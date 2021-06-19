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
import Card from "../components/card/card";
const Home = () => {
  const dispatch = useDispatch();
  const { productsReducer } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchProductList());
  }, [dispatch]);
  return (
    <div className={classes.grid_container_1}>
      {!productsReducer.loading ? (
        !productsReducer.error ? (
          productsReducer.productList.map((item) => (
            <Link
              className={classes.grid_container}
              key={item.id}
              to={`/${item.id}`}
            >
              <Card props={item} />
            </Link>
          ))
        ) : (
          <div className={classes.loading}>
            <h2>Network Error..</h2>
          </div>
        )
      ) : (
        <div className={classes.loading}>
          <h2>Loading....</h2>
        </div>
      )}
    </div>
  );
};

export default Home;
