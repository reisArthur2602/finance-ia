import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import HeaderDashboard from "./components/header";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const { userId } = await auth();
  !userId && redirect("/login");

  return (
    <div className="flex h-full flex-col">
      <HeaderDashboard />
      <main className="flex-1 px-8 py-5">{children}</main>
    </div>
  );
};

export default DashboardLayout;
