import Image from "next/image";
import propTypes from "prop-types";

export default function Category({ iconPath, children, totalSpent }) {
  let formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });
  return (
    <div className="col-lg-4 ps-15 pe-15 pb-lg-0 pb-4">
      <div className="categories-card">
        <div className="d-flex align-items-center mb-24">
          <Image width={60} height={60} src={`/svg/${iconPath}.svg`} />
          <p className="color-palette-1 mb-0 ms-12">{children}</p>
        </div>
        <div>
          <p className="text-sm color-palette-2 mb-1">Total Spent</p>
          <p className="text-2xl color-palette-1 fw-medium m-0">
            {formatter.format(totalSpent)}
          </p>
        </div>
      </div>
    </div>
  );
}

Category.propTypes = {
  iconPath: propTypes.string,
  children: propTypes.node,
  totalSpent: propTypes.number,
};
