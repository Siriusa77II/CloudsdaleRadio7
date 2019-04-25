<template>
  <div class="home">
        <div class="container">
      <div class="row">
        <div class="col-sm-offset-1 col-sm-8">
          <div class="welcome">
            <h1>Bienvenue sur Cloudsdale Radio!</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm-6">
          <div class="RTestla">
            <h2>Station 1 From The Sky !</h2>
            <iframe src="https://broadcaster.cloudsdaleradio.com/public/cloudsdale_radio/embed" frameborder="0" allowtransparency="false" style="width: 70%; min-height: 100%; border: 1; position:relative; top: 40px; left: 20px;" scrolling="no"></iframe>
            <!--<audio controls="" autoplay="" name="media"><source src="https://broadcaster.cloudsdaleradio.com/radio/8000/radio.mp3" type="audio/mpeg"></audio>-->
            

    </div>

    </div>
    <div class="col-sm-5 float-right">      
        <h2>écouter via d'autres players ?</h2><br>
        <p>&nbsp;</p>
        <div class="btn-group" role="group" aria-label="RT est gentils!">
          <a id="listen" class="btn btn-default" href="#" @click="openPopup">Popup</a>
          <a href="https://broadcaster.cloudsdaleradio.com:8000/radio.mp3" target="blank" class="btn btn-default">Navigateur</a>
          <a href="https://cdn.cloudsdalegroup.com/cr/CR_MP3@128.m3u" rel="noreferrer" target="_blank" class="btn btn-default">Fichier</a>
          <a href="/request" class="btn btn-default">Demander un titre</a>
          <!--<a href="/historia" class="btn btn-default">Historique</a> Not Implemented-->
          <!--<a href="#modal" class="btn btn-default" data-toggle="modal" data-target="#lastplayed">Last Played</a>-->
        </div>
    </div>
    </div>
    </div> 
      <!--<div class="container">
    <div class="row">
        <div class="col-md-offset-4 col-md-4">
                <h2 class="text-center">Live Stream</h2>
      <div class="embed-responsive embed-responsive-16by9">
        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/6XGU98B-nwM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
        </div>
    </div>
</div>-->
    <p>&nbsp;</p>
    <!-- last played (Not implemented)
    <div class="modal fade" id="lastplayed" tabindex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="ModalLabel">Titres jouer</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <ul id="played"></ul>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>-->
  </div>
</template>
<script>
export default {
    methods: {
    openPopup () {
      window.open(
        '/popup/',
        'CRpopup',
        'TheHeader=no, scrollbars=no, width=720, height=200'
      )
    }
  }
}
</script>
