import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { faFaucetDrip } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faHandcuffs } from '@fortawesome/free-solid-svg-icons';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { faPersonMilitaryPointing } from '@fortawesome/free-solid-svg-icons';

library.add(faUserSecret, faQuestion, faFaucetDrip, faArrowLeft, faHandcuffs, faCar, faPersonMilitaryPointing);
createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
