// Sorting Structures

function marksSort(n, students) {
  const stud = students.map(student => {
    const [id, name, ...marks] = student;
    const totalMarks = marks.reduce((total, mark) => total + mark, 0);
    return {id, name, totalMarks};
  });

  stud.sort((a, b) => {
    if(b.totalMarks !== a.totalMarks) return b.totalMarks - a.totalMarks;
    else if (a.name !== b.name) return a.name.localeCompare(b.name);
    else return a.id - b.id;
  })

  return stud.map(st => st.id);
}