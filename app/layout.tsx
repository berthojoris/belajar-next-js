"use client"
import type { Metadata } from "next";
import Head from "next/head";
import "../public/template/css/styles.css";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const pathName = usePathname();

  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>Create Next App </title>
        <link rel="icon" type="image/x-icon" href="/assets/favicon.ico" />
        <link href="/template/css/styles.css" rel="stylesheet" />
      </Head>
      <body>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" href="/">Next JS 14</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link href="/" className={`nav-link ${pathName === "/" ? "active" : ""}`}>
                  Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/about" className={`nav-link ${pathName === "/about" ? "active" : ""}`}>
                  About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/contact" className={`nav-link ${pathName === "/contact" ? "active" : ""}`}>
                  Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/blog" className={`nav-link ${pathName === "/blog" ? "active" : ""}`}>
                  Blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container mt-5">
          {children}
        </div>
        <footer className="py-5 bg-dark">
          <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Your Website 2023</p></div>
        </footer>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
        <script src="/template/js/scripts.js"></script>
      </body>
    </html>
  );
}
