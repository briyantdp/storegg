import ReachedItem from "../../molecules/ReachedItem";
import Border from "../../molecules/ReachedItem/Border";

export default function Reached() {
  return (
    <section className="reached pt-50 pb-50">
      <div className="container-fluid">
        <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
          <ReachedItem data="290M+" info="Players Top Up" />
          <Border />
          <ReachedItem data="12.500" info="Games Available" />
          <Border />
          <ReachedItem data=" 99,9%" info="Happy Players" />
          <Border />
          <ReachedItem data=" 4.7" info="Rating Worldwide" />
        </div>
      </div>
    </section>
  );
}
