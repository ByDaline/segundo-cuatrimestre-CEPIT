import { Auto } from "./Auto";
import { Moto } from "./Moto";
import { Camion } from "./Camion";
import { RegistroAutomotor } from "./RegistroAutomotor";
import { log } from "console";


// Creamos una instancia de la clase RegistroAutomotor
let registro = new RegistroAutomotor();


// Crear vehículos
let auto = new Auto(1, 'Volkswagen', 'T-Roc', 'AB234CC');
let moto = new Moto(2, 'Honda', 'Navi', 'CB234AA');
let camion = new Camion(3, 'Ford', 'Super Duty', 'BB234AC');



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
registro.darDeBajaVehiculo(2);
console.log("Se dio de baja el ID 2")


// Listar nuevamente para ver el resultado
console.log("Lista actualizada: ")
registro.listarVehiculos();


