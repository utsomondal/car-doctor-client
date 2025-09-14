import { Link } from "react-router";

const serviceCard = ({ service }) => {
  const { title, img, price, description, _id } = service;
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img src={img} alt={title} className="aspect-video" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>
          {description.slice(0, 150)}
          {description.length > 150 ? "..." : ""}
        </p>
        <div className="flex items-center card-actions justify-end">
          <p className="text-2xl font-semibold">${price}</p>
          <Link to={`/checkout/${_id}`}>
            <button className="btn btn-primary">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default serviceCard;
