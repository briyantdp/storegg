import InputText from "../../molecules/InputText";
import CardNominal from "../../molecules/CardNominal";
import Link from "next/link";

export default function TopUpForm() {
  return (
    <form action="/checkout" method="POST">
      {/* Input Text Verify ID */}
      <div className="pt-md-50 pt-30">
        <div className="">
          <InputText
            htmlFor="ID"
            title="Verify ID"
            id="ID"
            name="ID"
            ariaDescribedBy="VerifyID"
            placeholder="Enter your ID"
          />
        </div>
      </div>
      <div className="pt-md-50 pb-md-50 pt-30 pb-20">
        <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
          Nominal Top Up
        </p>
        <div className="row justify-content-between">
          <CardNominal
            htmlFor="topup1"
            id="topup1"
            value="topup1"
            totalGold={125}
            priceGold={3250000}
          />
          <CardNominal
            htmlFor="topup2"
            id="topup2"
            value="topup2"
            totalGold={225}
            priceGold={3250000}
          />
          <CardNominal
            htmlFor="topup3"
            id="topup3"
            value="topup3"
            totalGold={350}
            priceGold={3250000}
          />
          <CardNominal
            htmlFor="topup4"
            id="topup4"
            value="topup4"
            totalGold={550}
            priceGold={3250000}
          />
          <CardNominal
            htmlFor="topup5"
            id="topup5"
            value="topup5"
            totalGold={750}
            priceGold={3250000}
          />
          <div className="col-lg-4 col-sm-6">{/* Blank */}</div>
        </div>
      </div>
      <div className="pb-md-50 pb-20">
        <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
          Payment Method
        </p>
        <fieldset id="paymentMethod">
          <div className="row justify-content-between">
            <label
              className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10"
              htmlFor="transfer"
            >
              <input
                className="d-none"
                type="radio"
                id="transfer"
                name="paymentMethod"
                value="transfer"
              />
              <div className="detail-card">
                <div className="d-flex justify-content-between">
                  <p className="text-3xl color-palette-1 fw-medium m-0">
                    Transfer
                  </p>
                  <svg
                    id="icon-check"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="10" cy="10" r="10" fill="#CDF1FF" />
                    <path
                      d="M5.83301 10L8.46459 12.5L14.1663 7.5"
                      stroke="#00BAFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-lg color-palette-1 m-0">
                  Worldwide Available
                </p>
              </div>
            </label>
            <label
              className="col-lg-4 col-sm-6 ps-md-15 pe-md-15 pt-md-15 pb-md-15 pt-10 pb-10"
              htmlFor="visa"
            >
              <input
                className="d-none"
                type="radio"
                id="visa"
                name="paymentMethod"
                value="visa"
              />
              <div className="detail-card">
                <div className="d-flex justify-content-between">
                  <p className="text-3xl color-palette-1 fw-medium m-0">VISA</p>
                  <svg
                    id="icon-check"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="10" cy="10" r="10" fill="#CDF1FF" />
                    <path
                      d="M5.83301 10L8.46459 12.5L14.1663 7.5"
                      stroke="#00BAFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-lg color-palette-1 m-0">Credit Card</p>
              </div>
            </label>
            <div className="col-lg-4 col-sm-6">{/* Blank */}</div>
          </div>
        </fieldset>
      </div>
      {/* Input Text Bank Account */}
      <div className="pb-50">
        <InputText
          htmlFor="bankAccount"
          title="Bank Account Name"
          id="bankAccount"
          name="bankAccount"
          ariaDescribedBy="bankAccount"
          placeholder="Enter your Bank Account Name"
        />
      </div>
      {/* CTA Button */}
      <div className="d-sm-block d-flex flex-column w-100">
        <Link href="/checkout">
          <a
            type="submit"
            className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg"
          >
            Continue
          </a>
        </Link>
        {/* <button
        type="submit"
        className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg"
      >
        Continue
      </button> */}
      </div>
    </form>
  );
}
