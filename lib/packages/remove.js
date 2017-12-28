Array.prototype.remove = function(fn) {
    return this.filter(function (i) {
        return ! fn(i);
    });
}