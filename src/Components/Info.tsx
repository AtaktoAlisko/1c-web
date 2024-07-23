import Image from "next/image";

export default function Info() {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-5">
        <div
          className="mx-3 mt-6 flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
          <div className="p-6 text-center">
          <h3 className="mb-2 text-6xl font-medium leading-tight">😎</h3>
            <p className="mb-4 text-base">
              Для руководителя
            </p>
          </div>
        </div>

        <div
          className="mx-3 mt-6 flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
          <div className="p-6 text-center">
          <h3 className="mb-2 text-6xl font-medium leading-tight">🧮</h3>
            <p className="mb-4 text-base">
              Для бухгалтера
            </p>
          </div>
        </div>
        <div
          className="mx-3 mt-6 flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
          <div className="p-6 text-center">
          <h3 className="mb-2 text-6xl font-medium leading-tight">💰</h3>
            <p className="mb-4 text-base">
              Для казначейства
            </p>
          </div>
        </div>
        <div
          className="mx-3 mt-6 flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
          <div className="p-6 text-center">
          <h3 className="mb-2 text-6xl font-medium leading-tight">🚚</h3>
            <p className="mb-4 text-base">
              Для транспортного отдела
            </p>
          </div>
        </div>
        <div
          className="mx-3 mt-6 flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
          <div className="p-6 text-center">
          <h3 className="mb-2 text-6xl font-medium leading-tight">🛒</h3>
            <p className="mb-4 text-base">
              Для отдела закупки
            </p>
          </div>
        </div>
        <div
          className="mx-3 mt-6 flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
          <div className="p-6 text-center">
          <h3 className="mb-2 text-6xl font-medium leading-tight">🏭</h3>
            <p className="mb-4 text-base">
              Для производства
            </p>
          </div>
        </div>
        <div
          className="mx-3 mt-6 flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
          <div className="p-6 text-center">
          <h3 className="mb-2 text-6xl font-medium leading-tight">⚙️</h3>
            <p className="mb-4 text-base">
              Для технического отдела
            </p>
          </div>
        </div>
        <div
          className="mx-3 mt-6 flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
          <div className="p-6 text-center">
          <h3 className="mb-2 text-6xl font-medium leading-tight">📦</h3>
            <p className="mb-4 text-base">
              Для склада
            </p>
          </div>
        </div>
        <div
          className="mx-3 mt-6 flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
          <div className="p-6 text-center">
          <h3 className="mb-2 text-6xl font-medium leading-tight">🛠️</h3>
            <p className="mb-4 text-base">
              Для ИТ отдела
            </p>
          </div>
        </div>
        <div
          className="mx-3 mt-6 flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
          <div className="p-6 text-center">
          <h3 className="mb-2 text-6xl font-medium leading-tight">👥</h3>
            <p className="mb-4 text-base">
              Для службы ИБ
            </p>
          </div>
        </div>
       
      </div>
    </>
  );
}
