import Banner from "@/components/ui/banner";
import Body from "@/components/ui/body";
import Content from "@/components/ui/content";
import Title from "@/components/ui/title";

const TwentyTwoToThree = () => {
    return (
        <div>
            <Banner
                title="2022-2023 School Year"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ratione minus architecto"
                imageUrl="https://images.unsplash.com/photo-1543269865-cbf427effbad?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZGVudHN8ZW58MHx8MHx8fDA%3D"
                imageAlt="2022-2023"
            />
            <Body>
                <Title
                    title="Our accomplishment for 2022-2023"
                />
                <Content
                    heading="Overview"
                >
                    <p className="text-lg mt-5">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, soluta? Hic, voluptatem? Dignissimos, quasi autem culpa ex eos quas excepturi
                    </p>
                </Content>
                <Content
                    heading="Score"
                >
                    <p className="text-lg mt-5">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, soluta? Hic, voluptatem? Dignissimos, quasi autem culpa ex eos quas excepturi
                    </p>
                </Content>
            </Body>
        </div>
    );
}

export default TwentyTwoToThree;