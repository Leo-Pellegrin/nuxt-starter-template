export default defineNuxtRouteMiddleware((to, from) => {
    const config = useRuntimeConfig();

    // Vérifiez la configuration ou effectuez des actions spécifiques
    if (!config.public.RECAPTCHA_SITE_KEY) {
        console.warn('La clé siteKey reCAPTCHA est manquante dans la configuration.');
    }

    // Exemple de logique basée sur les routes
    if (to.name === 'protected-route') {
        console.log('Vous naviguez vers une route protégée.');
        // Ajoutez votre logique ici, comme une vérification d'utilisateur ou une redirection
    }
});
