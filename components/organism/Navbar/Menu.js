import Link from "next/link";
import propTypes from "prop-types";
import cx from "classnames";

export default function Menu({ title, isActive, href = "/" }) {
  const navClassNames = cx({
    "nav-link": true,
    active: isActive,
  });

  return (
    <li className="nav-item my-auto">
      <Link href={href}>
        <a className={navClassNames} aria-current="page">
          {title}
        </a>
      </Link>
    </li>
  );
}

Menu.propTypes = {
  title: propTypes.string,
  isActive: propTypes.bool,
  href: propTypes.string,
};
