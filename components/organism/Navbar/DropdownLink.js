import Link from "next/link";
import propTypes from "prop-types";

export default function DropdownLink({ title, href }) {
  return (
    <li>
      <Link href={href}>
        <a className="dropdown-item text-lg color-palette-2">{title}</a>
      </Link>
    </li>
  );
}

DropdownLink.propTypes = {
  title: propTypes.string,
  href: propTypes.string,
};
