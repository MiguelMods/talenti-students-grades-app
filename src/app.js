//DATA
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

//Elementos
const selectListOfStudents = document.getElementById("selectListOfStudents");
selectListOfStudents.add(new Option("Selecionar un Valor", 0, true));
const sectionOfStudentGrades = document.getElementById(
  "sectionOfStudentGrades"
);

studentsGradesList.forEach((studentGrades) => {
  selectListOfStudents.add(new Option(studentGrades.name, studentGrades.name));
});

selectListOfStudents.onchange = function () {
  const selectedStudent = selectListOfStudents.value;
  sectionOfStudentGrades.innerHTML = `<h3>${selectedStudent}</h3>`;

  const studentGradesFound = studentsGradesList.find(
    (student) => student.name === selectedStudent
  );

  if (studentGradesFound) {
    sectionOfStudentGrades.innerHTML += `<p>Notas: ${studentGradesFound.grades}</p>`;
    let averige = calculateStudentAverige(studentGradesFound.grades);
    sectionOfStudentGrades.innerHTML += `<p>Promedio: ${averige}</p>`;
    sectionOfStudentGrades.innerHTML += `<p>Estatus: ${getStudentStatus(
      averige
    )}</p>`;
    sectionOfStudentGrades.innerHTML += `<label>Agregar una Nota: </label><input type="number" id="newStudentGradeInput" name="newStudentGradeInput"/>
      <button type="button" onclick="AddNewGrade()">Agregar</button>
      <button type="button" onclick="RemoveLastGrade()">Remover Ultima Nota</button>`;
  } else {
    sectionOfStudentGrades = `No se han encontrado valores para: ${selectedStudent}`;
  }
};

function AddNewGrade() {
  const newGrade = parseInt(
    document.getElementById("newStudentGradeInput").value
  );
  const selectedStudent = selectListOfStudents.value;

  const studentGradesFound = studentsGradesList.find(
    (student) => student.name === selectedStudent
  );

  studentGradesFound.grades.push(newGrade);
  selectListOfStudents.value = selectedStudent;
  selectListOfStudents.dispatchEvent(new Event("change"));
}

function RemoveLastGrade() {
  const selectedStudent = selectListOfStudents.value;

  const studentGradesFound = studentsGradesList.find(
    (student) => student.name === selectedStudent
  );

  studentGradesFound.grades.pop();
  selectListOfStudents.value = selectedStudent;
  selectListOfStudents.dispatchEvent(new Event("change"));
}

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
