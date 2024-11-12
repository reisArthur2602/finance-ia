"use client";

import { formatedAmount, formatedDate } from "@/lib/utils";
import { Transaction } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";

import EditTransactionButton from "./sessions/edit-transaction-button";
import DeleteTransactionButton from "./sessions/delete-transaction-button";
import TransactionTypeBadge from "./sessions/transaction-type-badge";

export const transactionsColumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "type",
    header: "Tipo",
    cell: ({ row: { original: transaction } }) => (
      <TransactionTypeBadge type={transaction.type} />
    ),
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
