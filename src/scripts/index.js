import * as OfflinePluginRuntime from 'offline-plugin/runtime';

import '../index.html';
import '../styles/index.scss';
import initThree from './initThree';

console.log(
  `%c Yann's ThreeJS boilerplate`,
  `background: linear-gradient( -70deg, rgba(9,9,121,0.6) 11.2%, rgba(144,6,161,0.6) 53.7%, rgba(0,212,255,0.6) 100.2% );`
);

OfflinePluginRuntime.install();

const threeEl = document.querySelector('.three-js');
if (threeEl) {
  initThree(threeEl);
}
