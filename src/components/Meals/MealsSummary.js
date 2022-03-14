import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food - Delivered To You</h2>
      <p>
        Choose your favorite meal from our broad selection of available East
        Europian meals and enjoy a delicious lunch anywhere.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients and unique
        recipes, just-in-time and of course by our experienced chef, Oleg!
      </p>
    </section>
  );
};

export default MealsSummary;
