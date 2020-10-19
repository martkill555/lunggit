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
        img-src="https://www.img.in.th/images/5ec88aea4d815376e15303068badf0d6.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        caption
        img-src="https://www.img.in.th/images/6d27b76ea5a6d82565b599caea73552c.jpg"
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