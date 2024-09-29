"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import NoDataFound from "@/components/dashboard/DShared/NoDataFound";

const QuizAttemptsPage = () => {
  const [date, setDate] = useState<Date>();
  const [courseValue, setCourseValue] = useState("all");
  const [sortValue, setSortValue] = useState("createdAt");
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold">Quiz Attempts</h1>
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
      <NoDataFound />
    </div>
  );
};

export default QuizAttemptsPage;
