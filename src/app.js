const studentsGradesList = [
  {
    name: "Miguel Jose Mata Ramos",
    grades: [43, 91, 18, 76, 54, 82, 67],
  },
  {
    name: "Ana María García López",
    grades: [98, 13, 85, 42, 91, 19, 74],
  },
  {
    name: "Juan Carlos Pérez Hernández",
    grades: [75, 28, 93, 81, 46, 59, 88],
  },
  {
    name: "Sofía Rodríguez Martínez",
    grades: [21, 85, 94, 39, 72, 51, 86],
  },
  {
    name: "Luis Fernando Sánchez Gómez",
    grades: [89, 41, 79, 95, 23, 68, 83],
  },
  {
    name: "María del Carmen López García",
    grades: [56, 92, 31, 84, 97, 44, 71],
  },
  {
    name: "Carlos Alberto Hernández Pérez",
    grades: [38, 76, 52, 93, 85, 29, 64],
  },
  {
    name: "Daniela Patricia Gómez Sánchez",
    grades: [94, 48, 81, 39, 96, 73, 58],
  },
  {
    name: "Jorge Luis Martínez Rodríguez",
    grades: [82, 59, 46, 91, 75, 38, 92],
  },
  {
    name: "Gabriela Sofía Pérez López",
    grades: [69, 85, 94, 52, 89, 41, 79],
  },
];

function InterateStudentGrades() {
  for (let studentGrades of studentsGradesList) {
    console.log("------------------------");
    console.log(`Estudiante: ${studentGrades.name}`);
    console.log(`Notas: ${studentGrades.grades.sort()}`);
    let averige = calculateStudentAverige(studentGrades.grades);
    console.log(`Nota Promedio: ${averige}`);
    console.log(`El Estudiante esta:${getStudentStatus(averige)}`);
    console.log("------------------------");
  }
}

function calculateStudentAverige(grades) {
  let sum = 0;
  for (let grade of grades) {
    sum += grade;
  }
  return Math.round(sum / grades.length);
}

function getStudentStatus(averageGrade) {
  return averageGrade >= 60 ? "Aprobado" : "Reprobado";
}

InterateStudentGrades();
