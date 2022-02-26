import propTypes from "prop-types";

export default function StepItem({ SvgPath, title, desc1, desc2 }) {
  return (
    <div className="col-lg-4">
      <div className="card feature-card border-0">
        <img src={SvgPath} width={80} height={80} className="mb-30" />
        <p className="fw-semibold text-2xl mb-2 color-palette-1">{title}</p>
        <p className="text-lg color-palette-1 mb-0">
          {desc1}
          <br />
          {desc2}
        </p>
      </div>
    </div>
  );
}

StepItem.propTypes = {
  SvgPath: propTypes.oneOf([
    "/svg/step1.svg",
    "/svg/step2.svg",
    "/svg/step3.svg",
  ]),
  title: propTypes.string,
  desc1: propTypes.string,
  desc2: propTypes.string,
};
