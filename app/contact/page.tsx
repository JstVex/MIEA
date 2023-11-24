"use client"

import * as z from "zod"
import Banner from "@/components/ui/banner";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string(),
    phone: z.string(),
    message: z.string()
})


const Contact = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            message: ""
        },
    })


    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
        form.reset();
    }
    return (
        <div>
            <Banner
                title="Contact Us"
                description="Ask us any question you have in your mind"
                imageUrl="https://images.unsplash.com/photo-1543269865-cbf427effbad?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZGVudHN8ZW58MHx8MHx8fDA%3D"
                imageAlt="2022-2023"
            />
            <div className="mx-20 mt-[15vh]">
                <h1 className="text-5xl text-slate-700 font-black border-l-[6px] border-green-700 pl-5">
                    Contact Us
                </h1>
                <div className="my-12 flex space-x-20">
                    <div className="flex-1">
                        <h2 className="text-2xl text-slate-700 font-extrabold mb-6">
                            Ask us any question
                        </h2>
                        <Form {...form} >
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter name" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter email" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="phone"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Phone</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter phone" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Message</FormLabel>
                                            <FormControl>
                                                <Textarea placeholder="Ask us any question or any message in general" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit">
                                    Submit
                                </Button>
                            </form>
                        </Form>
                    </div>
                    <div className="w-1/2">
                        <h2 className="text-2xl text-slate-700 font-extrabold mb-6">
                            Keep In Touch
                        </h2>
                        <div className="flex flex-col space-y-5">
                            <div className="flex flex-col space-y-1">
                                <div className="font-bold text-xl">
                                    Phone
                                </div>
                                <div>
                                    09795744653
                                </div>
                                <div>
                                    09795744653
                                </div>
                            </div>
                            <div className="flex flex-col space-y-1">
                                <div className="font-bold text-xl">
                                    Email
                                </div>
                                <div>
                                    miea@gmail.com
                                </div>
                                <div>
                                    miea@gmail.com
                                </div>
                            </div>
                            <div className="flex flex-col space-y-1">
                                <div className="font-bold text-xl">
                                    Location
                                </div>
                                <div>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ipsa ut aut beatae sapiente quod maxime doloribus
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;