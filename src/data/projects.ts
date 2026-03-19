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
  deploy: string;
}

const projectsList: IProjectItem[] = [
  {
    id: 1,
    src: diploma,
    title: 'Система бронирования ж/д билетов',
    deploy: 'https://professor-severus-snape.github.io/FE_diploma',
  },
  {
    id: 2,
    src: films,
    title: 'Поиск фильмов по каталогу',
    deploy: 'https://professor-severus-snape.github.io/RA_toolkit',
  },
  {
    id: 3,
    src: watches,
    title: 'Мировые часы',
    deploy: 'https://professor-severus-snape.github.io/RA_lifecycle-watches',
  },
  {
    id: 4,
    src: chat,
    title: 'Чат (WebSockets)',
    deploy: 'https://professor-severus-snape.github.io/chat',
  },
  {
    id: 5,
    src: trello,
    title: 'Доска Trello (drag and drop)',
    deploy: 'https://professor-severus-snape.github.io/trello',
  },
  {
    id: 6,
    src: validator,
    title: 'Валидатор карт',
    deploy: 'https://professor-severus-snape.github.io/card-validator',
  },
  {
    id: 7,
    src: tracker,
    title: 'Трекер задач',
    deploy: 'https://professor-severus-snape.github.io/task-tracker',
  },
  {
    id: 8,
    src: goblins,
    title: 'Игра с гоблинами',
    deploy: 'https://professor-severus-snape.github.io/goblin',
  },
  {
    id: 9,
    src: tictactoe,
    title: 'Крестики-нолики',
    deploy: 'https://professor-severus-snape.github.io/tictactoe',
  },
  {
    id: 10,
    src: landing,
    title: 'Лендинг',
    deploy: 'https://professor-severus-snape.github.io/layout_noemi',
  },
  {
    id: 11,
    src: animatedLanding,
    title: 'Анимированный лендинг',
    deploy: 'https://professor-severus-snape.github.io/layout_balloons',
  },
  {
    id: 12,
    src: guitar,
    title: 'Лендинг школы гитаристов',
    deploy: 'https://professor-severus-snape.github.io/layout_guitar',
  },
];

export default projectsList;
