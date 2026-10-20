export function Footer() {
  return (
    <footer className="mt-16 bg-ink text-paper">
      <div className="container-page flex flex-col items-center gap-10 py-14 text-center md:flex-row md:items-start md:justify-between md:text-left">
        <div>
          <p className="font-display text-2xl font-semibold">Место&nbsp;SPA</p>
          <p className="mt-3 text-sm leading-relaxed text-paper/75">
            Москва, ул. Тверская, 12
            <br />
            +7 (495) 123-45-67
            <br />
            zayavka@meesto-spa.ru
          </p>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-paper/60">
          Учебный проект для тестового задания. Данные вымышлены, заявки никуда не
          отправляются и хранятся только в вашем браузере.
        </p>
      </div>
    </footer>
  );
}
