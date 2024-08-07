import styles from "./PreparationTime.module.scss";

const PreparationTime = () => {
  return (
    <div className={styles.card}>
      <h3>Preparation time</h3>
      <ul>
        <li>
          <span>
            <span className="text-preset-4-bold">Total:</span> Approximately 10
            minutes
          </span>
        </li>
        <li>
          <span>
            <span className="text-preset-4-bold">Preparation:</span> 5 minutes
          </span>
        </li>
        <li>
          <span>
            <span className="text-preset-4-bold">Cooking:</span> 5 minutes
          </span>
        </li>
      </ul>
    </div>
  );
};

export default PreparationTime;
