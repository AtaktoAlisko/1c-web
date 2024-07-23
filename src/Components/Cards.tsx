import Image from "next/image";

export default function Cards() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
            <div className="flex flex-col rounded-lg bg-white text-surface shadow-lg dark:bg-surface-dark dark:text-white">
                <a href="#!">
                    <Image
                        className="rounded-t-lg"
                        src="/broHolding.png"
                        alt="Hollywood Sign on The Hill"
                        width={300}
                        height={200}
                        layout="responsive"
                    />
                </a>
                <div className="p-6">
                    <h5 className="mb-2 text-xl font-medium leading-tight">1C:Управление холдингом</h5>
                    <p className="mb-4 text-base">
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.
                    </p>
                </div>
            </div>

            <div className="flex flex-col rounded-lg bg-white text-surface shadow-lg dark:bg-surface-dark dark:text-white">
                <a href="#!">
                    <Image
                        className="rounded-t-lg"
                        src="/broCredit.png"
                        alt="Palm Springs Road"
                        width={300}
                        height={200}
                        layout="responsive"
                    />
                </a>
                <div className="p-6">
                    <h5 className="mb-2 text-xl font-medium leading-tight">Управление кредитованием</h5>
                    <p className="mb-4 text-base">
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.
                    </p>
                </div>
            </div>

            <div className="flex flex-col rounded-lg bg-white text-surface shadow-lg dark:bg-surface-dark dark:text-white">
                <a href="#!">
                    <Image
                        className="rounded-t-lg"
                        src="/broServices.png"
                        alt="Skyscrapers"
                        width={300}
                        height={200}
                        layout="responsive"
                    />
                </a>
                <div className="p-6">
                    <h5 className="mb-2 text-xl font-medium leading-tight">Card title</h5>
                    <p className="mb-4 text-base">
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content.
                    </p>
                </div>
            </div>

            
        </div>
    );
}