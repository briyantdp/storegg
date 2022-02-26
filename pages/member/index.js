import Head from "next/head";
import OverviewContent from "../../components/organism/OverviewContent";
import SideBar from "../../components/organism/SideBar";
export default function Member() {
  return (
    <>
      <Head>
        <title>Member | Overview</title>
        <meta name="description" content="Member Overview Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Overview */}
      <section className="overview overflow-auto">
        <SideBar menuActive="overview" />
        <OverviewContent />
      </section>
    </>
  );
}
