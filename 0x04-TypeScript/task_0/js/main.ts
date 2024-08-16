interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const firstStudent: Student = {
    firstName: "first_name",
    lastName: "last_name",
    age: 10,
    location: "Kumasi"
}

const secondStudent: Student = {
    firstName: "second_student_first_name",
    lastName: "second_student_second_name",
    age: 20,
    location: "Accra"
}

let studentsList: Student[] = [firstStudent, secondStudent]


function renderTable(students: Student[]) {
    // Create table and table header elements
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    const headerRow = document.createElement('tr');

    // Create header cells
    const firstNameHeader = document.createElement('th');
    const locationHeader = document.createElement('th');
    firstNameHeader.textContent = 'First Name';
    locationHeader.textContent = 'Location';

    // Append header cells to header row
    headerRow.appendChild(firstNameHeader);
    headerRow.appendChild(locationHeader);

    // Append header row to thead
    thead.appendChild(headerRow);

    // Loop through the students array and create table rows
    students.forEach((student) => {
        const row = document.createElement('tr');

        const firstNameCell = document.createElement('td');
        const locationCell = document.createElement('td');

        firstNameCell.textContent = student.firstName;
        locationCell.textContent = student.location;

        row.appendChild(firstNameCell);
        row.appendChild(locationCell);
        tbody.appendChild(row);
    });

    // Append thead and tbody to the table
    table.appendChild(thead);
    table.appendChild(tbody);

    // Append the table to the body of the document or a specific container
    document.body.appendChild(table);
}

// Call the function to render the table
renderTable(studentsList);
