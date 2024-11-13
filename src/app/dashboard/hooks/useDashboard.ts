import { db } from "@/lib/prisma";
import { formatedPercentage } from "@/lib/utils";
import { auth } from "@clerk/nextjs/server";
import { TransactionType } from "@prisma/client";

export type TransactionPercentagePerType = {
  [key in TransactionType]: number;
};

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

  const transactionsTotal = Number(
    (
      await db.transaction.aggregate({
        where,
        _sum: { amount: true },
      })
    )._sum.amount,
  );

  const typesPercentage: TransactionPercentagePerType = {
    [TransactionType.DEPOSIT]: formatedPercentage(
      depositsTotal,
      transactionsTotal,
    ),

    [TransactionType.EXPENSE]: formatedPercentage(
      expensesTotal,
      transactionsTotal,
    ),

    [TransactionType.INVESTMENT]: formatedPercentage(
      investmentsTotal,
      transactionsTotal,
    ),
  };

  return {
    balance,
    investmentsTotal,
    depositsTotal,
    expensesTotal,
    typesPercentage,
  };
};
