class BaseClass {
    _elementId;
    constructor(element) {
        this._elementId = element;
    }

    html(text) {
        var el = document.getElementById(this._elementId);
        el.innerHTML = "BaseClass <br />";
        el.append(text);
    }
}