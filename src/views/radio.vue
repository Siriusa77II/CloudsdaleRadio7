<template>
    <div class="popup">
        <div class="sm2-bar-ui flat">
 <div class="bd sm2-main-controls" style="background-color: rgb(63, 130, 255) ">
  <div class="sm2-inline-texture"></div>
  <div class="sm2-inline-gradient"></div>
  <div class="sm2-inline-element sm2-button-element">
   <div class="sm2-button-bd">
    <a href="#play" class="sm2-inline-button sm2-icon-play-pause">Play / pause</a>
   </div>
  </div>
  <div class="sm2-inline-element sm2-inline-status">
   <div class="sm2-playlist">
    <div class="sm2-playlist-target"><ul class="sm2-playlist-bd"><li><marquee><b>Figub Brazlevič</b> - Bosnian Syndicate <span title="Published under a Creative Commons BY-NC-ND license" class="label">(BY-CC-ND license)</span></marquee></li></ul></div>
   </div>
  <div class="sm2-progress">
    <div class="sm2-row">
    <div class="sm2-inline-time"></div>
     <div class="sm2-progress-bd">
      <div class="sm2-progress-track">
       <div class="sm2-progress-bar"></div>
       <div class="sm2-progress-ball"><div class="icon-overlay"></div></div>
      </div>
     </div>
     <div class="sm2-inline-duration"></div>
    </div>
   </div>
  </div>
  <div class="sm2-inline-element sm2-button-element sm2-volume">
   <div class="sm2-button-bd">
    <span class="sm2-inline-button sm2-volume-control volume-shade"></span>
    <a href="#volume" class="sm2-inline-button sm2-volume-control">volume</a>
   </div>
  </div>
  <div class="sm2-inline-element sm2-button-element sm2-menu">
   <div class="sm2-button-bd">
    <a href="#menu" class="sm2-inline-button sm2-icon-menu">menu</a>
   </div>
  </div>
 </div>
 <div class="bd sm2-playlist-drawer sm2-element" style="background-color: rgb(77, 77, 77); height: 0px;">
  <div class="sm2-inline-texture">
   <div class="sm2-box-shadow"></div>
  </div>
  <!-- playlist content is mirrored here -->
  <div class="sm2-playlist-wrapper">
    <ul class="sm2-playlist-bd">
<li><a href="https://broadcaster.cloudsdaleradio.com/radio/8000/radio.mp3?1533914010"><b>Cloudsdale Radio</b> MBCFR<span class="label"> 128Kbps Normal Quality</span></a></li>
     <!-- example: playable link, "buy" link, "download" link -->
     <li class="selected">
      <div class="sm2-row">      
      </div>
     </li>
     <!-- standard one-line items, no extra links -->
     <li><a href="https://broadcaster.cloudsdaleradio.com/radio/8000/radio64.mp3?1533914010"><b>Cloudsdale Radio</b> MBCFR<span class="label">64Kbps Low Quality</span></a></li>
     <li><a href="https://broadcaster.cloudsdaleradio.com/radio/8000/radio320.mp3?1533914010"><b>Cloudsdale Radio</b> MBCFR<span class="label">320Kbps Hight Quality</span></a></li>
     <li><a href="http://frrelay.cloudsdaleradio.com/cloudsdaleradio64.mp3"><b>Cloudsdale Radio </b>Relay France<span class="label">64Kbps Low Quality</span></a></li>
     <li><a href="http://frrelay.cloudsdaleradio.com/cloudsdaleradio128.mp3"><b>Cloudsdale Radio </b>Relay France<span class="label">128Kbps Normal Quality</span></a></li>
     <li><a href="http://frrelay.cloudsdaleradio.com/cloudsdaleradio320.mp3"><b>Cloudsdale Radio </b>Relay France<span class="label">320Kbps Hight Quality</span></a></li>
     <!--<li><a href="http://frrelay.cloudsdaleradio.com/cloudsdaleradioaac320"><b>Cloudsdale Radio</b>Relay France<span class="label">LOSSLESS</span></a></li>-->
     <li><a href="http://AMSrelay.cloudsdaleradio.com/cloudsdaleradio64.mp3"><b>Cloudsdale Radio </b>Relay NL<span class="label">64Kbps Low Quality</span></a></li>
     <li><a href="http://AMSrelay.cloudsdaleradio.com/cloudsdaleradio128.mp3"><b>Cloudsdale Radio </b>Relay NL<span class="label">128Kbps Normal Quality</span></a></li>
     <li><a href="http://AMSrelay.cloudsdaleradio.com/cloudsdaleradio320.mp3"><b>Cloudsdale Radio </b>Relay NL<span class="label">320Kbps Hight Quality</span></a></li>
     <!--<li><a href="http://AMSrelay.cloudsdaleradio.com/cloudsdaleradioaac320"><b>Cloudsdale Radio</b>Relay France<span class="label">LOSSLESS</span></a></li>-->
    </ul>
  </div>
  <div class="sm2-extra-controls">
   <div class="bd">
    <div class="sm2-inline-element sm2-button-element">
     <a href="#prev" title="Previous" class="sm2-inline-button sm2-icon-previous">&lt; previous</a>
    </div>
    <div class="sm2-inline-element sm2-button-element">
     <a href="#next" title="Next" class="sm2-inline-button sm2-icon-next">&gt; next</a>
    </div>
   </div>
  </div>
 </div>
</div>
<div class="row">
                <div class="col-sm-12">
                    <div class="col-md-offset-2">
                    <h4 class="text-left" style="position:relative;left:4%;"><strong>Now Playing </strong></h4>
                    </div>
                    <div class="col-xs-4 col-sm-2">
                        <span class="art2"><img src="https://cdn3.iconfinder.com/data/icons/generic-05/100/less_Is_More_V1.0-61-512.png" width="90px"></span>
                    </div>
                    <div class="col-xs-8 col-sm-9">
                        <p><span class="title">API is down.</span><br>
                            <b><span class="author">No Data</span></b></p>
                            <div class="live"></div>
                            <p class="text-center"><h4><small><span id class="listen">Offline</span></small></h4><div class="request"></div>
                </div>
            </div>
            <p>&nbsp;</p>
            </div>
    </div>
</template>
<script>
export default {
  name: 'popup',
  mounted () {
    document.title = 'Radio Brony'
    document.querySelector('body').classList.add('popup')

    if (window.location.hash !== '#dark') {
      document.querySelector('body').classList.add('dark')
    }
  },
  beforeDestroy () {
    document.querySelector('body').classList.remove('TheHeader')
    document.querySelector('body').classList.remove('dark')
  }
}
</script>