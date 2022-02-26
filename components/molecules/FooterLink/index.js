import Link from "next/link";
import propTypes from "prop-types";

export default function FooterLink({ href, title }) {
  return (
    <li className="mb-6">
      <Link href={href}>
        <a className="text-lg color-palette-1 text-decoration-none">{title}</a>
      </Link>
    </li>
  );
}

FooterLink.propTypes = {
  href: propTypes.string,
  title: propTypes.string,
};
