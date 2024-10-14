"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moto = void 0;
var Moto = /** @class */ (function () {
    function Moto(id, marca, modelo, patente) {
        this.id = id;
        this.marca = marca;
        this.modelo = modelo;
        this.patente = patente;
    }
    //Getters
    Moto.prototype.getId = function () {
        return this.id;
    };
    Moto.prototype.getMarca = function () {
        return this.marca;
    };
    Moto.prototype.getModelo = function () {
        return this.modelo;
    };
    Moto.prototype.getPatente = function () {
        return this.patente;
    };
    //Setters
    Moto.prototype.setId = function (id) {
        this.id = id;
    };
    Moto.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Moto.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Moto.prototype.setPatente = function (patente) {
        var patenteVerification = /^[A-Z 0-9]$/; // Letras mayúsculas y números
        if (patenteVerification.test(patente)) {
            this.patente = patente;
        }
        else {
            throw new Error("Patente no válida");
        }
    };
    return Moto;
}());
exports.Moto = Moto;
