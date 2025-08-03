import {
  obtenPacientesAsignadosAPediatria,
  obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios,
  activarProtocoloUrgencia,
  reasignaPacientesAMedicoFamilia,
  HayPacientesDePediatria,
  cuentaPacientesPorEspecialidad,
} from "./funciones";

import { pacientes } from "./data";

console.log("🩺 Pacientes de Pediatría:");
console.log(obtenPacientesAsignadosAPediatria(pacientes));

console.log("🧒 Pacientes de Pediatría menores de 10:");
console.log(obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes));

console.log("🚨 ¿Activar protocolo de urgencia?");
console.log(activarProtocoloUrgencia(pacientes));

console.log("🔁 Reasignando pacientes de Pediatría a Médico de Familia:");
console.log(reasignaPacientesAMedicoFamilia(pacientes));

console.log("🏥 ¿Hay pacientes de Pediatría?");
console.log(HayPacientesDePediatria(pacientes));

console.log("📊 Conteo por especialidad:");
console.log(cuentaPacientesPorEspecialidad(pacientes));
