"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auto = void 0;
var Auto = /** @class */ (function () {
    function Auto(id, marca, modelo, patente) {
        this.id = id;
        this.marca = marca;
        this.modelo = modelo;
        this.patente = patente;
    }
    //Getters
    Auto.prototype.getId = function () {
        return this.id;
    };
    Auto.prototype.getMarca = function () {
        return this.marca;
    };
    Auto.prototype.getModelo = function () {
        return this.modelo;
    };
    Auto.prototype.getPatente = function () {
        return this.patente;
    };
    //Setters
    Auto.prototype.setId = function (id) {
        this.id = id;
    };
    Auto.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Auto.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Auto.prototype.setPatente = function (patente) {
        var patenteVerification = /^[A-Z 0-9]+$/; // Letras mayúsculas y números
        if (patenteVerification.test(patente)) {
            this.patente = patente;
        }
        else {
            throw new Error("Patente no válida");
        }
    };
    return Auto;
}());
exports.Auto = Auto;
