"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { BookOpen } from "lucide-react";
import PublishAnnouncementModal from "@/components/dashboard/announcement/PublishAnnouncementModal";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import NoDataFound from "@/components/dashboard/DShared/NoDataFound";

const AnnouncementsPage = () => {
  const [date, setDate] = useState<Date>();
  const [courseValue, setCourseValue] = useState("all");
  const [sortValue, setSortValue] = useState("createdAt");

  return (
    <div className="space-y-6">
      <div className="p-4 rounded-md border bg-white flex justify-between items-center flex-wrap gap-6">
        <div className="flex items-center gap-4">
          <span className="size-[60px] rounded-full bg-[#FFF9EC] text-primary grid place-items-center">
            <BookOpen />
          </span>
          <div>
            <p className="text-[16px] font-medium text-[#757C8E]">
              Create Announcement
            </p>
            <p className="text-lg font-medium ">
              Notify all students of your course
            </p>
          </div>
        </div>

        <PublishAnnouncementModal />
      </div>
      <div className="flex items-center gap-6">
        <Select value={courseValue}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Course" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="all">All</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select value={sortValue}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Sort By" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="createdAt">A to Z</SelectItem>
              <SelectItem value="-createdAt">Z to A</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Popover>
          <PopoverTrigger className="h-12" asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-full justify-start text-left font-normal",
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
      <div>
        <Table className="border">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Date</TableHead>
              <TableHead className="w-full">Announcements</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="h-[300px]">
            {/* {data.map((item) => (
              <TableRow key={item.OrderID}>
                <TableCell className="font-medium">{item.OrderID}</TableCell>
                <TableCell>{item.courseName}</TableCell>
                <TableCell>{item.date}</TableCell>
                <TableCell className="text-right">{item.price}</TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className="text-red-500 border-red-500"
                  >
                    {item.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))} */}
            <TableCell className="font-medium"></TableCell>

            <NoDataFound />
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AnnouncementsPage;
