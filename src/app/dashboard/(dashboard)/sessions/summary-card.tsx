import { Card, CardContent, CardHeader } from "@/components/ui/card";
import AddTransactionButton from "../../components/add-transaction-button";
import { formatedAmount } from "@/lib/utils";
import { Decimal } from "@prisma/client/runtime/library";

type SummaryCardProps = {
  icon: React.ReactNode;
  title: string;
  amount: Decimal | number;
  size?: "small" | "large";
};

const SummaryCard = ({
  amount,
  icon,
  title,
  size = "small",
}: SummaryCardProps) => {
  return (
    <Card className={`${size === "large" && "bg-white bg-opacity-[0.04]"}`}>
      <CardHeader className="flex-row items-center gap-4">
        {icon}
        <p
          className={`${size === "small" ? "text-muted-foreground" : "text-white opacity-70"}`}
        >
          {title}
        </p>
      </CardHeader>
      <CardContent className="flex justify-between">
        <p
          className={`font-bold ${size === "small" ? "text-2xl" : "text-4xl"}`}
        >
          {formatedAmount(amount)}
        </p>

        {size === "large" && <AddTransactionButton />}
      </CardContent>
    </Card>
  );
};

export default SummaryCard;
