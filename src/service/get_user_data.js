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

  userVideoId() {
    return fetch(
      `https://graph.instagram.com/me?fields=media&access_token=${this.key}`
    )
    .then(response => response.json())
    .then(result => result.media.data)
    .then(result => result.map(item => item.id))
  }

  videoDetail(videoId) {
    return fetch(
      `https://graph.instagram.com/${videoId}?fields=id,media_type,media_url,username,timestamp&access_token=IGQVJYS0EtZAVoyYURLYkhzR3VBRG9fd2gwSTlPV2FCTkM2ZAGhtTDJIajdGTmhIMWFFaWlwa25nMlpLUHZAtRWJrRV91S204UkFjc0ZACRmRhTW1NdXhhYUgzZAkVoS3FCQUZANTEREWTZAn&`
    )
    .then(response => response.json())
    .then(result => result)
  }
}

export default GetUserName;
