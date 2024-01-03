import loadScript from './loadScript';

class YouTubeAPI {
  constructor() {
    this.name = '$youtube';
    this.list = [];
    this.loaded = false;
  }

  init() {
    return new Promise((resolve, reject) => {
      loadScript('https://www.youtube.com/iframe_api')
        .then(() => {
          if (this.loaded) return;
          window.onYouTubeIframeAPIReady = () => {
            this.loaded = true;
            resolve();
          };
        }).then(resolve).catch(reject);
    });
  }
}

export default new YouTubeAPI();
