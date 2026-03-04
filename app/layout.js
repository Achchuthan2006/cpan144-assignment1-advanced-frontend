import "./globals.css";
import NavMenu from "../components/NavMenu";

export const metadata = {
  title: "Assignment 1 - Advanced Front-End Foundations",
  description: "Next.js app demonstrating components, props, state, events, and conditional rendering."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="page-shell">
          <header className="site-header">
            <h1>Advanced Front-End Foundations</h1>
            <p>Assignment 1 Demo Application</p>
          </header>
          <NavMenu />
          <main className="content-area">{children}</main>
        </div>
      </body>
    </html>
  );
}
