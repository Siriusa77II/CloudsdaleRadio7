<template>
<div class="tamerlimagemarchaitpas">
           <!--Start New Navbar -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#"></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <b-nav-item to="/">Home</b-nav-item>
      </li>
     <b-nav-item-dropdown id="my-nav-dropdown" text="Hey Listen!" extra-toggle-classes="nav-link-custom" right>
      <b-dropdown-item to="#" @click="openPopup">popup</b-dropdown-item>
      <b-dropdown-item to="https://cdn.cloudsdalegroup.com/cr/CR_MP3@128.m3u" target="_blank90">Fichier</b-dropdown-item>
      <b-dropdown-item to="https://broadcaster.cloudsdaleradio.com:8000/radio.mp3" target="_blank91">Navigateur</b-dropdown-item>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item to="/request">Song Request</b-dropdown-item>
    </b-nav-item-dropdown>
      <li class="nav-item">
        <b-nav-item to="contact">contact</b-nav-item>
      </li>
           <b-nav-item-dropdown id="my-nav-dropdown" text="Affilier" extra-toggle-classes="nav-link-custom" right>
      <b-dropdown-item to="#">CloudsdaleGroup</b-dropdown-item>
      <b-dropdown-item to="">AnimeFM</b-dropdown-item>
      <b-dropdown-item to="">EquestriaFM</b-dropdown-item>
      <b-dropdown-item to="">Sirius Radio</b-dropdown-item>
    </b-nav-item-dropdown>
    </ul>
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a class="nav-link navArt" href="#CoverArt">NULL</a>
      </li>
      <li class="nav-item">
        <a class="nav-link navsong" href="#SongTitle">NULL</a>
      </li>
    </ul>

  </div>
</nav>
<a href="/" >
  <img alt="Cloudsdale Radio logo" src="@/assets/CRlogo.png" class="img-fluid mx-auto d-block">
</a>
</div>
</template>
<script>
export default {
    methods: {
    openPopup () {
      window.open(
        '/popup/',
        'crpopup',
        'menubar=no, scrollbars=no, width=720, height=200'
      )
    }
  }
}
</script>