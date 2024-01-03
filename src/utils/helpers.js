export function setPageTitle(title) {
  const pageName = title.toUpperCase();
  document.title = `${pageName} — ${import.meta.env.VITE_SITE_NAME}`;
}
