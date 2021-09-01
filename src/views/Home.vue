<template>
  <BasicLayout>
    <div id="slider">
      <figure>
        <router-link to="/australian-open"><img src="../assets/Background4.jpg"/></router-link>
        <router-link to="/roland-garros"><img src="../assets/Background2.jpg"/></router-link>
        <router-link to="/wimbledon"><img src="../assets/Background1.jpg"/></router-link>
        <router-link to="/us-open"><img src="../assets/Background3.jpg"/></router-link>
        <router-link to="/australian-open"><img src="../assets/Background4.jpg"/></router-link>
      </figure>
    </div>

    <div id="advice">
      <figure>
          <h4>Free shipping from $80</h4>
      </figure>
    </div>

    <div id="wrhome">
      <figure>
        <router-link to="/wimbledon">
        <img src="../assets/WHome.jpg"/> 
        </router-link>
      </figure>
    </div> 

    <div id="wrhome">
      <figure>
        <router-link to="/wimbledon">
        <img src="../assets/RHome.jpg"/> 
        </router-link>
      </figure>
    </div> 

  </BasicLayout>
</template>

<script>
import BasicLayout from "../layouts/BasicLayout"

export default {
  name: 'Home',
  components: {
    BasicLayout,
  },
}
</script>

<style lang="scss" scoped>
#slider{
  overflow: hidden;

  figure{
    position: relative;
    width: 500%;
    margin: 0;
    left: 0;
    margin-left: 0;
    margin-right: 0;
    animation: 17s slider infinite;

    img{
      width: 20%;
      float: left;
    }
  }
}

@keyframes slider{
  0%{
    left:0;
  }
  20%{
    left: 0;
  }
  25%{
    left: -100%;
  }
  45%{
      left: -100%;
  }
  50%{
    left: -200%;
  }
  70%{
    left:-200%;
  }
  75%{
    left: -300%;
  }
  95%{
    left: -300%;
  }
  100%{
    left: -400%;
  }
}

#advice{
  overflow-x: hidden;
  figure{
    position: relative;
    width: 500%;
    margin: 0;
    left: 0;
    margin-left: 0;
    margin-right: 0;
    background-color:white;

    h4{
      width: 20%;
      text-align: center;
      font-family: "Besley";
      color: #6d04c6;
      padding: 10px;
    }
  }
}

#wrhome{
  overflow: hidden;

  figure{
    position: relative;
    width: 500%;
    margin: 0;
    left: 0;
    margin-left: 0;
    margin-right: 0;

    img{
      width: 20%;
      float: left; 
    }
  }
}
</style>