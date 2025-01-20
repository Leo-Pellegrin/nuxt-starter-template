import { VueReCaptcha } from 'vue-recaptcha-v3';
import type { Plugin } from 'vue';

const recaptchaPlugin: Plugin = {
  install(app) {
    const config = useRuntimeConfig();

    const options = {
      siteKey: config.public.RECAPTCHA_SITE_KEY as string, // Assure-toi que la clé est de type string
      loaderOptions: {
        autoHideBadge: true,
        useRecaptchaNet: true,
        renderParameters: {
          hl: 'id', // Langue pour reCAPTCHA
        },
      },
    };

    app.use(VueReCaptcha, options);
  },
};

export default recaptchaPlugin;