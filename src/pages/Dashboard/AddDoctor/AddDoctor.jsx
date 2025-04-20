"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import SideBar from "@/pages/Shared/SideBar/SideBar";
import { Label } from "@radix-ui/react-dropdown-menu";

const AddDoctor = () => {
  return (
    <div className="">
      <h1 className="max-w-[250px] w-full p-4">Add Doctor</h1>
      <div className="flex">
        <SideBar />
        <div className="w-full container space-y-4 mb-8">
          <div className="grid gap-4">
            <div className="">
              <div className="container">
                <Card className="w-[350px] mx-auto">
                  <CardHeader>
                    <CardTitle className="text-center text-5xl text-red-800">
                      <h2>Doctors</h2>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form>
                      <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                          <Label htmlFor="name">Name</Label>
                          <Input id="name" placeholder="Enter Your Name" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                          <Label htmlFor="name">Email</Label>
                          <Input id="email" placeholder="Enter Your Email" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                          <Label htmlFor="specialty">Specialty</Label>
                          <Select>
                            <SelectTrigger className="">
                              <SelectValue placeholder="Select a fruit" />
                            </SelectTrigger>
                            <SelectContent className="bg-white">
                              <SelectGroup>
                                <SelectLabel>Fruits</SelectLabel>
                                <SelectItem value="apple">Apple</SelectItem>
                                <SelectItem value="banana">Banana</SelectItem>
                                <SelectItem value="blueberry">
                                  Blueberry
                                </SelectItem>
                                <SelectItem value="grapes">Grapes</SelectItem>
                                <SelectItem value="pineapple">
                                  Pineapple
                                </SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="flex flex-col space-y-1.5">
                          <Input
                            type="imagemg"
                            id="img"
                            placeholder="Enter Your Email"
                          />
                        </div>
                      </div>
                    </form>
                  </CardContent>
                  <CardFooter className="flex justify-around">
                    <Button
                      variant="outline"
                      className="w-full hover:bg-slate-500 hover:text-white rounded-md hover:border-slate-500 border-zinc-950"
                    >
                      Add
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDoctor;
