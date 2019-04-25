<template>
    <div class="server">
        <h1>Serveur</h1>
  <ul>
    <li><h2 >Où et comment sommes nous hébergé ?</h2></li>
    <li><p >Nous sommes hébergé par <a href="https://SiriusMediaGroup.com">Sirius Media Group</a> en France (paris) et aux Pays Bas (Amsterdam).</p></li>
  </ul>
    <h3>Serveurs principaux</h3>
    <ul>
      <li>CR-Prod (Node Web (Production))</li>
      <li>CR-Dev (Node Web (Développement))</li>
      <li>CR-Broadcaster (AzuraCast)</li>
    </ul>
    <h3>Relais</h3>
    <ul>
      <li>CR-relay-FR  (Relais icecast Paris France)</li>
      <li>CR-relay-AMS (Relais Shoutcast Amsterdam Pays-Bas)</li>
    </ul>
    <h1>Nos Streams</h1>
    <ul>
      <li><h4>FRANCE</h4></li>
      <li><h5>Player</h5></li>
      <li><audio controls="" name="media" src="http://frrelay.cloudsdaleradio.com/cloudsdaleradio64.mp3"></audio>MP3 64Kbps 	(Mobile Quality)</li>
      <li><audio controls="" name="media" src="http://frrelay.cloudsdaleradio.com/cloudsdaleradio128.mp3"></audio>MP3 128Kbps	(Normal Quality)</li>
      <li><audio controls="" name="media" src="http://frrelay.cloudsdaleradio.com/cloudsdaleradio320.mp3"></audio>MP3 320Kbps	(High Quality)</li>

      <li><h4>Fichier MP3</h4></li>
        <li><a href="https://cdn.cloudsdalegroup.com/cr/CR_MP3@320.m3u">Fichier 320Kbps</a></li>
        <li><a href="https://cdn.cloudsdalegroup.com/cr/CR_MP3@128.m3u">Fichier 128Kbps</a></li>
        <li><a href="https://cdn.cloudsdalegroup.com/cr/CR_MP3@64.m3u">Fichier 64Kbps</a></li>
    </ul>
    <ul>
      <li><h3>AMSTERDAM</h3></li>
      <li><audio controls="" name="media" src="http://amsrelay.cloudsdaleradio.com/cloudsdaleradio64.mp3">Cloudsdale Radio MP3 64Kbps 	(Mobile Quality)</audio></li>
      <li><audio controls="" name="media" src="http://amsrelay.cloudsdaleradio.com/cloudsdaleradio128.mp3">Cloudsdale Radio MP3 128Kbps	(Normal Quality)</audio></li>
      <li><audio controls="" name="media" src="http://amsrelay.cloudsdaleradio.com/cloudsdaleradio320.mp3">Cloudsdale Radio MP3 320Kbps	(High Quality)</audio></li>
    <hr>
      <li><audio controls="" name="media" src="http://amsrelay.cloudsdaleradio.com/cloudsdaleradioaac64">Cloudsdale Radio AAC 320Kbps	(High Quality)</audio></li>
      <li><h4>Fichier MP3</h4></li>
      <li><a href="http://cdn.cloudsdalegroup.com/cr/CR_AMS_MP3@320.m3u">Fichier 320Kbps</a></li>
      <li><a href="http://cdn.cloudsdalegroup.com/cr/CR_AMS_MP3@128.m3u">Fichier 128Kbps</a></li>
      <li><a href="http://cdn.cloudsdalegroup.com/cr/CR_AMS_MP3@64.m3u">Fichier 64Kbps</a></li>
  </ul>
    <h1>Software</h1>
    <ul>
      <li><p>Nous utilisons Azuracast comme système de Broadcast et MPD comme broadcast de secours. (fail-safe)</p></li>
    </ul>
<p>&nbsp;</p>
    </div>
</template>
