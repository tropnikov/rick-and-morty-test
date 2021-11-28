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

  getCharacterInfo(link) {
    return fetch(link, {
      method: 'GET',
    }).then((response) => {
      return response.ok
        ? response.json()
        : Promise.reject(`Ошибка: ${response.status}`);
    });
  }
}

export const api = new Api('https://rickandmortyapi.com/api');
