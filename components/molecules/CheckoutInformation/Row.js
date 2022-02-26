import propTypes from "prop-types";

export default function Row({ title, value, className }) {
  return (
    <p className="text-lg color-palette-1 mb-20">
      {title} <span className={`purchase-details ${className}`}>{value}</span>
    </p>
  );
}

Row.propTypes = {
  title: propTypes.string,
  className: propTypes.string,
  value: propTypes.oneOfType([propTypes.string, propTypes.number]),
};
