// src/plugins/auto-animate.ts
import { autoAnimatePlugin } from '@formkit/auto-animate/vue';
import type { Plugin } from 'vue';

const autoAnimate: Plugin = {
    install(app) {
        app.use(autoAnimatePlugin);
    },
};

export default autoAnimate;