const students = [
  { name: "Ana", scores: [85, 90, 88], present: true },
  { name: "Ben", scores: [70, 75, 72], present: false },
  { name: "Cara", scores: [95, 92, 94], present: true },
  { name: "Daniel", scores: [60, 65, 70], present: true },
  { name: "Ella", scores: [88, 85, 90], present: true },
  { name: "Felix", scores: [78, 80, 82], present: false },
  { name: "Grace", scores: [92, 89, 94], present: true },
  { name: "Hannah", scores: [73, 70, 68], present: false },
  { name: "Ivan", scores: [81, 84, 79], present: true },
  { name: "Julia", scores: [96, 98, 97], present: true }
];

const tableBody = document.getElementById("studentTable");
const searchInput = document.getElementById("searchInput");

function getAverage(scores) {
  return (scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(2);
}

function getRemarks(avg) {
  return avg >= 75 ? "Passed" : "Failed";
}

function displayStudents(list) {
  tableBody.innerHTML = "";

  if (list.length === 0) {
    tableBody.innerHTML = `<tr><td colspan="6">No student found</td></tr>`;
    return;
  }

  list.forEach(student => {
    const avg = getAverage(student.scores);
    const remarks = getRemarks(avg);

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${student.name}</td>
      <td>${student.scores[0]}</td>
      <td>${student.scores[1]}</td>
      <td>${student.scores[2]}</td>
      <td>${avg}</td>
      <td class="${remarks === "Passed" ? "passed" : "failed"}">${remarks}</td>
    `;
    tableBody.appendChild(row);
  });
}

/* SEARCH */
document.getElementById("searchBtn").addEventListener("click", () => {
  const keyword = searchInput.value.toLowerCase();
  displayStudents(students.filter(s =>
    s.name.toLowerCase().includes(keyword)
  ));
});

/* RESET */
document.getElementById("resetBtn").addEventListener("click", () => {
  searchInput.value = "";
  displayStudents(students);
});

/* FILTERS */
document.getElementById("presentBtn").addEventListener("click", () => {
  displayStudents(students.filter(s => s.present));
});

document.getElementById("absentBtn").addEventListener("click", () => {
  displayStudents(students.filter(s => !s.present));
});

document.getElementById("passedBtn").addEventListener("click", () => {
  displayStudents(students.filter(s => getAverage(s.scores) >= 75));
});

document.getElementById("failedBtn").addEventListener("click", () => {
  displayStudents(students.filter(s => getAverage(s.scores) < 75));
});

/* LOAD ALL */
displayStudents(students);
