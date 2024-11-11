import { DataTable } from "@/components/data-table";
import { Button } from "@/components/ui/button";
import { ArrowDownUp } from "lucide-react";
import { Metadata } from "next";
import React from "react";
import { transactionsColumns } from "./transactions.columns";
import { db } from "@/lib/prisma";

export const metadata: Metadata = {
  title: "Transações - finance.ai",
};

const TransactionsPage = async () => {
  const transactions = await db.transaction.findMany({});

  return (
    <>
      <div className="mb-6 flex w-full items-center justify-between">
        <h2>Transações</h2>
        <Button className="rounded-full">
          Adicionar Transação <ArrowDownUp />
        </Button>
      </div>

      <DataTable columns={transactionsColumns} data={transactions} />
    </>
  );
};

export default TransactionsPage;
