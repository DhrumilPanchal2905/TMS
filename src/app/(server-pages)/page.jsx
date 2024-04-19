import { Metadata } from 'next';
import { metaInfo } from "@/constants/pageMetaInfo";
import HomePage from "@/components/HomePage";

export const Metadata = {
  title: metaInfo.home.title,
  description: metaInfo.home.description,
  alternates: { canonical: "https://dhrumilpanchal.in" },
  openGraph: {
    url: `${process.env.NEXT_APP_BASE_URL}`,
    title: metaInfo.home.title,
    images: `${process.env.NEXT_APP_BASE_URL}/images/og-image.png`,
    description: metaInfo.home.description,
    type: "article",
  },
  twitter: {
    title: "Portfolio | Dhrumil Panchal",
    description:
      "Explore Dhrumil Panchal's portfolio showcasing MERN stack projects and web development expertise.",
    card: "summary_large_image",
  },
  robots: {
    index: process.env.NEXT_APP_ENVIRONMENT === "production",
  },
};

export default async function Home() {
  return (
    apiRes?.length > 0 && (
      <>
        <HomePage />
      </>
    )
  );
}
