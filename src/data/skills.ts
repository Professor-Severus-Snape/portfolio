import appveyor from '@/assets/svg/devicons/appveyor.svg';
import babel from '@/assets/svg/devicons/babel.svg';
import css from '@/assets/svg/devicons/css.svg';
import eslint from '@/assets/svg/devicons/eslint.svg';
import figma from '@/assets/svg/devicons/figma.svg';
import git from '@/assets/svg/devicons/git.svg';
import github from '@/assets/svg/devicons/github.svg';
import gitlab from '@/assets/svg/devicons/gitlab.svg';
import html from '@/assets/svg/devicons/html.svg';
import javascript from '@/assets/svg/devicons/javascript.svg';
import jest from '@/assets/svg/devicons/jest.svg';
import npm from '@/assets/svg/devicons/npm.svg';
import reactRouter from '@/assets/svg/devicons/react-router.svg';
import react from '@/assets/svg/devicons/react.svg';
import reduxToolkit from '@/assets/svg/devicons/redux-toolkit.svg';
import render from '@/assets/svg/devicons/render.svg';
import sass from '@/assets/svg/devicons/sass.svg';
import typescript from '@/assets/svg/devicons/typescript.svg';
import vite from '@/assets/svg/devicons/vite.svg';
import vscode from '@/assets/svg/devicons/vscode.svg';
import webpack from '@/assets/svg/devicons/webpack.svg';

export interface ISkillItem {
  id: number;
  src: string;
  text: string;
}

const skillsList: ISkillItem[] = [
  { id: 1, src: html, text: 'HTML' },
  { id: 2, src: css, text: 'CSS' },
  { id: 3, src: sass, text: 'SASS' },
  { id: 4, src: figma, text: 'Figma' },
  { id: 5, src: vscode, text: 'VSCode' },
  { id: 6, src: javascript, text: 'JavaScript' },
  { id: 7, src: typescript, text: 'TypeScript' },
  { id: 8, src: git, text: 'Git' },
  { id: 9, src: github, text: 'GitHub' },
  { id: 10, src: gitlab, text: 'GitLab' },
  { id: 11, src: npm, text: 'Npm' },
  { id: 12, src: babel, text: 'Babel' },
  { id: 13, src: eslint, text: 'ESLint' },
  { id: 14, src: jest, text: 'Jest' },
  { id: 15, src: webpack, text: 'Webpack' },
  { id: 16, src: vite, text: 'Vite' },
  { id: 17, src: react, text: 'React' },
  { id: 18, src: reactRouter, text: 'React Router' },
  { id: 19, src: reduxToolkit, text: 'Redux Toolkit' },
  { id: 20, src: appveyor, text: 'AppVeyor' },
  { id: 21, src: render, text: 'Render' },
];

export default skillsList;
