import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import SignUpForm from "../components/organism/SignUpForm";

export default function SignUp() {
  return (
    <>
      <Head>
        <title>Sign Up</title>
        <meta name="description" content="Sign Up Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Sign Up */}
      <section className="sign-up mx-auto pt-lg-100 pb-lg-100 pt-30 pb-47">
        <div className="container mx-auto">
          <form action="">
            <div className="pb-50">
              <a className="navbar-brand" href="/">
                <Image src="/svg/icon.svg" width={60} height={60} alt="Logo" />
              </a>
            </div>
            <SignUpForm />
            <div className="button-group d-flex flex-column mx-auto pt-50">
              <Link href="/sign-up-photo">
                <a
                  className="btn btn-sign-up fw-medium text-lg text-white rounded-pill mb-16"
                  role="button"
                >
                  Continue
                </a>
              </Link>
              {/* <button type="submit" className="btn btn-sign-up fw-medium text-lg text-white rounded-pill mb-16"
                        role="button">Continue</button>  */}
              <Link href="/sign-in">
                <a
                  className="btn btn-sign-in fw-medium text-lg color-palette-1 rounded-pill"
                  role="button"
                >
                  Sign In
                </a>
              </Link>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
