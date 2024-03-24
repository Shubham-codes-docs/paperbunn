import React from "react";
import { formSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import Swal from "sweetalert2";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { v4 } from "uuid";
import { writeData } from "@/lib/db";

const FormWrapper = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      instagram: "",
      followers: "",
      engagement: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const id = v4();

    const formData = {
      ...data,
      id,
    };
    const res = await writeData(`users/${id}`, formData);
    console.log(res);
    if (res) {
      Swal.fire({
        title: "Success",
        text: "Data submitted successfully!",
        icon: "success",
        confirmButtonText: "Cool",
      });
      form.reset();
    } else {
      Swal.fire({
        title: "Error",
        text: "Data submission failed!",
        icon: "error",
        confirmButtonText: "Try Again",
      });
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-9 max-w-[500px] p-3 space-y-8 bg-[rgba(255,255,255,0.13)] border-[2px] border-[rgba(255, 255, 255, 0.5)] rounded-2xl flex flex-col items-center justify-center"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="w-full sm:w-[400px] flex flex-col items-start">
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your full name." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-wrap items-center justify-starts gap-5">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full sm:w-[200px] flex flex-col items-start">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="example@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="w-full sm:w-[200px] flex flex-col items-start">
                <FormLabel>Mobile Number</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your mobile number." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem className="w-full sm:w-[400px] flex flex-col items-start">
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input placeholder="Enter your address." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="instagram"
          render={({ field }) => (
            <FormItem className="w-full sm:w-[400px] flex flex-col items-start">
              <FormLabel>Instagram Handle</FormLabel>
              <FormControl>
                <Input
                  placeholder="Your Instagram handle goes here"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-wrap items-center justify-center gap-5">
          <FormField
            control={form.control}
            name="followers"
            render={({ field }) => (
              <FormItem className="w-full sm:w-[200px] flex flex-col items-start">
                <FormLabel>Followers on Instagram</FormLabel>
                <FormControl>
                  <Input
                    placeholder=" Enter your instagram follower count."
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="engagement"
            render={({ field }) => (
              <FormItem className="w-full sm:w-[200px] flex flex-col items-start">
                <FormLabel className="line-clamp-1">
                  Engagement in last 30 Days
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your instagram engagement count."
                    type="number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default FormWrapper;
