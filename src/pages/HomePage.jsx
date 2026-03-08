import { Navbar } from '../globalComponents/Navbar';
import { Hero } from '../globalComponents/Hero';
import { CategoryGrid } from '../features/categories/components/CategoryGrid';
import PopularServices from '../features/services/components/PopularServices';

export const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <CategoryGrid />
      <PopularServices />
    </div>
  );
};
