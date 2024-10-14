"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroAutomotor = void 0;
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor() {
        this.vehiculos = [];
    }
    // Agregar vehículo
    RegistroAutomotor.prototype.agregarVehiculo = function (vehiculo) {
        this.vehiculos.push(vehiculo);
    };
    // Obtener vehículo por ID
    RegistroAutomotor.prototype.obtenerVehiculo = function (id) {
        return this.vehiculos.find(function (vehiculo) { return vehiculo.getId() === id; });
    };
    // Modificar vehículo (Actualizar marca, modelo y patente)
    RegistroAutomotor.prototype.modificarVehiculo = function (id, nuevaMarca, nuevoModelo, nuevaPatente) {
        var vehiculo = this.obtenerVehiculo(id);
        if (vehiculo) {
            vehiculo.setMarca(nuevaMarca);
            vehiculo.setModelo(nuevoModelo);
            vehiculo.setPatente(nuevaPatente);
        }
    };
    // Eliminar vehículo por ID
    RegistroAutomotor.prototype.darDeBajaVehiculo = function (id) {
        this.vehiculos = this.vehiculos.filter(function (vehiculo) { return vehiculo.getId() !== id; });
    };
    // Listar todos los vehículos
    RegistroAutomotor.prototype.listarVehiculos = function () {
        this.vehiculos.forEach(function (vehiculo) {
            console.log(vehiculo);
        });
    };
    return RegistroAutomotor;
}());
exports.RegistroAutomotor = RegistroAutomotor;
