<template>
  <div class="footer" >
    <div class="container">
      <div class="footer-content">
        <div class="footer-heading">
        <div class="fotter-heading_left">
          <div class="footer-logo">
            <h2>Rubik</h2>
          </div>
          <div class="footer-subtitle">
            * The Portal to Web3
          </div>
        </div>
        <div class="footer-heading_right">
          <ul class="footer-list">
            <li class="footer-item_title">Resources</li>
            <li class="footer-item active">Documents</li>
            <li class="footer-item">Faqs</li>
            <li class="footer-item">Blog</li>
          </ul>
          <ul class="footer-list">
            <li class="footer-item_title">Products</li>
           <li class="footer-item">Documents</li>
            <li class="footer-item">Faqs</li>
            <li class="footer-item">Blog</li>
          </ul>
          <ul class="footer-list">
            <li class="footer-item_title">Developers</li>
            <li class="footer-item">Documents</li>
            <li class="footer-item">Faqs</li>
            <li class="footer-item">Blog</li>
          </ul>
        </div>
      </div>
      <div class="footer-social">
        <h3 class="footer-social_title">
          Follow community us
        </h3>
        <ul class="footer-social_list">
          <li class="footer-social_item">
            <img :src="icon_telegram" alt="">
          </li>
          <li class="footer-social_item">
            <img :src="icon_telegram" alt="">
          </li>
          <li class="footer-social_item">
            <img :src="icon_telegram" alt="">
          </li>
        </ul>
      </div>
      </div>
      <div class="footer-copyright">
        <p>© Rubik. All rights reserved.</p>
      </div>
    </div>
  </div>
</template>

<script>
import {
  icon_telegram,
}
from './export'
export default {
  data() {
    return {
      icon_telegram,
    };
  },
};

</script>

<style>
.footer {
  background-size: 100% 100%;
  background-position: 50%;
  background-repeat: no-repeat;
  background-color: var(--black);
  color: var(--white);
}
.footer-content{
  border-bottom: 1px solid #fff;
  padding-bottom:30px;
}
.footer-heading{
  padding-top: 200px;
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content:space-between;
}
.footer-heading_right{
  display: flex;
  align-items: center;
}
.footer-list{
  margin-right: 60px;
  list-style: none;
}
.footer-list:last-child{
  margin-right: 0;
}
.footer-item{
  margin-bottom: 12px;
  cursor: pointer;
  font-size:18px;
}

.footer-item:hover{
  color: var(--yellow);
}
.footer-item_title{
  font-size:26px;
  font-weight: 600;
  margin-bottom: 16px;
}
.footer-logo h2{
  font-size:40px;
}
.footer-subtitle{
  margin-top: 24px;
  font-size: 24px
}
.footer-social_title{
  font-size:22px;
}
.footer-social_list{
  display: flex;
  margin-top: 26px;
}
.footer-social_item{
  list-style: none;
  margin-right: 29px;
}
.footer-copyright{
  padding: 30px 0;
}
.footer-copyright p {
  text-align: center;
}
@media screen and (max-width: 1024px){
  .footer-heading{
    flex-direction:column;
    align-items:flex-start;
  }
  .fotter-heading_left{
    margin-bottom: 30px;
  }
  .footer-social{
    display: flex;
    align-items:flex-start;
    justify-content:center;
    flex-direction: column;
    margin-top: 30px;
  }

}
@media screen and (max-width: 768px){
  .footer-item_title{
    font-size: 16px;
  }
  .footer-item{
    font-size: 14px;
  }
  .footer-list{
    margin-right:30px;
  }
  .footer-subtitle{
    font-size:16px;
  }
}
</style>