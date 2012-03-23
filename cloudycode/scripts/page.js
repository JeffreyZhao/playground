(function () {

    var id = "f7769083-7bf5-4727-b5b9-2eb3e6f50840";
    if (window[id]) return;
    window[id] = true;

    function getSelectedText() {

        var focused = document.activeElement;
        var selectedText;

        if (focused) {
            try {
                selectedText = focused.value.substring(focused.selectionStart, focused.selectionEnd);
            } catch (err) { }
        }

        if (selectedText == undefined) {
            var sel = window.getSelection();
            var selectedText = sel.toString();
        }

        return selectedText;
    }

    chrome.extension.onRequest.addListener(function (request, sender, sendResponse) {
        if (request.executeSelection) {
            sendResponse({ code: getSelectedText() });
        }
    });

})();