import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Perogies',
    description: 'Juicy seasoned ground beef in a soft dough',
    price: 4.8,
  },
  {
    id: 'm2',
    name: 'Borsch',
    description:
      'Famous soup with gound beef, potato, beet, cabbage and sour cream',
    price: 3.5,
  },
  {
    id: 'm3',
    name: 'Pancake Rolls',
    description: 'The softest pancake rolls with sweet cottage cheese',
    price: 4.15,
  },
  {
    id: 'm4',
    name: 'Salad',
    description: 'Fresh and healthy',
    price: 2.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
