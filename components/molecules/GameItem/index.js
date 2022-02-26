import Image from "next/image";
import Link from "next/link";
import propTypes from "prop-types";

export default function GameItem({ imgPath, title, platform }) {
  return (
    <div className="featured-game-card position-relative">
      <Link href="/detail">
        <a>
          <div className="blur-sharp">
            <img
              src={imgPath}
              width={205}
              height={270}
              alt="thumbnail"
              className="thumbnail"
            />
          </div>
          <div className="cover position-absolute bottom-0 m-32">
            <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
              <div className="game-icon mx-auto">
                <Image
                  src="/svg/console.svg"
                  width={54}
                  height={36}
                  alt="console"
                />
              </div>
              <div>
                <p className="fw-semibold text-white text-xl m-0">{title}</p>
                <p className="fw-light text-white m-0">{platform}</p>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}

GameItem.propTypes = {
  imgPath: propTypes.oneOf([
    "/img/Thumbnail-1.png",
    "/img/Thumbnail-2.png",
    "/img/Thumbnail-3.png",
    "/img/Thumbnail-4.png",
    "/img/Thumbnail-5.png",
  ]),
  title: propTypes.string,
  platform: propTypes.string,
};
