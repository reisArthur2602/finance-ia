import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TotalExpensePerCategory } from "../../hooks/useDashboard";
import { TRANSACTION_CATEGORY_LABELS } from "../../transactions/transactions.constants";
import { formatedAmount } from "@/lib/utils";

type ExpensesPerCategoryProps = {
  expensesPerCategory: TotalExpensePerCategory[];
};

const ExpensesPerCategory = ({
  expensesPerCategory,
}: ExpensesPerCategoryProps) => {
  return (
    <ScrollArea className="col-span-2 max-h-[27.5rem] h-full rounded-md border pb-6">
      <CardHeader>
        <CardTitle className="font-bold">Gastos por Categoria</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-6">
        {expensesPerCategory.map((category) => (
          <div key={category.category} className="space-y-2">

            <div className="flex w-full justify-between">
              <p className="text-sm font-bold">
                {TRANSACTION_CATEGORY_LABELS[category.category]}
              </p>

              <p className="text-sm font-bold">{category.percentageOfTotal}%</p>

            </div>
            <Progress value={category.percentageOfTotal} />
            <p className="text-sm opacity-[0.4]">{formatedAmount(category.totalAmount)}</p>
          </div>
        ))}
      </CardContent>
    </ScrollArea>
  );
};

export default ExpensesPerCategory;
