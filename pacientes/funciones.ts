import { Pacientes, Especialidad } from "./data";

// Apartado 1A
export const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
  return pacientes.filter((paciente) => paciente.especialidad === "Pediatra");
};

// Apartado 1B
export const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
  return pacientes.filter(
    (paciente) =>
      paciente.especialidad === "Pediatra" && paciente.edad < 10
  );
};

// Apartado 2
export const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  return pacientes.some(
    (paciente) =>
      paciente.temperatura > 39 && paciente.frecuenciaCardiaca > 100
  );
};

// Apartado 3
export const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
  return pacientes.map((paciente) =>
    paciente.especialidad === "Pediatra"
      ? { ...paciente, especialidad: "Medico de familia" }
      : paciente
  );
};

// Apartado 4
export const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  return pacientes.some((paciente) => paciente.especialidad === "Pediatra");
};

// Apartado 5
export interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

export const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  return pacientes.reduce(
    (acc, paciente) => {
      switch (paciente.especialidad) {
        case "Medico de familia":
          acc.medicoDeFamilia++;
          break;
        case "Pediatra":
          acc.pediatria++;
          break;
        case "Cardiólogo":
          acc.cardiologia++;
          break;
      }
      return acc;
    },
    {
      medicoDeFamilia: 0,
      pediatria: 0,
      cardiologia: 0,
    }
  );
};
