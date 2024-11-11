import { UserButton } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - finance.ai",
};

const DashboardPage = () => {
  return (
    <div>
      DashboardPage
      <UserButton showName />
    </div>
  );
};

export default DashboardPage;
