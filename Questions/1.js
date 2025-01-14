// Questions 1

function func(arr1, arr2) {
  const result = arr1.map((person) => {
    const qualifications = arr2
      .filter((edu) => edu.id === person.id)
      .map((edu) => edu.edu);

    return {
      name: person.name,
      id: person.id,
      qualification: qualifications,
    };
  });

  console.log(result);
}

const arr1 = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 21 },
  { id: 3, name: "Charlie", age: 23 },
  { id: 4, name: "Diana", age: 31 },
];
const arr2 = [
  { id: 1, edu: "MBA" },
  { id: 1, edu: "BBA" },
  { id: 2, edu: "BSc Computer Science" },
  { id: 2, edu: "MSc Data Science" },
  { id: 3, edu: "BCom" },
  { id: 3, edu: "Diploma in Marketing" },
  { id: 4, edu: "BTech" },
  { id: 4, edu: "PhD in Robotics" },
];
func(arr1, arr2);
