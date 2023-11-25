import Banner from "@/components/ui/banner";

const TwentyOneToTwo = () => {
    return (
        <div>
            <Banner
                title="2021-2022 School Year"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ratione minus architecto"
                imageUrl="https://images.unsplash.com/photo-1543269865-cbf427effbad?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZGVudHN8ZW58MHx8MHx8fDA%3D"
                imageAlt="2021-2022"
            />
            <div className="mx-20 mt-[20vh]">
                <h1 className="text-5xl text-slate-700 font-black border-l-[6px] border-green-700 pl-5">
                    Our accomplishment for 2021-2022
                </h1>
                <div className="my-10">
                    <h2 className="text-4xl text-slate-700 font-extrabold underline decoration-green-700 underline-offset-4">
                        Overview
                    </h2>
                    <p className="text-lg mt-5">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, soluta? Hic, voluptatem? Dignissimos, quasi autem culpa ex eos quas excepturi
                    </p>
                </div>
                <div className="my-10">
                    <h2 className="text-4xl text-slate-700 font-extrabold underline decoration-green-700 underline-offset-4">
                        Scores
                    </h2>
                    <p className="text-lg mt-5 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae error corrupti itaque eum iusto neque dolores aspernatur perspiciatis odit inventore, doloribus facere sequi? Quam quo cum necessitatibus impedit, molestiae est!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default TwentyOneToTwo;