import { Metadata } from "next";
import SelectMonth from "./sessions/select-month";
import { useDashboard } from "../hooks/useDashboard";
import SummaryCards from "./sessions/summary-cards";
import { isMatch } from "date-fns";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Home - finance.ai",
};

type DashboardPageProps = {
  searchParams: {
    month: string;
  };
};

const DashboardPage = async ({
  searchParams: { month },
}: DashboardPageProps) => {
  const monthIsInvalid = !month || !isMatch(month, "MM");

  if (monthIsInvalid) redirect(`/dashboard?month=${new Date().getMonth() + 1}`);

  const dashboard = await useDashboard(month);

  return (
    <>
      <div className="mb-6 flex w-full items-center justify-between">
        <h2>Dashboard</h2>
        <SelectMonth />
      </div>

      <div className="grid h-full grid-cols-[2fr,1fr] gap-10">
        <section className="bg-red flex flex-col gap-6">
          <SummaryCards data={dashboard} />
          <div>...</div>
        </section>

        <section>...</section>
      </div>
    </>
  );
};

export default DashboardPage;
