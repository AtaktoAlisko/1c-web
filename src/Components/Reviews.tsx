import Image from "next/image";

export default function Reviews() {
    return (
        <>
            <section className="px-4">
                <div className="mx-auto max-w-3xl text-center">
                    <h3 className="mb-6 text-3xl font-bold">Testimonials</h3>
                    <p className="mb-6 pb-2 text-neutral-500 dark:text-neutral-300 md:mb-12">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                        error amet numquam iure provident voluptate esse quasi, veritatis
                        totam voluptas nostrum quisquam eum porro a pariatur veniam.
                    </p>
                </div>

                <div className="grid gap-12 text-center md:grid-cols-2">

                    <div className="mb-6 md:mb-0">
                        <div className="mb-6 flex justify-center">
                            <Image
                                src="/reviewer1.png"
                                className="w-24 rounded-full shadow-lg dark:shadow-black/30"
                                alt="Reviewer 1 logo"
                                width={300}
                                height={200}
                            />
                        </div>
                        <p className="my-4 text-xl text-neutral-500 dark:text-neutral-300">
                            "Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing
                            elit sed ut perspiciatis unde omnis."
                        </p>
                        <p className="italic">- Anna Morian</p>
                    </div>


                    <div className="mb-0">
                        <div className="mb-6 flex justify-center">
                        <Image
                                src="/reviewer2.png"
                                className="w-24 rounded-full shadow-lg dark:shadow-black/30"
                                alt="Reviewer 2 logo"
                                width={300}
                                height={200}
                            />
                        </div>
                        <p className="my-4 text-xl text-neutral-500 dark:text-neutral-300">
                            "Neque cupiditate assumenda in maiores repudiandae mollitia
                            architecto elit sed adipiscing elit."
                        </p>
                        <p className="italic">- Teresa May</p>
                    </div>
                </div>
            </section>
        </>
    );
}