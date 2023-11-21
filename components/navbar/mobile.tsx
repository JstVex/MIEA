import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
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
                            <div className="flex flex-col items-start space-y-4 w-full text-black text-lg mt-10">
                                <Link href={'/'} passHref>
                                    Home
                                </Link>
                                <div className="border-b border-green-600 w-full"></div>
                                <Link href={'/'} passHref>
                                    About Us
                                </Link>
                                <div className="border-b border-green-600 w-full"></div>
                                <Link href={'/'} passHref>
                                    Courses
                                </Link>
                                <div className="border-b border-green-600 w-full"></div>
                                <Link href={'/'} passHref>
                                    Accomplishments
                                </Link>
                                <div className="border-b border-green-600 w-full"></div>
                                <Link href={'/contact'} passHref>
                                    Contact
                                </Link>
                                {/* <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>Is it accessible?</AccordionTrigger>
                                        <AccordionContent>
                                            Yes. It adheres to the WAI-ARIA design pattern.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-2">
                                        <AccordionTrigger>Is it styled?</AccordionTrigger>
                                        <AccordionContent>
                                            Yes. It comes with default styles that matches the other
                                            components&apos; aesthetic.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-3">
                                        <AccordionTrigger>Is it animated?</AccordionTrigger>
                                        <AccordionContent>
                                            Yes. It&apos;s animated by default, but you can disable it if you
                                            prefer.
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion> */}
                            </div>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
    );
}

export default MobileMenu;