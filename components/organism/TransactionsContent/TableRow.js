import cx from "classnames";
import propTypes from "prop-types";

export default function TableRow({
  dataCategory,
  imgPath,
  title,
  platform,
  totalItem,
  price,
  status,
}) {
  const classNames = cx({
    "float-start icon-status": true,
    pending: status == "Pending",
    success: status == "Success",
    failed: status == "Failed",
  });

  let formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });
  return (
    <tr data-category={dataCategory} className="align-middle">
      <th scope="row">
        <img
          className="float-start me-3 mb-lg-0 mb-3"
          src={imgPath}
          width="80"
          height="60"
          alt=""
        />
        <div className="game-title-header">
          <p className="game-title fw-medium text-start color-palette-1 m-0">
            {title}
          </p>
          <p className="text-xs fw-normal text-start color-palette-2 m-0">
            {platform}
          </p>
        </div>
      </th>
      <td>
        <p className="fw-medium color-palette-1 m-0">{totalItem} Gold</p>
      </td>
      <td>
        <p className="fw-medium color-palette-1 m-0">
          {formatter.format(price)}
        </p>
      </td>
      <td>
        <div>
          <span className={classNames}></span>
          <p className="fw-medium text-start color-palette-1 m-0 position-relative">
            {status}
          </p>
        </div>
      </td>
      <td>
        <a
          href="/member/transactions-detail"
          className="btn btn-status rounded-pill text-sm"
        >
          Details
        </a>
      </td>
    </tr>
  );
}

TableRow.propTypes = {
  dataCategory: propTypes.string,
  imgPath: propTypes.oneOf([
    "/img/overview-1.png",
    "/img/overview-2.png",
    "/img/overview-3.png",
    "/img/overview-4.png",
  ]),
  title: propTypes.string,
  platform: propTypes.string,
  totalItem: propTypes.number,
  price: propTypes.number,
  status: propTypes.string,
};
