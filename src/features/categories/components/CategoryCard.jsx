import { Link } from 'react-router-dom';

export const CategoryCard = ({ category }) => {
  return (
    <Link to={`/category/${category._id}`}>
      <div className="category-card">
        <h3>{category.name}</h3>
      </div>
    </Link>
  );
};
