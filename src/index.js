import './style.css';
import { gameMaker } from './game';

const players = gameMaker('pepe');
const title = document.querySelector("h1");
title.classList.add('hello');

console.table(players['humanPlayer'].myBoard.returnBoard())


