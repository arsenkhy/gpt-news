import "./globals.css";
import { Montserrat, Open_Sans } from "next/font/google";
import Header from "app/(components)/Header";
import Footer from "app/(components)/Footer";

// const openSans = Open_Sans({
//   subsets: ["latin"],
// });

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata = {
  title: "Tech TLDR",
  description: "A blog made by GPT",
};

  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html className={montserrat.className} lang="en">
        <body>
        <div className="bg-gradient-new bg-gradient-blur">
          <Header />
          {children}
          <Footer />
        </div>
        </body>
      </html>
    );
  }
