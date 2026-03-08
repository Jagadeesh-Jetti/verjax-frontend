import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchServices } from '../serviceThunk';
import { ServiceCard } from './ServiceCard';

export default function PopularServices() {
  const dispatch = useDispatch();

  const { items, loading } = useSelector((state) => state.services);

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  if (loading) {
    return <p>Loading services...</p>;
  }

  return (
    <section>
      <h2>Popular Services</h2>

      <div className="service-grid">
        {items.slice(0, 6).map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </section>
  );
}
