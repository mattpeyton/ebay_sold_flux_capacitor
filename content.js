

function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

if (getQueryVariable("LH_Sold") === "1"){
 var resultLinks = document.getElementsByClassName('s-item__link');
  for(var i = 0; i < resultLinks.length; i ++){
    var link = resultLinks[i].getAttribute('href');
    var idPattern = /\d{12}/;
    var id = link.match(idPattern);
    resultLinks[i].setAttribute('href','https://www.ebay.com/itm/' + id[0] + '?nordt=true&orig_cvip=true');
  };

  var resultPhotos = document.getElementsByClassName("s-item__image");
  // var photoLinks = resultPhotos.getElementsByTagName("a");
  console.log(resultPhotos);
  // for(var i = 0; i < resultPhotos.length; i ++){
  //   var link = phototLinks[i].getAttribute('href');
  //   var idPattern = /\d{12}/;
  //   var id = link.match(idPattern);
  //   photoLinks[i].setAttribute('href','https://www.ebay.com/itm/' + id[0] + '?nordt=true&orig_cvip=true');
  // };

};
