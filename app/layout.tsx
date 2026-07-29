import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "놀라운 음악교실 | 음악 퀘스트",
  description: "음악을 듣고, 신나게 맞히는 참여형 음악 수업.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
