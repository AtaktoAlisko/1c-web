import Image from "next/image";

export default function Header() {
  return (
    <>
      <header>
        <ul className="flex justify-between items-center mx-10 p-10">
          <li>
            {" "}
            <Image
              src="/logo.png"
              alt="Next.js Logo"
              width={200}
              height={100}
              priority
            />
          </li>
          <li className="flex gap-10">
            <li>Главная</li>
            <li>О нас</li>
            <li>Продукты</li>
            <li>Услуги</li>
            <li>Выполненные проекты</li>
            <li>Контакты</li>
          </li>
        </ul>
      </header>
    </>
  );
}
