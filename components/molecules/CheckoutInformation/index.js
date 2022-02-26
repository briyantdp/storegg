import Row from "./Row";

export default function CheckoutInformation() {
  const price = 290000;
  let formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });
  return (
    <>
      <div className="purchase pt-md-50 pt-30">
        <h2 className="fw-bold text-xl color-palette-1 mb-20">
          Purchase Details
        </h2>
        <Row title="Your Game ID" value="masayoshizero" />
        <Row title="Order ID" value="#GG001" />
        <Row title="Item" value={`${250} Diamonds`} />
        <Row title="Price" value={formatter.format(price)} />
        <Row title="Tax (10%)" value={formatter.format(price * 0.1)} />
        <Row
          title="Total"
          value={formatter.format(price * 1.1)}
          className="color-palette-4"
        />
      </div>

      <div className="payment pt-md-50 pb-md-50 pt-10 pb-10">
        <h2 className="fw-bold text-xl color-palette-1 mb-20">
          Payment Informations
        </h2>
        <Row title="Your Account Name" value="Masayoshi Angga Zero" />
        <Row title="Type" value="Worldwide Transfer" />
        <Row title="Bank Name" value="Mandiri" />
        <Row title="Bank Account " value="PT Store GG Indonesia" />
        <Row title="Bank Number" value="1800 - 9090 - 2021" />
      </div>
    </>
  );
}
