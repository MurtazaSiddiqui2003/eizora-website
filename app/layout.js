import "./globals.css";

export const metadata = {
  title: "Eizora Labs — Make digital mean business",
  description: "An independent digital commerce studio building thoughtful websites, Shopify storefronts, and useful e-commerce experiences.",
  openGraph: {
    title: "Eizora Labs — Make digital mean business",
    description: "Independent digital commerce studio. Strategy, design, and development.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
