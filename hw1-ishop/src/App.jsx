import { ProductList } from "./components/features/Product-list";
import { ShopName } from "./components/features/Product-list/components/Shop";
import styles from "./main.module.css";

function App() {
  return (
    <section className={styles.shop}>
      <ShopName className={styles.shopName} />
      <ProductList className={styles.productList} />
    </section>
  );
}

export default App;
