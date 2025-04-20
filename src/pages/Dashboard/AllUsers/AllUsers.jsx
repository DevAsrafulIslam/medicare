"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { APPOINTMENT_TABLE } from "@/data/appointmentTable";
import { cn } from "@/lib/utils";
import DashboardTitle from "@/pages/DashboardTitle/DashboardTitle";
import SideBar from "@/pages/Shared/SideBar/SideBar";
import { format } from "date-fns";
import { CalendarIcon, Search, Download, ChevronLeft, ChevronRight } from "lucide-react";

const AllUsers = () => {
  const [date, setDate] = useState(new Date());
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [filteredItems, setFilteredItems] = useState(APPOINTMENT_TABLE.items);
  
  // Apply filters when search term, status filter or date changes
  useEffect(() => {
    let results = APPOINTMENT_TABLE.items;
    
    // Filter by search term
    if (searchTerm) {
      results = results.filter(item => 
        item.Name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by status
    if (statusFilter !== "all") {
      results = results.filter(item => item.Status === statusFilter);
    }
    
    // Filter by date (assuming there's a date field in your data)
    // Uncomment and modify this if you have date data
    /*
    if (date) {
      const formattedDate = format(date, "yyyy-MM-dd");
      results = results.filter(item => {
        return item.Date === formattedDate;
      });
    }
    */
    
    setFilteredItems(results);
    setCurrentPage(1); // Reset to first page when filters change
  }, [searchTerm, statusFilter, date]);
  
  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  
  // Handle export to CSV
  const exportToCSV = () => {
    // Implementation for exporting data to CSV
    alert("Export functionality would go here");
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-[250px] w-full p-4">
        <DashboardTitle />
      </div>
      
      <div className="flex">
        <SideBar />
        
        <div className="w-full p-6 space-y-6">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-800">
                  All Users <span className="text-blue-600 ml-2">{filteredItems.length}</span>
                </h1>
                <p className="text-gray-500">Manage and monitor user accounts</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "justify-start rounded-lg border-gray-300 bg-white text-gray-700 hover:bg-gray-50",
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
                
                <Button 
                  variant="outline" 
                  className="bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                  onClick={exportToCSV}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Export
                </Button>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input
                  placeholder="Search users..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              
              <div className="w-full md:w-48">
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="Paid">Paid</SelectItem>
                    <SelectItem value="Pending">Pending</SelectItem>
                    <SelectItem value="Failed">Failed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="w-full md:w-32">
                <Select value={itemsPerPage.toString()} onValueChange={(value) => setItemsPerPage(Number(value))}>
                  <SelectTrigger className="border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                    <SelectValue placeholder="Show" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5">5 rows</SelectItem>
                    <SelectItem value="10">10 rows</SelectItem>
                    <SelectItem value="20">20 rows</SelectItem>
                    <SelectItem value="50">50 rows</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <Table>
                <TableHeader>
                  <TableRow>
                    {APPOINTMENT_TABLE.tableHead.map((tableHead, index) => (
                      <TableHead key={index} className="bg-gray-50 text-gray-700 font-semibold py-4">
                        {tableHead}
                      </TableHead>
                    ))}
                    <TableHead className="bg-gray-50 text-gray-700 font-semibold py-4">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                
                <TableBody>
                  {currentItems.length > 0 ? (
                    currentItems.map((item, index) => (
                      <TableRow key={index} className="hover:bg-gray-50 transition-colors">
                        <TableCell className="font-medium">{indexOfFirstItem + index + 1}</TableCell>
                        <TableCell>{item.Name}</TableCell>
                        <TableCell>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            item.Status === 'Paid' ? 'bg-green-100 text-green-800' :
                            item.Status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {item.Status}
                          </span>
                        </TableCell>
                        <TableCell>{item.Method}</TableCell>
                        <TableCell className="font-medium">${item.Amount}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm" className="h-8 px-2 text-blue-600 border-blue-200 hover:bg-blue-50">
                              View
                            </Button>
                            <Button variant="outline" size="sm" className="h-8 px-2 text-red-600 border-red-200 hover:bg-red-50">
                              Delete
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={APPOINTMENT_TABLE.tableHead.length + 1} className="text-center py-8 text-gray-500">
                        No users found matching your criteria
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
            
            {/* Pagination */}
            {filteredItems.length > 0 && (
              <div className="flex items-center justify-between mt-6">
                <div className="text-sm text-gray-500">
                  Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, filteredItems.length)} of {filteredItems.length} entries
                </div>
                
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="h-8 w-8 p-0 border-gray-300"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  
                  {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                    const pageNumber = i + 1;
                    return (
                      <Button
                        key={i}
                        variant={currentPage === pageNumber ? "default" : "outline"}
                        size="sm"
                        onClick={() => setCurrentPage(pageNumber)}
                        className={`h-8 w-8 p-0 ${
                          currentPage === pageNumber 
                            ? 'bg-blue-600 text-white' 
                            : 'border-gray-300 text-gray-700'
                        }`}
                      >
                        {pageNumber}
                      </Button>
                    );
                  })}
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="h-8 w-8 p-0 border-gray-300"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
