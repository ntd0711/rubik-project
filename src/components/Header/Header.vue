<template>
  <section class="header" :style="`background-image: url(${hero_bg})`">
    <ul :class="{ show: isShow }" class="menu">
      <span @click="isShow = false" class="menu__close">
        <img :src="menu_close" alt="" />
      </span>
      <div class="container">
        <ul class="menu__list">
          <li class="menu__item">
            <a @click="isShow = false" href="#features" class="menu__link">Features</a>
          </li>
          <li class="menu__item">
            <a @click="isShow = false" href="#protocol" class="menu__link">Protocol</a>
          </li>
          <li class="menu__item">
            <a @click="isShow = false" href="#ourteam" class="menu__link">Our Team</a>
          </li>
          <li class="menu__item">
            <a @click="isShow = false" href="#" class="menu__link">Docs</a>
          </li>
          <li class="menu__item">
            <a @click="isShow = false" href="#" class="menu__link">FAQ</a>
          </li>
          <li class="menu__item">
            <a href="#" class="menu__btn-download">Launch App</a>
          </li>
        </ul>
      </div>
    </ul>
    <div class="navbar__wrapper">
      <div class="container">
        <div class="navigation">
          <a href="#"><img class="logo" :src="logo" alt="" /></a>
          <ul class="navigation__menu">
            <li class="navigation__menu-item">
              <a href="#features" class="navigation__menu-link">Features</a>
            </li>
            <li class="navigation__menu-item">
              <a href="#protocol" class="navigation__menu-link">Protocol</a>
            </li>
            <li class="navigation__menu-item">
              <a href="#ourteam" class="navigation__menu-link">Our Team</a>
            </li>
            <li class="navigation__menu-item">
              <a href="#" class="navigation__menu-link">Docs</a>
            </li>
            <li class="navigation__menu-item">
              <a href="#" class="navigation__menu-link">FAQ</a>
            </li>
          </ul>
          <a href="#" class="navbar__btn">Launch App</a>
          <span @click="isShow = !isShow" class="menu__open">
            <img :src="menu_icon" alt="" />
          </span>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="hero">
        <div class="hero__left">
          <h1 class="hero__heading">The Portal to Web3</h1>
          <p class="hero__description">All-in-One wallet improve everything in Web3 experience</p>
          <div class="hero__download">
            <a href="" class="hero__btn">
              <img class="hero__btn-icon" :src="ch_play" alt="" />
              <div class="hero__btn-info">
                <p>Get it on</p>
                <p>Google Play</p>
              </div>
            </a>
            <a href="" class="hero__btn">
              <img class="hero__btn-icon" :src="app_store" alt="" />
              <div class="hero__btn-info">
                <p>Get it on</p>
                <p>App Store</p>
              </div>
            </a>
          </div>
        </div>
        <div class="hero__right">
          <img :src="phone" alt="" />
        </div>
      </div>
    </div>
    <div class="container">
      <div class="web3__section">
        <p class="web3__heading">What the Web3 ?</p>
        <p class="web3__description">
          Web3 is the idea of incentivized decentralization of data, which rewards contributors and
          protects their privacy and data on the internet.
        </p>
      </div>
    </div>
    <div class="container">
      <div class="brand__section">
        <div class="brand__item">
          <img :src="ethereum_logo" class="brand__img" />
        </div>
        <div class="brand__item">
          <img :src="binance_logo" class="brand__img" />
        </div>
        <div class="brand__item">
          <img :src="crypto_logo_3" class="brand__img" />
        </div>
        <div class="brand__item">
          <img :src="crypto_logo_4" class="brand__img" />
        </div>
        <div class="brand__item">
          <img :src="crypto_logo_5" class="brand__img" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {
  logo,
  hero_bg,
  menu_close,
  phone,
  app_store,
  ch_play,
  menu_icon,
  ethereum_logo,
  binance_logo,
  crypto_logo_3,
  crypto_logo_4,
  crypto_logo_5,
} from './export';

export default {
  data() {
    return {
      isShow: false,
      logo,
      menu_close,
      menu_icon,
      hero_bg,
      app_store,
      ch_play,
      phone,
      ethereum_logo,
      binance_logo,
      crypto_logo_3,
      crypto_logo_4,
      crypto_logo_5,
    };
  },
};
</script>

<style>
@import './Header.css';
</style>
