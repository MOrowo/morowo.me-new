export const scrollToAbout = () => {
  document
    .getElementById('about')
    .scrollIntoView({ behavior: 'smooth', block: 'center' });
};