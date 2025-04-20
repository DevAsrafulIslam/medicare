"use client";

import { Button } from "@/components/ui/button";
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
import { APPOINTMENT_TABLE } from "@/data/appointmentTable";
import { cn } from "@/lib/utils";
import DashboardTitle from "@/pages/DashboardTitle/DashboardTitle";
import SideBar from "@/pages/Shared/SideBar/SideBar";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";

const ManageDoctors = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div className="mt-6">
      <h1 className="max-w-[250px] w-full p-4">
        <DashboardTitle />
      </h1>
      <div className="flex">
        <SideBar />
        <div className="w-full space-y-4 mb-8">
          <div className="grid gap-4">
            <div className=" w-full md:px-7">
              <div className="grid grid-cols-2 w-full justify-between px-4 md:px-0">
                <div>
                  <h1 className="text-2xl text-orange-600">
                    {" "}
                    <DashboardTitle />
                  </h1>
                </div>
                <div className="text-end">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "col-span-4 justify-start rounded- text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-white">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              <Table className="mt-8">
                <TableHeader>
                  <TableRow>
                    {APPOINTMENT_TABLE.tableHead.map((tableHead, index) => (
                      <TableHead key={index} className="bg-slate-200">
                        {tableHead}
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>

                {APPOINTMENT_TABLE.items.map((item, index) => (
                  <TableBody key={index}>
                    <TableRow>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{item.Name}</TableCell>
                      <TableCell>{item.Status}</TableCell>
                      <TableCell>{item.Method}</TableCell>
                      <TableCell>{item.Amount}</TableCell>
                    </TableRow>
                  </TableBody>
                ))}
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageDoctors;
