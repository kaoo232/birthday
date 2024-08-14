function openCenteredWindow() {
    var width = 300;
    var height = 300;
    var left = (screen.width - width) / 2;
    var top = (screen.height - height) / 2;

    var newWindow = window.open(
        'card.html',
        "_blank",
        "width=" + width + ",height=" + height + ",top=" + top + ",left=" + left
    );

    if (window.focus) {
        newWindow.focus();
    }
}