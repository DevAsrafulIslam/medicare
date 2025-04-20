"use client";

import { Area, AreaChart, CartesianGrid, Pie, PieChart, XAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { FaUserDoctor, FaUserInjured, FaCalendarCheck } from "react-icons/fa6";
import { Progress } from "@/components/ui/progress";
import SideBar from "@/pages/Shared/SideBar/SideBar";
import DashboardTitle from "@/pages/DashboardTitle/DashboardTitle";

const chartData = [
  { browser: "chrome", visitors: 275, fill: "#4285F4" },
  { browser: "safari", visitors: 200, fill: "#34A853" },
  { browser: "firefox", visitors: 187, fill: "#FBBC05" },
  { browser: "edge", visitors: 173, fill: "#EA4335" },
  { browser: "other", visitors: 90, fill: "#8F8F8F" },
];

const PieData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "#4285F4",
  },
  safari: {
    label: "Safari",
    color: "#34A853",
  },
  firefox: {
    label: "Firefox",
    color: "#FBBC05",
  },
  edge: {
    label: "Edge",
    color: "#EA4335",
  },
  other: {
    label: "Other",
    color: "#8F8F8F",
  },
  desktop: {
    label: "In-person",
    color: "#4285F4",
  },
  mobile: {
    label: "Telehealth",
    color: "#34A853",
  },
};

const Dashboard = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-[250px] w-full p-4">
        <DashboardTitle />
      </div>
      <div className="flex">
        <SideBar />
        <div className="w-full p-6">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
            <p className="text-gray-500">Welcome to your healthcare management dashboard</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center p-6 border-b border-gray-100">
                  <div className="bg-blue-100 p-4 rounded-lg">
                    <FaUserDoctor className="text-blue-600 text-2xl" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">Total Doctors</p>
                    <h3 className="text-2xl font-bold text-gray-800">168</h3>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-500">Monthly Growth</span>
                    <span className="font-medium text-blue-600">33%</span>
                  </div>
                  <Progress className="h-2 bg-blue-100" value={33} indicatorColor="bg-blue-600" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center p-6 border-b border-gray-100">
                  <div className="bg-green-100 p-4 rounded-lg">
                    <FaUserInjured className="text-green-600 text-2xl" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">Total Patients</p>
                    <h3 className="text-2xl font-bold text-gray-800">1,254</h3>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-500">Monthly Growth</span>
                    <span className="font-medium text-green-600">42%</span>
                  </div>
                  <Progress className="h-2 bg-green-100" value={42} indicatorColor="bg-green-600" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center p-6 border-b border-gray-100">
                  <div className="bg-purple-100 p-4 rounded-lg">
                    <FaCalendarCheck className="text-purple-600 text-2xl" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">Appointments</p>
                    <h3 className="text-2xl font-bold text-gray-800">568</h3>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-500">Weekly Rate</span>
                    <span className="font-medium text-purple-600">78%</span>
                  </div>
                  <Progress className="h-2 bg-purple-100" value={78} indicatorColor="bg-purple-600" />
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="shadow-sm">
              <CardHeader className="pb-2 border-b">
                <CardTitle className="text-lg font-medium">Appointment Distribution</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ChartContainer
                  config={chartConfig}
                  className="mx-auto aspect-square max-h-[300px]"
                >
                  <PieChart>
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent hideLabel />}
                    />
                    <Pie
                      data={chartData}
                      dataKey="visitors"
                      nameKey="browser"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={2}
                    />
                  </PieChart>
                </ChartContainer>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-[#4285F4] mr-2"></div>
                    <span className="text-sm text-gray-600">General Medicine</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-[#34A853] mr-2"></div>
                    <span className="text-sm text-gray-600">Cardiology</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-[#FBBC05] mr-2"></div>
                    <span className="text-sm text-gray-600">Pediatrics</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-[#EA4335] mr-2"></div>
                    <span className="text-sm text-gray-600">Orthopedics</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-sm">
              <CardHeader className="pb-2 border-b">
                <CardTitle className="text-lg font-medium">Patient Trends</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ChartContainer config={chartConfig}>
                  <AreaChart
                    accessibilityLayer
                    data={PieData}
                    margin={{
                      left: 12,
                      right: 12,
                      top: 20,
                      bottom: 20,
                    }}
                  >
                    <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis
                      dataKey="month"
                      tickLine={false}
                      axisLine={false}
                      tickMargin={8}
                      tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent indicator="dot" />}
                    />

                    <Area
                      dataKey="desktop"
                      type="monotone"
                      fill="#4285F4"
                      fillOpacity={0.2}
                      stroke="#4285F4"
                      strokeWidth={2}
                      name="In-person"
                    />
                    <Area
                      dataKey="mobile"
                      type="monotone"
                      fill="#34A853"
                      fillOpacity={0.2}
                      stroke="#34A853"
                      strokeWidth={2}
                      name="Telehealth"
                    />
                  </AreaChart>
                </ChartContainer>
                <div className="flex justify-center gap-6 mt-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-[#4285F4] mr-2"></div>
                    <span className="text-sm text-gray-600">In-person Visits</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-[#34A853] mr-2"></div>
                    <span className="text-sm text-gray-600">Telehealth Visits</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
