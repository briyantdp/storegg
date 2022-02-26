import Image from "next/image";
import Link from "next/link";
import propTypes from "prop-types";
import DropdownLink from "./DropdownLink";

export default function Auth({ isLogin }) {
  if (isLogin) {
    return (
      <li className="nav-item my-auto dropdown d-flex">
        <div className="vertical-line d-lg-block d-none"></div>
        <div>
          <a
            className="dropdown-toggle ms-lg-40"
            href="/#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <Image
              src="/img/avatar-1.png"
              className="rounded-circle"
              width={40}
              height={40}
            />
          </a>

          <ul
            className="dropdown-menu border-0"
            aria-labelledby="dropdownMenuLink"
          >
            <DropdownLink title="My Profile" href="/member" />
            <DropdownLink title="Wallet" href="/member/transactions" />
            <DropdownLink
              title="Account Settings"
              href="/member/edit-profile"
            />
            <DropdownLink title="Log Out" href="/sign-in" />
          </ul>
        </div>
      </li>
    );
  }
  return (
    <li className="nav-item my-auto">
      <Link href="/sign-in">
        <a
          className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill"
          role="button"
        >
          Sign In
        </a>
      </Link>
    </li>
  );
}

Auth.propTypes = {
  isLogin: propTypes.bool,
};
