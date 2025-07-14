import Card from "@/components/Cards/Card";

function PageDashboard() {
    return (
        <section className="">
            <h2 className="text-black">Online store</h2>
            <div className="">
                <Card
                    name="Jean"
                    comment="This is a great product!"
                    avatar=""
                    rating={4}
                />
                <Card
                    name="Jane Smith"
                    comment="I love this service!"
                    avatar=""
                    rating={5}
                />
                <Card
                    name="John Doe"
                    comment="Highly recommend!"
                    avatar=""
                    rating={3}
                />

            </div>

        </section>
    )
}

export default PageDashboard;