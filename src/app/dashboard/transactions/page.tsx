import { DataTable } from "@/components/ui/data-table";
import { Metadata } from "next";
import React from "react";
import { transactionsColumns } from "./transactions.column";
import { db } from "@/lib/prisma";
import AddTransactionButton from "@/app/dashboard/components/add-transaction-button";

export const metadata: Metadata = {
  title: "Transações - finance.ai",
};

const TransactionsPage = async () => {
  const transactions = await db.transaction.findMany({});

  return (
    <>
      <div className="mb-6 flex w-full items-center justify-between">
        <h2>Transações</h2>
        <AddTransactionButton />
      </div>

      <DataTable columns={transactionsColumns} data={transactions} />
    </>
  );
};

export default TransactionsPage;
