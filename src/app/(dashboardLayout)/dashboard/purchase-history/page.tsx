"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";

const invoices = [
  {
    OrderID: "#23342",
    courseName: "	Java – Application Development",
    date: "September 26, 2024",
    price: 20,
    status: "Cancelled",
  },
];

const PurchaseHistoryPage = () => {
  const [date, setDate] = React.useState<Date>();
  console.log(date);
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold capitalize">Order History</h1>
      <div className="flex justify-between items-center gap-4 flex-wrap">
        <div className="flex gap-4">
          <Button asChild variant="outline">
            <Link href="purchase_history/?period=today">Today</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="purchase_history/?period=monthly">Monthly</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="purchase_history/?period=yearly">Yearly</Link>
          </Button>
        </div>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-[280px] justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Order ID</TableHead>
            <TableHead>Course Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Amount</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((order) => (
            <TableRow key={order.OrderID}>
              <TableCell className="font-medium">{order.OrderID}</TableCell>
              <TableCell>{order.courseName}</TableCell>
              <TableCell>{order.date}</TableCell>
              <TableCell className="text-right">{order.price}</TableCell>
              <TableCell>
                <Badge
                  variant="outline"
                  className="text-red-500 border-red-500"
                >
                  {order.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PurchaseHistoryPage;
