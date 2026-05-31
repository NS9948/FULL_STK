let students = [
    { name: "Rahul", marks: 85 },
    { name: "Aman", marks: 92 },
    { name: "Priya", marks: 78 }
  ];

//   Show all students
for(let item in students){
    console.log("Name of student is: ",students[item].name," and his/her marks are: ",students[item].marks);
}

// Add student
students.push({name: "Nishant", marks: 99});

// Delete student
students.splice(1,1);

// Update marks
let stud = prompt("Enter the name of the student whose marks needs to be updated: ");
let newMarks = Number(prompt("Enter new marks: "));

let student = students.find(student => student.name === stud);

if (student) {
    student.marks = newMarks;
    console.log("Marks updated successfully");
} else {
    console.log("Student not found");
}

// Find topper
let topper = students[0];
for(let item of students){
    if(topper.marks < item.marks) topper = item
}
console.log(topper)

// Calculate average marks
let total = 0;
for(let item of students){
    total += item.marks
}
console.log(total/(students.length));

// Search student by name
let studentToFind = prompt("Write the name of the student to get the full details: ");
let studd = students.find(student => student.name == studentToFind);
console.log("Name of the entered student is: ",studd.name," Marks of the student is: ",studd.marks);

// Sort students by marks
students.sort((a,b) => {
    return a.marks-b.marks
});