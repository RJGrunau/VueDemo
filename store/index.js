export const state = () => ({
  flickrPhotos: [],
  githubProjects: []
});

export const mutations = {
  updateFlickrPhotos: (state, payload) => {
    state.flickrPhotos = payload;
  },
  updateGithubProjects: (state, payload) => {
    state.githubProjects = payload;
  }
};

export const actions = {
  async getFlickrPhotos({ state, commit }) {
    if (state.flickrPhotos.length) return;

    try {
      let flickrPhotos = await fetch(
        "https://www.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=07c31cdcb84e847d37ed7ed414b66828&user_id=68066544%40N06&extras=url_m&format=json&nojsoncallback=1"
      ).then(res => res.json());

      let photos = flickrPhotos.photos.photo;

      commit("updateFlickrPhotos", photos);
    } catch (error) {
      console.log(error);
    }
  },

  async getGithubProjects({ state, commit }) {
    if (state.githubProjects.length) return;

    try {
      let githubProjects = await fetch(
        `https://api.github.com/users/rjgrunau/repos?page=1&per_page=10`
      ).then(response => response.json());

      githubProjects = githubProjects
        .filter(project => project.fork === false)
        .map(({ id, name, description, homepage, html_url }) => ({
          id,
          name,
          description,
          homepage,
          html_url
        }));

      console.log(githubProjects);
      commit("updateGithubProjects", githubProjects);
    } catch (error) {
      console.log(error);
    }
  }
};
