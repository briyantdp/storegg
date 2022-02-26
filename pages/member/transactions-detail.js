import Head from "next/head";
import SideBar from "../../components/organism/SideBar";
import TransactionsDetailContent from "../../components/organism/TransactionsDetailContent";

export default function Transactions() {
  return (
    <>
      <Head>
        <title>Details #GG001</title>
        <meta name="description" content="Details #GG001" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Transactions Detail */}
      <section className="transactions-detail overflow-auto">
        <SideBar menuActive="transactions" />
        <TransactionsDetailContent />
      </section>
    </>
  );
}
