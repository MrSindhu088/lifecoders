    function copyhtml() {

      const text = document.querySelector("#htmlText");

      const btnText = document.querySelector("#htmlBtn");

      text.select();

      document.execCommand("copy");

      btnText.textContent = "Copied";

      setTimeout(function(){

          btnText.textContent = "Copy";

      }, 5000);

}