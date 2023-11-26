import Banner from "@/components/ui/banner";
import Body from "@/components/ui/body";
import Content from "@/components/ui/content";
import Title from "@/components/ui/title";

const PreIgcse = () => {
    return (
        <div>
            <Banner
                title="Pre IGCSE"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ratione minus architecto"
                imageUrl="https://images.unsplash.com/photo-1543269865-cbf427effbad?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZGVudHN8ZW58MHx8MHx8fDA%3D"
                imageAlt="Pre IGCSE"
            />
            <Body>
                <Title
                    title="Pre International General Certificate of Secondary Education"
                />
                <Content
                    heading="Overview">
                    <p className="text-lg mt-5 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae error corrupti itaque eum iusto neque dolores aspernatur perspiciatis odit inventore, doloribus facere sequi? Quam quo cum necessitatibus impedit, molestiae est!
                    </p>
                </Content>
                <Content
                    heading="Subjects">
                    <ul className="ml-6 mt-5 text-lg list-disc space-y-2">
                        <li>Mathematics</li>
                        <li>English</li>
                        <li>Physics</li>
                        <li>Chemistry</li>
                        <li>Biology</li>
                        <li>International Technology</li>
                        <li>Computer Science</li>
                    </ul>
                </Content>
                <Content
                    heading="Requirements">
                    <p className="text-lg mt-5 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae error corrupti itaque eum iusto neque dolores aspernatur perspiciatis odit inventore, doloribus facere sequi? Quam quo cum necessitatibus impedit, molestiae est!
                    </p>
                </Content>
            </Body>
        </div>
    );
}

export default PreIgcse;