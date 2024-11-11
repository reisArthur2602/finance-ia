"use client";

import { Button } from "@/components/ui/button";

import { Trash } from "lucide-react";
import { useState } from "react";

type DeleteTransactionButtonProps = {
  id: string;
};

const DeleteTransactionButton = ({ id }: DeleteTransactionButtonProps) => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="text-muted-foreground"
        onClick={() => setDialogIsOpen(true)}
      >
        <Trash size={16} />
      </Button>
    </>
  );
};

export default DeleteTransactionButton;
