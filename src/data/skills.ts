import css from '@/assets/svg/devicons/css.svg';
import docker from '@/assets/svg/devicons/docker.svg';
import eslint from '@/assets/svg/devicons/eslint.svg';
import git from '@/assets/svg/devicons/git.svg';
import html from '@/assets/svg/devicons/html.svg';
import javascript from '@/assets/svg/devicons/javascript.svg';
import jest from '@/assets/svg/devicons/jest.svg';
import nodeJS from '@/assets/svg/devicons/nodejs.svg';
import npm from '@/assets/svg/devicons/npm.svg';
import postman from '@/assets/svg/devicons/postman.svg';
import prettier from '@/assets/svg/devicons/prettier.svg';
import reactRouter from '@/assets/svg/devicons/react-router.svg';
import react from '@/assets/svg/devicons/react.svg';
import reduxToolkit from '@/assets/svg/devicons/redux-toolkit.svg';
import sass from '@/assets/svg/devicons/sass.svg';
import typescript from '@/assets/svg/devicons/typescript.svg';
import vite from '@/assets/svg/devicons/vite.svg';
import webpack from '@/assets/svg/devicons/webpack.svg';
import yarn from '@/assets/svg/devicons/yarn.svg';

export type TSkillsListRaw = [string, string][];

export interface ISkillItem {
  id: number;
  src: string;
  text: string;
}

const skillsListRaw: TSkillsListRaw = [
  [react, 'React'],
  [reactRouter, 'React Router'],
  [reduxToolkit, 'Redux Toolkit'],
  [javascript, 'JavaScript'],
  [typescript, 'TypeScript'],
  [webpack, 'Webpack'],
  [vite, 'Vite'],
  [npm, 'Npm'],
  [yarn, 'Yarn'],
  [html, 'HTML'],
  [css, 'CSS'],
  [sass, 'SASS'],
  [eslint, 'ESLint'],
  [prettier, 'Prettier'],
  [git, 'Git'],
  [jest, 'Jest'],
  [postman, 'Postman'],
  [docker, 'Docker'],
  [nodeJS, 'NodeJS'],
];

const skillsList: ISkillItem[] = skillsListRaw.map(([src, text], index) => ({
  id: index + 1,
  src,
  text,
}));

export default skillsList;
