import Image from "next/image";

const About = () => {
    return (
        <div>
            <div className="w-full relative">
                <div className="absolute flex flex-col z-50 left-0 top-0 min-w-[25rem] w-[600px] mt-[62.5vh] bg-gray-900 text-white py-8 px-16">
                    <div className="text-4xl font-extrabold">
                        You&apos;re Invited
                    </div>
                    <div className="mt-5 font-light leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ratione minus architecto excepturi eligendi? Voluptates ab praesentium necessitatibus itaque iste illum
                    </div>
                </div>
                <Image
                    src={"https://images.unsplash.com/photo-1543269865-cbf427effbad?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZGVudHN8ZW58MHx8MHx8fDA%3D"}
                    alt="about us"
                    width={500}
                    height={500}
                    className="w-full h-[75vh] object-cover"
                />
            </div>
            <div className="mx-20 mt-[20vh]">
                <h1 className="text-6xl text-slate-700 font-black border-l-[6px] border-green-700 pl-5">
                    Welcome from MIEA
                </h1>
                <div className="my-10">
                    <h2 className="text-4xl text-slate-700 font-extrabold underline decoration-green-700 underline-offset-4">
                        Mission
                    </h2>
                    <p className="text-2xl font-bold mt-5">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, soluta? Hic, voluptatem? Dignissimos, quasi autem culpa ex eos quas excepturi
                    </p>
                </div>
                <div className="my-10">
                    <h2 className="text-4xl text-slate-700 font-extrabold underline decoration-green-700 underline-offset-4">
                        History
                    </h2>
                    <p className="text-lg mt-5 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae error corrupti itaque eum iusto neque dolores aspernatur perspiciatis odit inventore, doloribus facere sequi? Quam quo cum necessitatibus impedit, molestiae est!
                    </p>
                </div>
                <div className="my-10">
                    <h2 className="text-4xl text-slate-700 font-extrabold underline decoration-green-700 underline-offset-4">
                        Overview
                    </h2>
                    <ul className="ml-6 mt-5 list-disc space-y-2">
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum ipsa saepe repudiandae dolor, nostrum eum voluptatibus distinctio eos corrupti, ut nemo quis facere.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum ipsa saepe repudiandae dolor, nostrum eum voluptatibus distinctio eos corrupti, ut nemo quis facere.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum ipsa saepe repudiandae dolor, nostrum eum voluptatibus distinctio eos corrupti, ut nemo quis facere.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum ipsa saepe repudiandae dolor, nostrum eum voluptatibus distinctio eos corrupti, ut nemo quis facere.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum ipsa saepe repudiandae dolor, nostrum eum voluptatibus distinctio eos corrupti, ut nemo quis facere.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum ipsa saepe repudiandae dolor, nostrum eum voluptatibus distinctio eos corrupti, ut nemo quis facere.</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum ipsa saepe repudiandae dolor, nostrum eum voluptatibus distinctio eos corrupti, ut nemo quis facere.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default About;