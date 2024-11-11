import { UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const DashboardPage = () => {
  return (
    <div>
      DashboardPage
      <UserButton showName />
    </div>
  );
};

export default DashboardPage;
