import propTypes from "prop-types";

export default function ReachedItem({ data, info }) {
  return (
    <div className="me-lg-35">
      <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">
        {data}
      </p>
      <p className="text-lg text-lg-start text-center color-palette-2 m-0">
        {info}
      </p>
    </div>
  );
}

ReachedItem.propTypes = {
  data: propTypes.string,
  info: propTypes.string,
};
