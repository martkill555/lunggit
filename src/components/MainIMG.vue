<template>
    <div>

<b-carousel
      id="carousel-1"
      :interval="4000"
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        height="200"
        img-src="https://scontent.fbkk10-1.fna.fbcdn.net/v/t1.15752-9/s2048x2048/118281345_2810978145854185_385926875551241355_n.png?_nc_cat=103&_nc_sid=b96e70&_nc_eui2=AeElhrmpkQ8hWMexuBikuZ54xxmF27AH4k7HGYXbsAfiTg8svtZEQYm9agWEwYAe3PtxKa1O2c7znv8KNC5F08zO&_nc_ohc=BJhtDuJXER8AX8CEjR5&_nc_oc=AQlar05vzbLpun6xPLZIOkI_-M8ATtAqcuiKb63xYFhE8QLprbb66AhFsAz81BcQDHY&_nc_ht=scontent.fbkk10-1.fna&oh=ef6fc02b5b3f752dee1271643f23203e&oe=5F6762C9"
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