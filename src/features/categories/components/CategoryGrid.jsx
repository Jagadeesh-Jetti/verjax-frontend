import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../categoryThunk';
import { CategoryCard } from './CategoryCard';

export const CategoryGrid = () => {
  const dispatch = useDispatch();

  const { items, loading } = useSelector((state) => state.categories);
  // console.log(items);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (loading) {
    return <p>Loading categories...</p>;
  }

  return (
    <section>
      <h2> Service Categories </h2>

      <div>
        {items?.map((category) => (
          <CategoryCard key={category._id} category={category} />
        ))}
      </div>
    </section>
  );
};
