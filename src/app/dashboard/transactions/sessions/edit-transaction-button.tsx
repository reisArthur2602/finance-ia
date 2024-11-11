"use client";

import { Button } from "@/components/ui/button";
import { Transaction } from "@prisma/client";
import { ExternalLink, Trash } from "lucide-react";
import { useState } from "react";

type EditTransactionButtonProps = {
  transaction: Transaction;
};

const EditTransactionButton = ({ transaction }: EditTransactionButtonProps) => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="text-muted-foreground"
        onClick={() => setDialogIsOpen(true)}
      >
        <ExternalLink size={16} />
      </Button>
    
    </>
  );
};

export default EditTransactionButton;
