<template>
    <div class="footer">
          <div class="row">
            <nav role="navigation" class="col-md-offset-1 col-lg-10">
              <a href="http://mylittlepony.hasbro.com/en-us">Copyright &copy; My Little Pony Frienship is magic™</a> est la propriété intellectuel de hasbro<br>
              Copyright &copy; tous droits sur les Musiques/Créations vont à leurs artistes respectifs.<br>
              Copyright <a href="http://www.copyrighted.com/copyrights/view/gahl-yxox-vlsm-deb9">&copy; Cloudsdale Radio</a> 2016 - 2018 - Tous droits réservés<br>
              Copyright &copy; Site developpé par Cloudsdale Group • Version 7.0 <span class="prototype">PROTOTYPE</span> <br> Cloudsdale radio est une filiale Cloudsdale Group<br>
              <a v-bind:href="/sitemap/">Site Map</a> • <!--<a v-bind:href="/partenaire/">Partenaire</a> •--> <a v-bind:href="/thanks/">Remerciements</a> • <a v-bind:href="/changelogs/">Updates</a> • <a v-bind:href="/server/">Serveurs</a> • <a v-bind:href="/staff/">Staff</a> • <a href="http://status.cloudsdalegroup.com">Status des services</a> • <a v-bind:href="/humans.txt/"> <img alt="humans.txt" src="/images/humans.png"> </a><br>
              <a href="/faq">FAQ</a> • <a href="/privacy">Vie Privée</a>
            </nav>
            <div class="copyright float-right">
              Powered by <a href="http://CloudsdaleGroup.com">CloudsdaleGroup</a><br>
              <a href="http://norme.nitrogroup.fr/rer-d/"><img src="https://img.shields.io/badge/Norme-RER--D-green.svg" alt="Norme RERD"></a><br>
            </div>
          </div>
          <p>&nbsp;</p>
        </div>
</template>

<style scoped>
.footer {
text-transform: capitalize;
background-color: #1F1F1F; 
padding: 10px; 
border-color: white; 
color: white; 
width: 100%; 
text-align: left; 
bottom: 0px;
overflow: hidden;
margin-top: 5%;
}
.prototype {
  color:red;
}
</style>

<script>
export default {
  mounted() {
    const shoutcast = document.createElement("script");
    shoutcast.setAttribute(
      "src",
      "https://cloudsdaleradio.com/javascripts/shoutcast.js"
    );
    shoutcast.async = true;
    document.head.appendChild(shoutcast);

    const jquery = document.createElement("script");
    jquery.setAttribute(
      "src",
      "https://code.jquery.com/jquery-3.4.0.js"
    );
    jquery.async = true;
    document.head.appendChild(jquery);
  }
}
</script>
