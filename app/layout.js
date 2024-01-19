import NavBar from "@/components/header/navbar";
import "./globals.css";

export const metadata = {
  title: "MSVote",
  description: "MSVote",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
