(function Loader(){

    var urlParameters = location.href.toString().split('?');
    var targetFile = '';

    if(urlParameters.length > 1){
        targetFile = urlParameters[urlParameters.length - 1];
    }
    if(targetFile!=''){
        var oReq = new XMLHttpRequest();
        oReq.addEventListener("load", function (){
            var response = this.responseText;
            var $ = function (id) { return document.getElementById(id); };
            $("preview").innerHTML = markdown.toHTML(response);
        });
        oReq.open("GET", targetFile);
        oReq.send();
    }

}())