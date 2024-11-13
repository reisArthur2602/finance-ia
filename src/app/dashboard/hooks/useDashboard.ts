import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export const useDashboard = async (month: string) => {
  const { userId } = await auth();

  const startMonth = new Date(`2024-${month}-01`);
  const endMonth = new Date(`2024-${month}-31`);

  const where = {
    userId: userId as string,
    date: {
      gte: startMonth,
      lt: endMonth,
    },
  };

  const depositsTotal = Number(
    (
      await db.transaction.aggregate({
        where: {
          ...where,
          type: "DEPOSIT",
        },
        _sum: { amount: true },
      })
    )?._sum?.amount,
  );

  const investmentsTotal = Number(
    (
      await db.transaction.aggregate({
        where: {
          ...where,
          type: "INVESTMENT",
        },
        _sum: { amount: true },
      })
    )?._sum?.amount,
  );

  const expensesTotal = Number(
    (
      await db.transaction.aggregate({
        where: {
          ...where,
          type: "EXPENSE",
        },
        _sum: { amount: true },
      })
    )?._sum?.amount,
  );
  
  const balance = depositsTotal - investmentsTotal - expensesTotal;

  return {
    balance,
    investmentsTotal,
    depositsTotal,
    expensesTotal,
  };
};
