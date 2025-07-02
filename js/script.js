document.addEventListener("DOMContentLoaded", function () {
  // Получаем все элементы переключения и галереи
  const countrySwitchers = document.querySelectorAll(
    ".photography__switch-item"
  );
  const galleries = document.querySelectorAll(".photography__galary-country");

  // Инициализация - скрываем все галереи и убираем подсветку
  function initGalleries() {
    galleries.forEach((gallery) => gallery.classList.add("hidden"));
    countrySwitchers.forEach((switcher) =>
      switcher.classList.remove("bg-purpule")
    );

    // Показываем первую галерею по умолчанию
    if (galleries.length > 0) {
      galleries[0].classList.remove("hidden");
      countrySwitchers[0].classList.add("bg-purpule");
    }
  }

  // Обработчики кликов
  countrySwitchers.forEach((switcher) => {
    switcher.addEventListener("click", function () {
      // 1. Убираем подсветку со всех переключателей
      countrySwitchers.forEach((s) => s.classList.remove("bg-purpule"));

      // 2. Скрываем все галереи
      galleries.forEach((gallery) => gallery.classList.add("hidden"));

      // 3. Получаем класс страны из класса переключателя
      const countryClass = Array.from(this.classList).find(
        (className) => className !== "photography__switch-item"
      );

      // 4. Находим соответствующую галерею
      const targetGallery = document.querySelector(`.country__${countryClass}`);

      // 5. Показываем нужную галерею и подсвечиваем текущий переключатель
      if (targetGallery) {
        targetGallery.classList.remove("hidden");
        this.classList.add("bg-purpule");
      }
    });
  });

  // Инициализируем при загрузке
  initGalleries();
});
