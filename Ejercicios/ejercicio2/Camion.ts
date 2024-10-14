export class Camion {
    private id: number;
    private marca: string;
    private modelo: string;
    private patente: string;

    constructor (id:number, marca:string, modelo:string, patente:string){
        this.id = id;
        this.marca = marca;
        this.modelo = modelo;
        this.patente = patente;
    }

    //Getters
    getId (){
        return this.id;
    }
    getMarca (){
        return this.marca;
    }
    getModelo (){
        return this.modelo;
    }
    getPatente (){
        return this.patente;
    }

    //Setters
    setId(id: number) {
        this.id = id;
    }
    setMarca(marca: string) {
        this.marca = marca;
    }
    setModelo(modelo: string) {
        this.modelo = modelo;
    }
    setPatente(patente: string) {
        const patenteVerification = /^[A-Z 0-9]+$/; // Letras mayúsculas y números
        if (patenteVerification.test(patente)) {
            this.patente = patente;
        } else {
            throw new Error("Patente no válida");
        }
    }
}