import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  amount: number | undefined;
  className?: string;
}

const PriceFormatter = ({ amount, className}: Props) => {
    const formattedPrice = new Number(amount).toLocaleString("en-NG", {
        currency:"NGN",
        style: "currency",
        minimumFractionDigits: 2
    })
  return <span className={cn("text-sm font-semibold text-darkColor/80", className)}>{formattedPrice}</span>;
};

export default PriceFormatter;
