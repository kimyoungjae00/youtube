class Youtube {
  constructor(key) {
    this.key = key;
    
    this.requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
  }

  async mostPopular() {
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
      this.getRequestOptions);
    const result_1 = await response.json();
    return result_1.items;
  }

  async search(query) {
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`,
      this.getRequestOptions);
    const result_1 = await response.json();
    return result_1.items.map(item => ({ ...item, id: item.id.videoId })); //most popular 와 search결과의 items.id 형식이 다르기때문에 맞춰준다.
  }
}

export default Youtube;