'use client'
import React from 'react';
import { ReactTyped } from "react-typed";

interface Quote {
    author: string;
    text: string;
}

const quotes: Quote[] = [
    {
        author: 'Стив Джобс',
        text: 'Люди, которые достаточно сумасшедшие, чтобы думать, что они могут изменить мир — это те, кто действительно на это способен.'
    },
    {
        author: 'Лао-Цзы',
        text: 'Когда я освобождаюсь от того, кто я есть, я становлюсь тем, кем я могу быть.'
    },
    {
        author: 'Абрахам Маслоу',
        text: 'В любой момент у нас есть два варианта: сделать шаг вперёд к росту или вернуться в безопасное место.'
    },
    {
        author: 'Джон Кеннеди',
        text: 'Изменения – закон жизни. И те, кто смотрит только в прошлое или только на настоящее, бесспорно, пропустят будущее.'
    },
    {
        author: 'Сократ',
        text: 'Секрет перемен состоит в том, чтобы сосредоточиться на создании нового, а не на борьбе со старым.'
    },
    {
        author: 'Чарльз Дарвин',
        text: 'Выживает не самый сильный из видов и не самый умный, а тот, кто лучше других реагирует на изменения.'
    },
    {
        author: 'Юкио Мисима',
        text: 'Стоит только иначе взглянуть на вещи, и жизнь потечёт в ином направлении.'
    },
    {
        author: 'Джордж Бернард Шоу',
        text: 'Прогресс невозможен без изменений, и те, кто не может изменить своё мнение, не могут изменить ничего вообще.'
    },
    {
        author: 'Стивен Кинг',
        text: 'Человек, который почувствовал ветер перемен, должен строить не щит от ветра, а ветряную мельницу.'
    },
    {
        author: 'Фридрих Ницше',
        text: 'Если вы решили действовать, закройте двери для сомнений.'
    },
];

const reactTypedQuotes = quotes.map(({text, author}) => {
    return `<div class="py-10 flex flex-col text-left">
<h3 class="text-xl font-bold tracking-tighter leading-tight text-left mb-10">
    ${text}
</h3>
<p class="text-md m-0">
    ${author}
</p>
</div>`
})

export const QuoteWidget = () => {
    return (
        <div className="py-28 flex flex-col lg:flex-row min-h-[400px]">
            <ReactTyped
                fadeOut
                showCursor={false}
                strings={reactTypedQuotes}
                loop
                typeSpeed={100}
                backSpeed={30}
            />
        </div>
    );
};
