"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Auto_1 = require("./Auto");
var Moto_1 = require("./Moto");
var Camion_1 = require("./Camion");
var RegistroAutomotor_1 = require("./RegistroAutomotor");
// Creamos una instancia de la clase RegistroAutomotor
var registro = new RegistroAutomotor_1.RegistroAutomotor();
// Crear vehículos
var auto = new Auto_1.Auto(1, 'Volkswagen', 'T-Roc', 'AB234CC');
var moto = new Moto_1.Moto(2, 'Honda', 'Navi', 'CB234AA');
var camion = new Camion_1.Camion(3, 'Ford', 'Super Duty', 'BB234AC');
// Agregar vehículos al registro
registro.agregarVehiculo(auto);
registro.agregarVehiculo(moto);
registro.agregarVehiculo(camion);
//Lista de vehiculos
console.log("Lista de vehiculos");
registro.listarVehiculos();
// Modificar vehículo
console.log("Se modificó el de ID 1");
registro.modificarVehiculo(1, 'Audi', 'Q3 Sportback', 'ABC2232CB');
// Listar vehículos
console.log("Lista de vehiculos con modificicación");
registro.listarVehiculos();
// Eliminar un vehículo
console.log("Se dio de baja el ID 2");
registro.darDeBajaVehiculo(2);
// Listar nuevamente para ver el resultado
console.log("Lista actualizada: ");
registro.listarVehiculos();
