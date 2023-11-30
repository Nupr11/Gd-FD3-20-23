import styles from "./Product.module.css";

const Product = ({ className, image, name, price, tickets, days }) => {
  return (
    <li key={name} className={className}>
      <figure className={styles.card}>
        <img src={image} alt={name} className={styles.image}></img>
        <figcaption className={styles.name}>{name}</figcaption>
      </figure>

      <div className={styles.price}>price : {price}</div>
      <div className={styles.tickets}>tickets : {tickets}</div>
      <div className={styles.days}>days : {days}</div>
    </li>
  );
};

export { Product };
