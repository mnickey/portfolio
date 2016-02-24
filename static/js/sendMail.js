function sendMail() {
    var link = "mailto:mnickey@gmail.com"
            + "?subject=" + escape("Emailing you from your portfolio")
            + "&body=" + escape(document.getElementById('message').value);
    window.open(link);
}