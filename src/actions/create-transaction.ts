"use server";

import { transactionSchema } from "@/app/dashboard/transactions/transactions.schema";
import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const CreateTransaction = async (
  data: Omit<Prisma.TransactionCreateInput, "userId">,
) => {
  transactionSchema.parse(data);

  const { userId } = await auth();

  if (!userId) throw new Error("O Usuário não está autenticado");

  await db.transaction.create({ data: { ...data, userId } });

  revalidatePath("/dashboard/transactions");
};
