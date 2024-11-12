import { Badge } from "@/components/ui/badge";
import { TransactionType } from "@prisma/client";
import { CircleIcon } from "lucide-react";

type TransactionTypeBadgeProps = {
  type: TransactionType;
};

const TransactionTypeBadge = ({ type }: TransactionTypeBadgeProps) => {
  if (type === TransactionType.DEPOSIT) {
    return (
      <Badge className="bg-muted font-bold text-primary hover:bg-muted">
        <CircleIcon className="mr-2 fill-primary" size={10} />
        Depósito
      </Badge>
    );
  }
  if (type === TransactionType.EXPENSE) {
    return (
      <Badge className="bg-danger hover:bg-danger text-danger bg-opacity-10 font-bold">
        <CircleIcon className="fill-danger mr-2" size={10} />
        Despesa
      </Badge>
    );
  }
  return (
    <Badge className="bg-white bg-opacity-10 font-bold text-white hover:bg-muted">
      <CircleIcon className="mr-2 fill-white" size={10} />
      Investimento
    </Badge>
  );
};

export default TransactionTypeBadge;
