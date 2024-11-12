import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const { userId } = await auth();
  !userId && redirect("/login");

  return <main className="h-full px-8 py-5">{children}</main>;
};

export default DashboardLayout;
