// composables/useGoogleRecaptcha.ts

import { useReCaptcha } from 'vue-recaptcha-v3'

/**
 * The exported executeRecaptcha function allows
 * you to execute reCAPTCHA actions
 * and retrieve the reCAPTCHA token along with the header options
 * to be used in subsequent requests.
 */
export default function useGoogleRecaptcha() {
  const recaptchaInstance = useReCaptcha()

  /**
   * Executes the reCAPTCHA action and returns the token and header options.
   * 
   * @param action - The action to be executed by reCAPTCHA (e.g., 'login', 'submit_form').
   * @returns An object containing the token and the header options with the token.
   */
  const executeRecaptcha = async (action: string): Promise<{
    token: string
    headerOptions: { headers: { 'google-recaptcha-token': string } }
  }> => {
    // Wait for the reCAPTCHA instance to load
    await recaptchaInstance?.recaptchaLoaded()

    // Execute reCAPTCHA and retrieve the token
    const token = await recaptchaInstance?.executeRecaptcha(action)

    if (!token) {
      throw new Error('Failed to retrieve reCAPTCHA token.')
    }

    // Prepare the header options with the token
    const headerOptions = {
      headers: {
        'google-recaptcha-token': token
      }
    }

    return { token, headerOptions }
  }

  return { executeRecaptcha }
}