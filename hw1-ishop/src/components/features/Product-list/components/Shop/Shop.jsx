import styles from "./Shop.module.css";
import { SHOP_NAME } from "../../../../../data/shop.js";

const ShopName = ({ className }) => {
  return (
    <h2 className={className} key={SHOP_NAME}>
      <span className={styles.ShopName}>{SHOP_NAME}</span>
    </h2>
  );
};

export { ShopName };
