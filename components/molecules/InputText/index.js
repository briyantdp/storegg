import propTypes from "prop-types";

export default function InputText({
  htmlFor,
  title,
  id,
  name,
  ariaDescribedBy,
  placeholder,
}) {
  return (
    <>
      <label
        htmlFor={htmlFor}
        className="form-label text-lg fw-medium color-palette-1 mb-10"
      >
        {title}
      </label>
      <input
        type="text"
        className="form-control rounded-pill text-lg"
        id={id}
        name={name}
        aria-describedby={ariaDescribedBy}
        placeholder={placeholder}
      />
    </>
  );
}

InputText.propTypes = {
  htmlFor: propTypes.string,
  title: propTypes.string,
  id: propTypes.string,
  name: propTypes.string,
  ariaDescribedBy: propTypes.string,
  placeholder: propTypes.string,
};
