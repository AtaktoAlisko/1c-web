import Image from "next/image";

export default function Results() {
    return (
        <>
            <div className="bg-gray-800 text-white py-10">
                <div className="container mx-auto text-center">
                    <div className="flex justify-center space-x-10">
                        <div>
                            <p className="text-4xl font-bold">3,680</p>
                            <p>Общее количество выпускников</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold">2,700</p>
                            <p>Количество обладателей грантов</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold">1,399</p>
                            <p>Наивысший балл</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold">52</p>
                            <p>Обладатели зарубежных грантов</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}