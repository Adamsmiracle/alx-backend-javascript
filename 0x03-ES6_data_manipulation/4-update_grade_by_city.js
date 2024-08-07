function updateStudentGradeByCity(students, city, newGrade) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const grades = [...newGrade];
      //   console.log(grades, 'grades');
      const _student = student;
      //   console.log(_student);
      const newstudentgrade = grades.filter(
        (grade) => grade.studentId === _student.id,
      );
      if (!newstudentgrade.length) {
        _student.grade = 'N/A';
      } else {
        _student.grade = newstudentgrade[0].grade;
      }
      //   console.log(_student);
      return _student;
    });
}

export default updateStudentGradeByCity;