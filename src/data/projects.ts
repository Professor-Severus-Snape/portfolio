import animatedLanding from '@/assets/images/animated-landing.png';
import chat from '@/assets/images/chat.png';
import diploma from '@/assets/images/diploma.png';
import films from '@/assets/images/films.png';
import goblins from '@/assets/images/goblins.png';
import guitar from '@/assets/images/guitar.png';
import landing from '@/assets/images/landing.png';
import tictactoe from '@/assets/images/tictactoe.png';
import tracker from '@/assets/images/tracker.png';
import trello from '@/assets/images/trello.png';
import validator from '@/assets/images/validator.png';
import watches from '@/assets/images/watches.png';

export interface IProjectItem {
  id: number;
  src: string;
  title: string;
  stack: string;
  deploy: string;
}

const projectsList: IProjectItem[] = [
  {
    id: 1,
    src: diploma,
    title: 'Система бронирования ж/д билетов',
    stack: 'React, React Router, Redux Toolkit, TypeScript, date-fns, Vite',
    deploy: 'https://professor-severus-snape.github.io/FE_diploma',
  },
  {
    id: 2,
    src: films,
    title: 'Поиск фильмов по каталогу',
    stack: 'React, React Router, Redux Toolkit, TypeScript, Vite',
    deploy: 'https://professor-severus-snape.github.io/movie-search',
  },
  {
    id: 3,
    src: watches,
    title: 'Мировые часы',
    stack: 'React, TypeScript, useState, useEffect, setInterval, Vite',
    deploy: 'https://professor-severus-snape.github.io/world-clock',
  },
  {
    id: 4,
    src: chat,
    title: 'Чат (real-time)',
    stack: 'JavaScript (ES6+, ООП), WebSocket, Express.js, REST API, Webpack',
    deploy: 'https://professor-severus-snape.github.io/chat',
  },
  {
    id: 5,
    src: trello,
    title: 'Доска Trello',
    stack: 'JavaScript (ES6+, ООП), localStorage, drag and drop, Webpack',
    deploy: 'https://professor-severus-snape.github.io/trello',
  },
  {
    id: 6,
    src: validator,
    title: 'Валидатор карт',
    stack: 'JavaScript (ES6+, ООП), Webpack, Jest, Puppeteer',
    deploy: 'https://professor-severus-snape.github.io/card-validator',
  },
  {
    id: 7,
    src: tracker,
    title: 'Трекер задач',
    stack: 'JavaScript (ES6+, ООП), DOM API, events, Webpack',
    deploy: 'https://professor-severus-snape.github.io/task-tracker',
  },
  {
    id: 8,
    src: goblins,
    title: 'Игра с гоблинами',
    stack: 'JavaScript (ES6+, ООП), DOM API, events, setInterval, Webpack',
    deploy: 'https://professor-severus-snape.github.io/goblin',
  },
  {
    id: 9,
    src: tictactoe,
    title: 'Крестики-нолики',
    stack: 'HTML, CSS, JavaScript (ES6+, ФП)',
    deploy: 'https://professor-severus-snape.github.io/tictactoe',
  },
  {
    id: 10,
    src: landing,
    title: 'Лендинг',
    stack: 'HTML, CSS, BEM, Flexbox, pixel perfect, responsive design',
    deploy: 'https://professor-severus-snape.github.io/layout_noemi',
  },
  {
    id: 11,
    src: animatedLanding,
    title: 'Анимированный лендинг',
    stack: 'HTML, CSS, BEM, CSS animations, responsive design',
    deploy: 'https://professor-severus-snape.github.io/layout_balloons',
  },
  {
    id: 12,
    src: guitar,
    title: 'Лендинг школы гитаристов',
    stack: 'HTML, BEM, SASS, Flexbox, responsive design',
    deploy: 'https://professor-severus-snape.github.io/layout_guitar',
  },
];

export default projectsList;
