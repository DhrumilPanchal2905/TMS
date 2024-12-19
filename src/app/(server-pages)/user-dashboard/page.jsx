import UserDashboard from '@/components/User/Dashboard';

export const metadata = {
  title: "Task Management",
  description: "Task Management",
  alternates: { canonical: "https://task.dhrumilpanchal.in" },
  openGraph: {
    url: `${process.env.NEXT_APP_BASE_URL}`,
    title: "Task Management",
    images: `${process.env.NEXT_APP_BASE_URL}/images/og-image.png`,
    description: "Task Management",
    type: "article",
  },
  twitter: {
    title: "Task Management | User Side",
    description:
      "",
    card: "summary_large_image",
  },
  robots: {
    index: process.env.NEXT_APP_ENVIRONMENT === "production",
  },
};

export default async function UserDashboardPage() {
  return <UserDashboard/>;
}
