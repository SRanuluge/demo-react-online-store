import classes from "./card.module.css";
import { RiShoppingCartLine } from "react-icons/ri";
import { red } from "chalk";

const Card = ({ props }) => {
  const { image, price, title } = props;
  return (
    <div className={classes.card}>
      <div className={classes.image_container}>
        <img alt="Avatar" src={`${image}`} />
      </div>
      <span className={classes.title}>{title}</span>
      <div className={classes.section_container}>
        <div className={classes.typo_container}>
          <span className={classes.price}>Price: {price}</span>
        </div>
        <button>
          <RiShoppingCartLine className={classes.log_icon} />
        </button>
      </div>
    </div>
  );
};

export default Card;
