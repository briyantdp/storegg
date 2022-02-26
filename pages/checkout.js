import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import CheckoutConfirmation from "../components/molecules/CheckoutConfirmation";
import CheckoutInformation from "../components/molecules/CheckoutInformation";
import CheckoutItem from "../components/molecules/CheckoutItem";

export default function Checkout() {
  return (
    <>
      <Head>
        <title>StoreGG | Checkout</title>
        <meta name="description" content="StoreGG Checkout Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Checkout Content */}
      <section className="checkout mx-auto pt-md-100 pb-md-145 pt-30 pb-30">
        <div className="container-fluid">
          <div className="logo text-md-center text-start pb-50">
            <Link href="/#">
              <a className="">
                <Image src="/svg/icon.svg" width={60} height={60} />
              </a>
            </Link>
          </div>
          <div className="title-text pt-md-50 pt-0">
            <h2 className="text-4xl fw-bold color-palette-1 mb-10">Checkout</h2>
            <p className="text-lg color-palette-1 mb-0">
              Waktunya meningkatkan cara bermain
            </p>
          </div>
          <CheckoutItem />
          <hr />
          <CheckoutInformation />
          <CheckoutConfirmation />
        </div>
      </section>
    </>
  );
}
