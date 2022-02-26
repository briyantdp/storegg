import cx from "classnames";
import Image from "next/image";
import Link from "next/link";
import propTypes from "prop-types";

export default function MenuItem({ iconPath, href, title, isActive }) {
  const classNames = cx({
    item: true,
    "mb-30": true,
    active: isActive,
  });
  return (
    <>
      <div className={classNames}>
        <div className="icon me-3">
          <Image src={`/svg/${iconPath}.svg`} width={25} height={25} />
        </div>
        <p className="item-title m-0">
          <Link href={href}>
            <a className="text-lg text-decoration-none">{title}</a>
          </Link>
        </p>
      </div>
    </>
  );
}

MenuItem.propTypes = {
  iconPath: propTypes.string,
  href: propTypes.string,
  title: propTypes.string,
};
