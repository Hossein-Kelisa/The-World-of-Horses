const WIKI_BASE = 'https://en.wikipedia.org/api/rest_v1/page/summary/';

export async function fetchBreedInfo(name) {
  const url = WIKI_BASE + encodeURIComponent(name);
  const res = await fetch(url);
  const data = await res.json();

  return {
    id: name,
    name: data.title,
    description: data.extract,
    image: data.thumbnail?.source || '',
  };
}
