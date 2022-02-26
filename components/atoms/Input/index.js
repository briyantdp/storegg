import propTypes from "prop-types";

export default function Input({ label, placeholder, ...nativeProps }) {
  return (
    <>
      <label
        htmlFor="name"
        className="form-label text-lg fw-medium color-palette-1 mb-10"
      >
        {label}
      </label>
      <input
        type="text"
        className="form-control rounded-pill text-lg"
        id="name"
        name="name"
        aria-describedby="name"
        placeholder={placeholder}
        {...nativeProps}
      />
    </>
  );
}

Input.propTypes = {
  label: propTypes.string,
  placeholder: propTypes.string,
};
