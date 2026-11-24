import "./globals.css";

export const metadata = {
  title: "Eizora Labs — Digital experiences that move business forward",
  description:
    "Eizora Labs is a digital commerce and technology studio helping growing brands build better websites and e-commerce experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
