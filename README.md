# Simbirsoft test app

---

## Требования к заданию:

> Обязательные технологии: Фреймворк React/Vuejs/Angular

Приложение разработано с использованием **React JS**

> Допускается использовать: Любые UI библиотеки (Оценивается рациональность выбора)

В приложении использован сторонний компонент **react-calendar** для упрощения ввода данных в фильтр по дате

---

## Основные требования:

> Приложение должно представлять из себя сайт просмотра статистики ведущих европейских турниров по футболу.

Приложение является STA и предоставляет данные по статистике ведущих европейских турниров по футболу с помощью API: https://www.football-data.org/

> ### Обязательные страницы:
>
> - Список лиг

Реализована страница Competitions:
https://svlipatnikov.github.io/simbirsoft-test/#/competitions

> - Список команд

Реализована страница Teams:
https://svlipatnikov.github.io/simbirsoft-test/#/teams

> - Календарь лиги

Для каждой лиги реализована страница **Matches**, на которой представлены все матчи лиги, например:
https://svlipatnikov.github.io/simbirsoft-test/#/competitions/2013/matches

> - Календарь одной команды

Для каждой команды реализована страница **Matches**, на которой представлены все матчи лиги, например:
https://svlipatnikov.github.io/simbirsoft-test/#/teams/57/matches

> На каждой странице должна быть возможность выбрать год.

Требование не реализовано напрямую по следующим причинам:

- Напрямую в API отсутствуют фильтр выбора года для "обязательных" страниц
- Информация, получаемая с API по "обязательным" страницам, не содержит данных, которые можно использовать для реализации собственного фильтра выбора года
- Для страниц "Список лиг" и "Список команд" смысловая суть фильтра выбора года не понятна, для страниц "Календарь лиги" и "Календарь одной команды" реализован фильтр **DATE**, позволяющий выбрать любой диапазон даты.

> На страницах календаря можно указать фильтр по дате (с, по)

Реализовано с помощью фильтра **DATE**

> На страницах списка можно найти сущность по текстовому поиску.

Реализован текстовый поиск по полученной информации с помощью фильтра **SEARCH**

> После обновления страницы данные (год, команда, поисковой запрос) должны сохраняться, т.е. параметры должны быть отображены в адресной строке (роутинг либо GET параметры)

Реализовано через **GET параметры**

> В качестве публичного API для получения данных рекомендуется использовать https://www.football-data.org/. Кандидат может использовать любое другое API при условии что оно позволит получить необходимые для выполнения задания данные.

Использовано API https://www.football-data.org/

## Требования к сдаче ТЗ:

> Проект должен быть выложен на репозиторий GitHub

Проект выложен на GitHub: https://github.com/svlipatnikov/simbirsoft-test

> Код должен быть чистым (желательно использовать линты и pretier для автоматического контроля)

При создании проекта использовался **Prettier - Code formatter** для VS Code

> В индекс не должны попадать временные файлы, файлы настроек проекта и библиотек

В индексе **отсутствуют** временные файлы и библиотеки.

> Ключи к API не должны быть захардкожены.

На стартовой странице проекта есть возможность ввести собственный X-Auth-Token для работы с API

> Плюсом к сдаче приложения будет настроенный деплой на gh-pages.

Деплой на gh-pages настроен:
https://svlipatnikov.github.io/simbirsoft-test/#/

> При оценке будет учитываться наличие адаптивной версии.

Изменение позиционирования блоков приложения происходит при ширине экрана **менее 840px**
