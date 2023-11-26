import Banner from "@/components/ui/banner";
import Body from "@/components/ui/body";
import Content from "@/components/ui/content";
import Title from "@/components/ui/title";

const About = () => {
    return (
        <div>
            <Banner
                title="You're Invited"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ratione minus architecto excepturi eligendi? Voluptates ab praesentium necessitatibus itaque iste illum"
                imageUrl="https://images.unsplash.com/photo-1543269865-cbf427effbad?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZGVudHN8ZW58MHx8MHx8fDA%3D"
                imageAlt="About us"
            />
            <Body>
                <Title
                    title="Welcome from MIEA"
                    className="md:text-6xl"
                />
                <Content
                    heading="Mission"
                >
                    <p className="text-2xl font-bold mt-5">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, soluta? Hic, voluptatem? Dignissimos, quasi autem culpa ex eos quas excepturi
                    </p>
                </Content>
                <Content
                    heading="History"
                >
                    <p className="text-lg mt-5 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae error corrupti itaque eum iusto neque dolores aspernatur perspiciatis odit inventore, doloribus facere sequi? Quam quo cum necessitatibus impedit, molestiae est!
                    </p>
                </Content>
                <Content
                    heading="Overview"
                >
                    <ul className="ml-6 mt-5 list-disc space-y-2">
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum ipsa saepe repudiandae dolor, nostrum eum voluptatibus distinctio eos corrupti, ut nemo quis facere.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum ipsa saepe repudiandae dolor, nostrum eum voluptatibus distinctio eos corrupti, ut nemo quis facere.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum ipsa saepe repudiandae dolor, nostrum eum voluptatibus distinctio eos corrupti, ut nemo quis facere.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum ipsa saepe repudiandae dolor, nostrum eum voluptatibus distinctio eos corrupti, ut nemo quis facere.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum ipsa saepe repudiandae dolor, nostrum eum voluptatibus distinctio eos corrupti, ut nemo quis facere.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum ipsa saepe repudiandae dolor, nostrum eum voluptatibus distinctio eos corrupti, ut nemo quis facere.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum ipsa saepe repudiandae dolor, nostrum eum voluptatibus distinctio eos corrupti, ut nemo quis facere.</li>
                    </ul>
                </Content>
            </Body>
        </div>
    );
}

export default About;