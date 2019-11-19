export const fetchQuote = () => {
  return fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
    .then(res => res.json())
    .then(([{ character, image, quote }]) => {
      return { name: character, img: image, text: quote };
    });
};
