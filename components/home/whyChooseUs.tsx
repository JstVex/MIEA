import Card from "./card";

const cardDescription: { title: string; description: string }[] = [
    {
        title: "Qualified instructors",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas doloremque accusamus eius necessitatibus, qui minus quasi mollitia quod est quidem temporibus, distinctio ad officia dolor autem possimus suscipit sed totam!"
    },
    {
        title: "Top-notch facilities",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas doloremque accusamus eius necessitatibus, qui minus quasi mollitia quod est quidem temporibus, distinctio ad officia dolor autem possimus suscipit sed totam!"
    },
    {
        title: "Revision using past papers",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas doloremque accusamus eius necessitatibus, qui minus quasi mollitia quod est quidem temporibus, distinctio ad officia dolor autem possimus suscipit sed totam!"
    },
    {
        title: "Multiple Exams",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas doloremque accusamus eius necessitatibus, qui minus quasi mollitia quod est quidem temporibus, distinctio ad officia dolor autem possimus suscipit sed totam!"
    },
    {
        title: "One to one discussion",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas doloremque accusamus eius necessitatibus, qui minus quasi mollitia quod est quidem temporibus, distinctio ad officia dolor autem possimus suscipit sed totam!"
    }
]

const WhyChooseUs = () => {
    return (
        <div className="my-24">
            <div className="mx-10 leading-8">
                <div className="border-t-[6px] border-green-700 w-1/4"></div>
                <h1 className="text-5xl text-slate-700 font-black mt-8">
                    Why Choose Us
                </h1>
                <div className="ml-24 mr-10 mt-10 text-lg font-light">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit eligendi unde expedita tenetur aspernatur nulla dolore exercitationem, maxime ipsa est.
                </div>
            </div>
            <div className="my-6 mx-6 flex-wrap flex items-center justify-center">
                {cardDescription.map((card) => (
                    <Card
                        key={card.title}
                        title={card.title}
                        description={card.description}
                    />
                ))}
            </div>
        </div>
    );
}

export default WhyChooseUs;