"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Camion = void 0;
var Camion = /** @class */ (function () {
    function Camion(id, marca, modelo, patente) {
        this.id = id;
        this.marca = marca;
        this.modelo = modelo;
        this.patente = patente;
    }
    //Getters
    Camion.prototype.getId = function () {
        return this.id;
    };
    Camion.prototype.getMarca = function () {
        return this.marca;
    };
    Camion.prototype.getModelo = function () {
        return this.modelo;
    };
    Camion.prototype.getPatente = function () {
        return this.patente;
    };
    //Setters
    Camion.prototype.setId = function (id) {
        this.id = id;
    };
    Camion.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Camion.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Camion.prototype.setPatente = function (patente) {
        var patenteVerification = /^[A-Z 0-9]+$/; // Letras mayúsculas y números
        if (patenteVerification.test(patente)) {
            this.patente = patente;
        }
        else {
            throw new Error("Patente no válida");
        }
    };
    return Camion;
}());
exports.Camion = Camion;
