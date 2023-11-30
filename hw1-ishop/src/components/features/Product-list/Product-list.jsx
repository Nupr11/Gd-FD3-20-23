import { SHOP_PRODUCTS } from "../../../data/shop.js";
import { Product } from "./components";
import styles from "./Product-list.module.css";

const ProductList = ({ className }) => {
  return (
    <ul className={className}>
      {SHOP_PRODUCTS.map(({ image, name, price, tickets, days }) => {
        return (
          <Product
            className={styles.product}
            image={image}
            name={name}
            price={price}
            tickets={tickets}
            days={days}
            key={name + image}
          />
        );
      })}
    </ul>
  );
};

export { ProductList };
