// next-intl.config.ts
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => {
  // Si por algún motivo no se detecta el idioma, usamos "es" por defecto
  const activeLocale = locale ?? "es";

  return {
    locale: activeLocale,
    messages: (await import(`./messages/${activeLocale}.json`)).default,
  };
});
