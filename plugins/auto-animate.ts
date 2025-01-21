export default defineNuxtPlugin({
  name: 'auto-animate',
  enforce: 'pre', // or 'post'
  async setup(nuxtApp) {
    // Importation dynamique du plugin auto-animate
    const { autoAnimatePlugin } = await import('@formkit/auto-animate/vue');

    // Ajout du plugin à l'application Vue
    nuxtApp.vueApp.use(autoAnimatePlugin);
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