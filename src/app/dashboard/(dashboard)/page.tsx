import { Metadata } from "next";
import SelectMonth from "./sessions/select-month";

export const metadata: Metadata = {
  title: "Home - finance.ai",
};

const DashboardPage = () => {
  return (
    <>
      <div className="mb-6 flex w-full items-center justify-between">
        <h2>Dashboard</h2>
        <SelectMonth />
      </div>
    </>
  );
};

export default DashboardPage;
