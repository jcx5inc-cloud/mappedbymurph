import "./globals.css";

export const metadata = {
  title: "Mapped By Murph",
  description:
    "Luxury travel planning for honeymoons, group trips, ski escapes, and unforgettable custom vacations."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
