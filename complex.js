var Complex = /** @class */ (function () {
    function Complex(re, im) {
        this.re = re;
        this.im = im;
    }
    Complex.prototype.add = function (complex) {
        var re = this.re + complex.re;
        var im = this.im + complex.im;
        return new Complex(re, im);
    };
    Complex.prototype.substract = function (complex) {
        var re = this.re - complex.re;
        var im = this.im - complex.im;
        return new Complex(re, im);
    };
    Complex.prototype.tostring = function () { };
    return Complex;
}());
