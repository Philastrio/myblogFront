import * as React from "react";
import Link from "next/link";
import Head from "next/head";

type Props = {
  title?: string;
};

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = "This is the default title"
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{" "}
        |{" "}
        <Link href="/users/profile">
          <a>Profile</a>
        </Link>{" "}
        |{" "}
        <Link href="/users/signup">
          <a>가 입</a>
        </Link>{" "}
        |{" "}
      </nav>
    </Head>

    {children}

    <footer>
      <hr />
      <span>Footer</span>
    </footer>
  </div>
);

export default Layout;
