import "../public/template/css/styles.css";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "Next.JS 14",
    template: "",
  },
};

export default function RootLayout({children}: {children: React.ReactNode},) {

  return (
    <html lang="en">
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
                  <Link href="/" className="nav-link">
                  Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/about" className="nav-link">
                  About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/contact" className="nav-link">
                  Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/blog" className="nav-link">
                  Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/blog/lapar-coi" className="nav-link">
                  Blog Detail
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
          <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Your Website 2024</p></div>
        </footer>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
        <script src="/template/js/scripts.js"></script>
      </body>
    </html>
  );
}
