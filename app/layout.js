import NavBar from "@/components/header/navbar";
import "./globals.css";

export const metadata = {
  title: "CertRanker",
  description: "CertRanker provides a listing of popular IT certifications from Microsoft, allowing users to submit training resources and vote on the best resources for the given certification exam.",
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
