<template>
    <div>

 <b-carousel
      id="carousel-fade"
      style="text-shadow: 0px 0px 2px #000"
      fade
      indicators
      img-width="1024"
      img-height="480"
    >
      <b-carousel-slide
        img-src="https://scontent.fbkk14-1.fna.fbcdn.net/v/t1.15752-9/s2048x2048/116155080_296439891457897_1691392196203392050_n.jpg?_nc_cat=100&_nc_sid=b96e70&_nc_eui2=AeG7xisKlr15KFeP43WImX2TlQhsj8xqxfWVCGyPzGrF9Q_LWW5s_eFWNB04BxETI8pu5WATJ0jIDZPiqB673JPn&_nc_ohc=AkPFJ1KOOqkAX-LoR1S&_nc_ht=scontent.fbkk14-1.fna&tp=7&oh=81613947243daad0054c65b31af7abe9&oe=5F870EE6"
      ></b-carousel-slide>
      <b-carousel-slide
        caption
        img-src="https://scontent.fbkk10-1.fna.fbcdn.net/v/t1.15752-9/s2048x2048/116058418_632745694315024_1285163407543643633_n.jpg?_nc_cat=103&_nc_sid=b96e70&_nc_eui2=AeGeaB9Ksi-YYlboGExzIf-6j7mCn6Qma_iPuYKfpCZr-NfJ2125nqUedvKiYJ4yMwFBgMArf1NYDzb61f1-zryR&_nc_ohc=NIsSnwVELWEAX__6d0y&_nc_ht=scontent.fbkk10-1.fna&tp=7&oh=5dc06553751d285417eba6c5d5777fd6&oe=5F85E08F"
      ></b-carousel-slide>
    </b-carousel>

    </div>
</template>

<style lang="scss">
#Main {
  font-family: maven pro;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: auto;
}
// #app {
//   display: flex;
//   flex-direction: column;
//   height: 100%;
// }

#navbar {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>