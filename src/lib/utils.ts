import { TransactionType } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTransactionType = (type: TransactionType) => {
  switch (type) {
    case TransactionType.DEPOSIT:
      return {
        name: "Depósito",
        style: "font-bold bg-muted hover:bg-muted text-primary",
        fill: "mr-2 fill-primary",
      };
    case TransactionType.EXPENSE:
      return {
        name: "Despesas",
        style: "font-bold bg-danger hover:bg-danger bg-opacity-10 text-danger",
        fill: "mr-2 fill-danger",
      };
    default:
      return {
        name: "Investimento",
        style: "font-bold bg-white bg-opacity-10 text-white hover:bg-muted",
        fill: "mr-2 fill-white",
      };
  }
};

export const formatedDate = (date: Date) => {
  return date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};

export const formatedAmount = (amount: Decimal) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(Number(amount));
};
