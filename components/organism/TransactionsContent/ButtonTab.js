import cx from "classnames";
import propTypes from "prop-types";

export default function ButtonTab({ dataFilter, isActive, title }) {
  const classNames = cx({
    "btn btn-status rounded-pill text-sm me-3": true,
    "btn-active": isActive,
  });
  return (
    <a data-filter={dataFilter} href="#" className={classNames}>
      {title}
    </a>
  );
}

ButtonTab.propTypes = {
  dataFilter: propTypes.string,
  title: propTypes.string,
  isActive: propTypes.bool,
};
