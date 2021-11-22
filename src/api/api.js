class Api {
  #baseURL;

  constructor(baseURL) {
    this.#baseURL = baseURL;
  }

  async getAllEpisodes() {
    const data = [];
    let url = `${this.#baseURL}/episode`;
    do {
      const res = await fetch(url, {
        method: 'GET',
      }).then((res) => {
        return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
      });
      url = res.info.next;
      data.push(...res.results);
    } while (url);

    return data;
  }
}
export const api = new Api('https://rickandmortyapi.com/api');
