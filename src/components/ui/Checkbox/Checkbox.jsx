import styles from "./styles.module.css";

const Checkbox = ({
  className,
  type = "checkbox",
  name,
  label,
  formik,
  ...props
}) => {
  const { values, handleChange, handleBlur, errors, touched } = formik;

  if (typeof values[name] === "undefined") {
    values[name] = false;
  }

  console.log(values[name]);

  const combinedClassName = className
    ? `${className} ${styles.wrap_checkbox}`
    : `${styles.wrap_checkbox}`;

  return (
    <>
      <div className={combinedClassName}>
        <input
          className={styles.checkbox_primary}
          type={type}
          name={name}
          value={values[name]}
          onChange={handleChange}
          onBlur={handleBlur}
          {...props}
          checked={values[name]}
        />
        <label htmlFor={name}>{label}</label>
      </div>
      {errors[name] && touched[name] && (
        <span className={styles.errorMessage}>{errors[name]}</span>
      )}
    </>
  );
};

Checkbox.displayName = "Checkbox";

export default Checkbox;
