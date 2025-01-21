export default defineNuxtPlugin({
  name: 'recaptcha-plugin',
  enforce: 'pre', // or 'post'
  async setup(nuxtApp) {
    // Importation dynamique de vue-recaptcha-v3
    const { VueReCaptcha } = await import('vue-recaptcha-v3');

    // Récupération de la configuration runtime
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

    // Ajout du plugin à l'application Vue
    nuxtApp.vueApp.use(VueReCaptcha, options);
  },
  hooks: {
    'app:created'() {
      const nuxtApp = useNuxtApp();
      // Ajout de logique supplémentaire au moment où l'app est créée, si nécessaire
    }
  },
  env: {
    // Configurez cette valeur à `false` si vous ne souhaitez pas que le plugin s'exécute pour les composants islands ou côté serveur uniquement
    islands: true
  }
});