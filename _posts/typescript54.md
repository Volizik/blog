---
title: "Что нового в TypeScript 5.4?"
excerpt: "TypeScript 5.4 стал более умным и получил несколько практичных API, таких как Object.groupBy и Map.groupBy. В этой статье мы быстро рассмотрим эти ключевые моменты."
coverImage: "/assets/blog/typescript54/main.webp"
date: "2024-05-02"
author:
  name: Zachary Lee
  picture: "/assets/blog/authors/author.png"
  link: "https://levelup.gitconnected.com/whats-new-in-typescript-5-4-4d27b7aba7f0"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
---

TypeScript 5.4 стал более умным и получил несколько практичных API, таких как Object.groupBy и Map.groupBy. В этой статье мы быстро рассмотрим эти ключевые моменты.

## Улучшение типов в замыканиях
TypeScript улучшил свою систему типов для сохранения типов в замыканиях. Это исправляет распространенную проблему, когда TypeScript терял информацию о типе переменной внутри замыкания после ее переназначения вне замыкания.

### Пример до TypeScript 5.4:

```typescript
function getUrls(url: string | URL, names: string[]) {
    if (typeof url === "string") {
        url = new URL(url);
    }

    return names.map(name => {
        // TypeScript забывал, что 'url' здесь определенно URL.
        url.searchParams.set("name", name); // Ошибка: 'searchParams' не существует в 'string | URL'
        return url.toString();
    });
}
```
### Улучшения в TypeScript 5.4:
В TypeScript 5.4 система типов сохраняет тип после последнего присваивания в замыкании, распознавая переменную как определенный тип на протяжении всего замыкания.

```typescript
function getUrls(url: string | URL, names: string[]) {
    if (typeof url === "string") {
        url = new URL(url); // Последнее присваивание делает 'url' объектом URL
    }

    return names.map(name => {
        url.searchParams.set("name", name); // Теперь нет ошибки, TypeScript знает, что 'url' это URL
        return url.toString();
    });
}
```
## Тип NoInfer
TypeScript 5.4 представил тип NoInfer, который дает разработчикам больший контроль над выводом типов, особенно в обобщенных функциях, где автоматический вывод типов может привести к ошибкам.

### Проблема с выводом типов:
Когда TypeScript самостоятельно выводит типы для аргументов обобщенной функции, это иногда приводит к выбору более широких типов, чем нужно.

```typescript
function createStreetLight<C extends string>(colors: C[], defaultColor?: C) {
    // Реализация функции
}

createStreetLight(["red", "yellow", "green"], "blue"); // Неправильно принимает "blue"
```
### Использование NoInfer для контроля вывода типов:
Обертывание параметра типа в NoInfer указывает TypeScript не выводить этот тип из контекста, что помогает обеспечить более строгие проверки.

```typescript
function createStreetLight<C extends string>(colors: C[], defaultColor?: NoInfer<C>) {
    // Реализация функции
}

createStreetLight(["red", "yellow", "green"], "blue"); // Ошибка: '"blue"' нельзя присвоить типу '"red" | "yellow" | "green"'
```
## Object.groupBy и Map.groupBy в JavaScript
TypeScript 5.4 включает объявления типов для методов Object.groupBy и Map.groupBy в JavaScript, что расширяет стандартную библиотеку удобными утилитами группировки с полной поддержкой типов.

### Пример использования Object.groupBy:
Теперь группировка массива по определенному критерию стала простой и безопасной с точки зрения типов.

```typescript
const items = [1, 2, 3, 4, 5, 6];

const grouped = Object.groupBy(items, x => x % 2 === 0 ? 'even' : 'odd');
// Результат: { even: [2, 4, 6], odd: [1, 3, 5] }
```
### Пример использования Map.groupBy:
Map.groupBy позволяет использовать любой тип ключа для группировки, не ограничиваясь только строками.

```typescript
const items = [1, 2, 3, 4, 5, 6];

const groupedMap = Map.groupBy(items, x => x % 2 === 0 ? 'even' : 'odd');
// Результат: Map { 'even' => [2, 4, 6], 'odd' => [1, 3, 5] }
```
## Улучшения в обработке модулей
TypeScript 5.4 также улучшает поддержку конфигураций обработки модулей, что важно для совместимости с современными средствами сборки JavaScript.

### Улучшенная moduleResolution:
Новая опция --moduleResolution моделирует способ определения бандлерами файлов, на которые указывают пути импорта, что поддерживает сценарии, где традиционное разрешение модулей может оказаться неудачным.

```json
// Пример из tsconfig.json
{
    "compilerOptions": {
        "module": "preserve",
        "moduleResolution": "bundler"
    }
}
```
### Сохранение синтаксиса импорта:
Это обновление гарантирует точный синтаксис импорта в сгенерированном JavaScript, что улучшает совместимость с бандлерами и окружениями, использующими определенный синтаксис модулей.

```typescript
import myModule = require("module/path");
// Сгенерированный код: var myModule = require("module/path");
```
### Атрибуты и утверждения импорта
Утверждения импорта (import assertions) улучшают безопасность модулей, гарантируя соответствие ожидаемым форматам, таким как JSON-модули, которые должны быть явно указаны.

```typescript
// В TypeScript с правильными атрибутами импорта
interface ImportAttributes {
    type: "json";
}

import * as config from "./config.json" assert { type: "json" };
// TypeScript проверяет, что утверждение { type: "json" } соответствует интерфейсу ImportAttributes
```

### Улучшения для разработчика
TypeScript 5.4 не только расширяет функциональность, но и упрощает работу разрабочику с помощью быстрых исправлений, улучшенного автоимпорта и интуитивного обращения с распространенными паттернами кода.
