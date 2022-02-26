import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Input from "../../components/atoms/Input";
import SideBar from "../../components/organism/SideBar";

export default function EditProfile() {
  return (
    <>
      <Head>
        <title>Member | Edit Profile</title>
        <meta name="description" content="Edit Profile Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Transactions Detail */}
      <section className="edit-profile overflow-auto">
        <SideBar menuActive="settings" />
        <main className="main-wrapper">
          <div className="ps-lg-0">
            <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
            <div className="bg-card pt-30 ps-30 pe-30 pb-30">
              <form action="">
                <div className="photo d-flex">
                  <div className="position-relative me-20">
                    <Image
                      src="/img/avatar-1.png"
                      width={90}
                      height={90}
                      className="avatar img-fluid"
                    />
                    <div className="avatar-overlay position-absolute top-0 d-flex justify-content-center align-items-center">
                      <Image
                        src="/svg/delete-profile.svg"
                        width={40}
                        height={40}
                      />
                    </div>
                  </div>
                  <div className="image-upload">
                    <label htmlFor="avatar">
                      <Image
                        src="/svg/upload.svg"
                        width={90}
                        height={90}
                        className="avatar img-fluid"
                      />
                    </label>
                    <input
                      id="avatar"
                      type="file"
                      name="avatar"
                      accept="image/png, image/jpeg"
                    />
                  </div>
                </div>
                <div className="pt-30">
                  <Input label="Full Name" placeholder="Enter your name" />
                </div>
                <div className="pt-30">
                  <Input
                    label="Email Address"
                    placeholder="Enter your email address"
                  />
                </div>
                <div className="pt-30">
                  <Input label="Phone" placeholder="Enter your phone" />
                </div>
                <div className="button-group d-flex flex-column pt-50">
                  <Link href="/member">
                    <a
                      type="submit"
                      className="btn btn-save fw-medium text-lg text-white rounded-pill"
                      role="button"
                    >
                      Save My Profile
                    </a>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
