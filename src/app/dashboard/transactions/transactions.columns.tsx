"use client";

import { Badge } from "@/components/ui/badge";
import { formatedAmount, formatedDate, getTransactionType } from "@/lib/utils";
import { Transaction } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { CircleIcon, TrashIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";
import EditTransactionButton from "./sessions/edit-transaction-button";
import { Button } from "@/components/ui/button";
import DeleteTransactionButton from "./sessions/delete-transaction-button";

export const transactionsColumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "type",
    header: "Tipo",
    cell: ({ row: { original: transaction } }) => {
      const typeTransaction = getTransactionType(transaction.type);

      return (
        <Badge className={typeTransaction.style}>
          <CircleIcon size={10} className={typeTransaction.fill} />
          {typeTransaction.name}
        </Badge>
      );
    },
  },
  {
    accessorKey: "category",
    header: "Categoria",
  },
  {
    accessorKey: "paymentMethod",
    header: "Método de Pagamento",
  },
  {
    accessorKey: "date",
    header: "Data",
    cell: ({ row: { original: transaction } }) =>
      formatedDate(transaction.date),
  },
  {
    accessorKey: "amount",
    header: "Valor",
    cell: ({ row: { original: transaction } }) =>
      formatedAmount(transaction.amount),
  },

  {
    accessorKey: "actions",
    header: "Ações",
    cell: ({ row: { original: transaction } }) => {
      return (
        <div className="space-x-2">
          <EditTransactionButton transaction={transaction} />
          <DeleteTransactionButton id={transaction.id} />
        </div>
      );
    },
  },
];
