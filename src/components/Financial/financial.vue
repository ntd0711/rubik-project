<template>
  <div class="financial">
    <div class="container">
      <div class="financials">
        <div class="financial-content">
        <h2>Get the financial super app!</h2>
        <h3>Everything you need to find a home on mobile. Find a app on mobile!</h3>
        <img :src="cube1" alt="" class="cube1" />
        <img :src="cube1poly" alt="" class="poly1" />
        <img :src="cube2" alt=""  class="cube2"/>
        <img :src="polybot" alt=""  class="poly2"/>
        <img :src="financial" alt="" class="financial-img"  />

      </div>
      <div class="financial-button">
        <button>
          <div class="financial-button_icon">

          </div>
          <div class="financial-button_text">
            <span>Get in on</span>
            <p>Google Play</p>
          </div>
        </button>
         <button>
          <div  class="financial-button_icon">

          </div>
          <div class="financial-button_text">
            <span>Get in on</span>
            <p>Google Play</p>
          </div>
        </button>
      </div>
      </div>
      <div class="financial-overlay">
        <div class="financial-overlay_one"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { cube1, cube2, cube1poly, polybot, financial } from './export';
export default {
  data() {
    return {
      cube1, cube2, cube1poly, polybot, financial
    }
  },
};
</script>
<style>
.financial {
  position: relative;
  padding-top: 120px;
  background-color: #f4f4f4;
  padding-bottom: 102px;
}
.financials{
    overflow: hidden;
    z-index: 12;
    position: relative;
    width: 100%;
    margin-bottom: 10px;
    background: linear-gradient(155.51deg, #0f1772 5.31%, #0d2ebd 84.03%);
    padding: 80px 0;
    color: var(--white);
}

.financial-content h2 {
  max-width:50%;
  font-size: 40px;
  margin: 0;
}
.financial-content h3{
  max-width:50%;
  margin-top: 10px;
}
.cube1{
  z-index: 10;
  position: absolute;
  right: 11%;
  top: 16%;
  width: 212.77px;
  height: auto;
}
.poly1 {
  position: absolute;
  width: 23%;
  top: 0;
  right: 0;
}
.cube2{
  position: absolute;
  right: 4%;
  top: 41%;
  width: 117.94px;
  height: auto;
}
.poly2{
  position: absolute;
  width: 100%;
  bottom: -26%;
  right: 0;
}
.financial-img{
  margin: 0 auto 44px;
  display: block;
  width: 20%;
  height: auto;
  margin-top: 40px;
}
.financial-button{
  display: flex;
  justify-content: center;
}
.financial-button button{
  transition: .2s ease-in-out;
  z-index: 20;
  cursor: pointer;
  padding:10px 50px;
  z-index: 20;
  margin: 0 12px;
}
.financial-button_text {
  display: flex;
  flex-direction: column;
  align-items:start;
}
.financial-button_text p{
  font-size:22px;
  font-weight:500;
}
.financial-overlay::after{
    content: "";
    position: absolute;
    background: #010416;
    -webkit-clip-path: polygon(0 27%,100% 0,100% 100%,0 100%);
    clip-path: polygon(0 27%,100% 0,100% 100%,0 100%);
    z-index: 8;
    height: 62%;
    left: 0;
    right:0;
    bottom: -10px;

}
.financial-overlay_one:before{
    content: "";
    position: absolute;
    z-index: 10;
    background-color: #010416;
    border: 1px solid #fff;
    width: 70vw;
    max-width: 1100px;
    height: 50px;
    bottom: 5;
    left: 50%;
    transform: translate(-50%,-80%);
}
.financial-overlay_one::after{
  content: "";
  position: absolute;
  z-index: 9;
  border: 1px solid #fdfdfd;
  width: 60vw;
  max-width: 1000px;
  height: 50px;
  bottom: 5;
  left: 50%;
  transform: translate(-50%,-45%);

}
.financial-content{
  padding-left: 80px;
}
@media (max-width:1024px) {
  .financial-content h2{
    font-size:30px;
  }
  .financial-button{
    flex-direction: column;
    justify-content:center;
    align-items: center;
  }
  .financial-button button {
    margin: 12px 0;
    max-width:300px;
  }
}
@media (max-width:768px) {
  .financials{
    padding:  20px 0;
  }
  .financial-button button span{
    font-size:14px;
  }
  .financial-button button p{
    font-size:16px;
  }
  .financial-content{
    padding-left: 20px;
  }
  .financial-content h2{
    max-width: 70%;
    width: 100%;

  }
  .cube1{
    width: 115px;
  }
  .cube2{
    width: 70px;
    top: 29%;
  }
}
@media (max-width:576px){
  .financial-content h2{
    font-size:24px;
  }
  .financial-content h3{
    font-size:16px;
    font-weight:400;
  }
}
</style>
