import { Auto } from "./Auto";
import { Moto } from "./Moto";
import { Camion } from "./Camion";

export class RegistroAutomotor {
    private vehiculos: Array <Auto | Moto | Camion> = [];


    // Agregar vehículo
    agregarVehiculo(vehiculo: Auto | Moto | Camion): void {
        this.vehiculos.push(vehiculo);
    }


    // Obtener vehículo por ID
    obtenerVehiculo(id: number): Auto | Moto | Camion | undefined {
        return this.vehiculos.find(vehiculo => vehiculo.getId() === id);
    }

    // Modificar vehículo (Actualizar marca, modelo y patente)
    modificarVehiculo(id: number, nuevaMarca: string, nuevoModelo: string, nuevaPatente: string): void {
        const vehiculo = this.obtenerVehiculo(id);
        if (vehiculo) {
            vehiculo.setMarca(nuevaMarca);
            vehiculo.setModelo(nuevoModelo);
            vehiculo.setPatente(nuevaPatente);
        }
    }

    // Eliminar vehículo por ID
    darDeBajaVehiculo(id: number): void {
        this.vehiculos = this.vehiculos.filter(vehiculo => vehiculo.getId() !== id);
    }

    // Listar todos los vehículos
    listarVehiculos(): void {
    this.vehiculos.forEach(vehiculo => {
        console.log(vehiculo);
        });
    }
}