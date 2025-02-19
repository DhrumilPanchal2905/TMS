import { metaInfo } from "@/constants/pageMetaInfo";
import Login from "@/components/LoginPage"

export const metadata = {
  title: "Task Management",
  description: "Task Management",
  alternates: { canonical: "https://task.dhrumilpanchal.in" },
  openGraph: {
    url: `${process.env.NEXT_APP_BASE_URL}`,
    title: metaInfo.home.title,
    images: `${process.env.NEXT_APP_BASE_URL}/images/og-image.png`,
    description: metaInfo.home.description,
    type: "article",
  },
  twitter: {
    title: "Task Management | Dhrumil Panchal",
    description:
      "",
    card: "summary_large_image",
  },
  robots: {
    index: process.env.NEXT_APP_ENVIRONMENT === "production",
  },
};

export default function Home() {
  return (
    <>
      <Login />
    </>
  );
}
