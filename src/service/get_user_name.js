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
}

export default GetUserName;
