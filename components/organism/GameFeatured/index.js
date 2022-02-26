import GameItem from "../../molecules/GameItem";

export default function GameFeatured() {
  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Our Featured
          <br />
          Games This Year
        </h2>
        <div
          className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
          data-aos="fade-up"
        >
          <GameItem
            imgPath="/img/Thumbnail-1.png"
            title="Super Mechs"
            platform="Mobile"
          />
          <GameItem
            imgPath="/img/Thumbnail-2.png"
            title="Call of Duty: Modern"
            platform="Mobile"
          />
          <GameItem
            imgPath="/img/Thumbnail-3.png"
            title="Mobile Legends"
            platform="Mobile"
          />
          <GameItem
            imgPath="/img/Thumbnail-4.png"
            title="Clash of Clans"
            platform="Mobile"
          />
          <GameItem
            imgPath="/img/Thumbnail-5.png"
            title="Valorant"
            platform="Mobile"
          />
        </div>
      </div>
    </section>
  );
}
