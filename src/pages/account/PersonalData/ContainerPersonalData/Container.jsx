import styles from "./styles.module.css";

const Container = ({ title, children }) => {
  return (
    <div className={styles.personalDataWrap}>
      <h3>{title}</h3>
      {children}
    </div>
  );
};

export default Container;