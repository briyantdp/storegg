import Head from "next/head";
import SideBar from "../../components/organism/SideBar";
import TransactionsContent from "../../components/organism/TransactionsContent";
export default function Transactions() {
  return (
    <>
      <Head>
        <title>Member | Transactions</title>
        <meta name="description" content="Transactions List Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="transactions overflow-auto">
        <SideBar menuActive="transactions" />
        <TransactionsContent />
      </section>
    </>
  );
}
