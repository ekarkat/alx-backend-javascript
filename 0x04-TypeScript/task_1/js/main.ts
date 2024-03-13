// Teacher interface
interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	gender: string;
	contract: boolean;
	salary: number;
	[key: string]: any; // Index signature for additional attributes
}

// task 2
// Director interface exted of teacher
interface Directors extends Teacher {
	numberOfReports: number;
}

// task 3 function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  const firstLetter = firstName.charAt(0).toUpperCase();
  const capitalizedLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
  return `${firstLetter}. ${capitalizedLastName}`;
};

// task 4
// Interface for the constructor
interface StudentConstructor {
  firstName: string;
  lastName: string;
}

// Interface for the StudentClass
interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
}

class Student implements StudentClass {
  // Properties
  private firstName: string;
  private lastName: string;

  // Constructor
  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Methods
  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}
