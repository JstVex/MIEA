import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { AlignJustify } from "lucide-react";
import Link from "next/link";

const MobileMenu = () => {
    return (
        <div className="md:hidden ml-auto mr-6 mt-2">
            <Sheet>
                <SheetTrigger>
                    <AlignJustify className="w-6 h-6" />
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetDescription>
                            <div className="flex flex-col items-start w-full text-black text-base mt-10">
                                <Link href={'/'} passHref className="mb-4">
                                    Home
                                </Link>
                                <div className="border-b border-green-600 w-full"></div>
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>About Us</AccordionTrigger>
                                        <AccordionContent>
                                            <Link href={'/about'}>
                                                Our Mission & History
                                            </Link>
                                        </AccordionContent>
                                        <AccordionContent>
                                            <Link href={'/about/instructors'}>
                                                Our Instructors
                                            </Link>
                                        </AccordionContent>
                                        <AccordionContent>
                                            <Link href={'/about/facilities'}>
                                                Our Facilities
                                            </Link>
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-2">
                                        <AccordionTrigger>Courses</AccordionTrigger>
                                        <AccordionContent>
                                            <Link href={'/courses/igcse'}>
                                                IGCSE
                                            </Link>
                                        </AccordionContent>
                                        <AccordionContent>
                                            <Link href={'/courses/pre-igcse'}>
                                                Pre IGCSE
                                            </Link>
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-3">
                                        <AccordionTrigger>Accomplishments</AccordionTrigger>
                                        <AccordionContent>
                                            <Link href={'/accomplishments/2021-2022'}>
                                                2021-2022
                                            </Link>
                                        </AccordionContent>
                                        <AccordionContent>
                                            <Link href={'/accomplishments/2022-2023'}>
                                                2022-2023
                                            </Link>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                                <Link href={'/contact'} passHref className="mt-4">
                                    Contact
                                </Link>
                            </div>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
    );
}

export default MobileMenu;