export default defineNuxtRouteMiddleware((to, from) => {
    const config = useRuntimeConfig();
    
    if (!config.public.RECAPTCHA_SITE_KEY) {
        console.warn('La clé siteKey reCAPTCHA est manquante dans la configuration.');
    }

    if (to.name === 'protected-route') {
        console.log('Vous naviguez vers une route protégée.');
    }
});
