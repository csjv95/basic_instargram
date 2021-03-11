class GetUserName {
  constructor(key) {
    this.key = key;
  }
  
  userName() {
    return fetch(
      `https://graph.instagram.com/me?fields=id,username&access_token=${this.key}`
    )
      .then((response) => response.json())
      .then((result) => result.username);
  }

  userMedia() {
    return fetch(
      `https://graph.instagram.com/me/media?fields=id,media_url,thumbnail_url,timestamp&access_token=${this.key}`
    )
    .then(response => response.json())
    .then(result => result.data)
  }
}

export default GetUserName;
