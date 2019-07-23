export const state = () => ({
  flickerPhotoStream: []
});

export const mutations = {
  updateFlickerPhotoStream: (state, payload) => {
    state.flickerPhotoStream = payload;
  }
};

export const actions = {
  async getFlickerPhotoStream({ state, commit }) {
    if (state.flickerPhotoStream.length) return;

    try {
      let flickerPhotoStream = await fetch(
        "https://www.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=07c31cdcb84e847d37ed7ed414b66828&user_id=68066544%40N06&extras=url_m&format=json&nojsoncallback=1"
      ).then(res => res.json());

      commit("updateFlickerPhotoStream", flickerPhotoStream);
      console.log(flickerPhotoStream);
    } catch (error) {
      console.log(error);
    }
  }
};
