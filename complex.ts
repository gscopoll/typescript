class Complex {
private re: number;
    private im: number;
    constructor(re:number,im:number){
    this.re=re;
    this.im=im;
    }
    add(complex:Complex){
        let re=this.re + complex.re;
        let im=this.im + complex.im;
        return new Complex(re,im);
    }
    substract(complex:Complex){
        let re=this.re - complex.re;
        let im=this.im - complex.im;
        return new Complex(re,im);
    }
    tostring(){}
}