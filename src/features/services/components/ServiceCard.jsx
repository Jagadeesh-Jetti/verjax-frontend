import { Link } from 'react-router-dom';

export const ServiceCard = ({ service }) => {
  return (
    <Link to={`/services/${service._id}`}>
      <div className="service-card">
        <h2>{service.name}</h2>

        <p>{service.description}</p>

        <p>{service.price}</p>
      </div>
    </Link>
  );
};
