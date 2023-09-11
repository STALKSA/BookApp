
  ## Cypress. Установка и настройка проекта

1. Создать новый проект для тестов на Cypress в отдельном репозитории.
4. Убедиться, что вы получили примеры тестов, которые Cypress даёт по умолчанию в новом проекте.
5. Запустить эти тесты, изучить функции и приёмы, которые Cypress показывает на примерах.
6. Удалить примеры.
7. Создайть spec-тест для тестов.
8. Добавьть первый тест с проверкой отображения страницы.


  ##  Настройка второй конфигурации

Cypress позволяет иметь несколько конфигураций для запуска. 

1. Добавьте вторую конфигурацию, используя [эту документацию](https://docs.cypress.io/guides/guides/environment-variables#Option-2-cypress-env-json).
2. В конфигурациях настроить параметры `view-port` для двух разных размеров экрана. Выбрать самый популярный размер экрана на ноутбуках и на мобильных экранах.

  ##  Настройка скриптов запуска

Для упрощения работы с запуском тестов нужно настроить 4 скрипта для запуска в режимах headded и headless и разные браузеры для каждой из конфигураций.