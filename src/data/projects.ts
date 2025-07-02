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
  code: string;
  deploy: string;
  date: string;
}

const projectsList: IProjectItem[] = [
  {
    id: 1,
    src: diploma,
    title: 'Система бронирования ж/д билетов',
    code: 'https://github.com/Professor-Severus-Snape/FE_diploma',
    deploy: 'https://professor-severus-snape.github.io/FE_diploma',
    date: '04.2025',
  },
  {
    id: 2,
    src: films,
    title: 'Поиск фильмов по каталогу',
    code: 'https://github.com/Professor-Severus-Snape/RA_toolkit',
    deploy: 'https://professor-severus-snape.github.io/RA_toolkit',
    date: '12.2024',
  },
  {
    id: 3,
    src: watches,
    title: 'Мировые часы',
    code: 'https://github.com/Professor-Severus-Snape/RA_lifecycle-watches',
    deploy: 'https://professor-severus-snape.github.io/RA_lifecycle-watches',
    date: '10.2024',
  },
  {
    id: 4,
    src: chat,
    title: 'Чат (WebSockets)',
    code: 'https://github.com/Professor-Severus-Snape/AHJ_webSockets-frontend',
    deploy: 'https://professor-severus-snape.github.io/AHJ_webSockets-frontend',
    date: '10.2024',
  },
  {
    id: 5,
    src: trello,
    title: 'Доска Trello (drag and drop)',
    code: 'https://github.com/Professor-Severus-Snape/AHJ_trello',
    deploy: 'https://professor-severus-snape.github.io/AHJ_trello',
    date: '10.2024',
  },
  {
    id: 6,
    src: validator,
    title: 'Валидатор карт',
    code: 'https://github.com/Professor-Severus-Snape/AHJ_card-validator',
    deploy: 'https://professor-severus-snape.github.io/AHJ_card-validator',
    date: '10.2024',
  },
  {
    id: 7,
    src: tracker,
    title: 'Трекер задач',
    code: 'https://github.com/Professor-Severus-Snape/AHJ_task-tracker',
    deploy: 'https://professor-severus-snape.github.io/AHJ_task-tracker',
    date: '07.2024',
  },
  {
    id: 8,
    src: goblins,
    title: 'Игра с гоблинами',
    code: 'https://github.com/Professor-Severus-Snape/AHJ_goblins-game',
    deploy: 'https://professor-severus-snape.github.io/AHJ_goblins-game',
    date: '07.2024',
  },
  {
    id: 9,
    src: tictactoe,
    title: 'Крестики-нолики',
    code: 'https://github.com/Professor-Severus-Snape/diplom_netology_tictactoe',
    deploy:
      'https://professor-severus-snape.github.io/diplom_netology_tictactoe',
    date: '11.2023',
  },
  {
    id: 10,
    src: landing,
    title: 'Лендинг',
    code: 'https://github.com/Professor-Severus-Snape/diplom_netology_html_2',
    deploy: 'https://professor-severus-snape.github.io/diplom_netology_html_2',
    date: '11.2023',
  },
  {
    id: 11,
    src: animatedLanding,
    title: 'Анимированный лендинг',
    code: 'https://github.com/Professor-Severus-Snape/layout_balloons',
    deploy: 'https://professor-severus-snape.github.io/layout_balloons',
    date: '08.2023',
  },
  {
    id: 12,
    src: guitar,
    title: 'Лендинг школы гитаристов',
    code: 'https://github.com/Professor-Severus-Snape/layout_guitar',
    deploy: 'https://professor-severus-snape.github.io/layout_guitar',
    date: '08.2023',
  },
];

export default projectsList;
