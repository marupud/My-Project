import { Component, output } from '@angular/core';
import { SignUpComponent } from '../Authentication/sign-up/sign-up.component';
import { Observable, filter, map, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-array-methods',
  standalone: true,
  imports: [SignUpComponent, CommonModule, FormsModule],
  templateUrl: './array-methods.component.html',
  styleUrl: './array-methods.component.scss'
})
export class ArrayMethodsComponent {

  results: any[] = [];
  constructor() {


    function multiply(a: any) {
      debugger
      return function (b: any) {
        return function (c: any) {
          return a * b * c;
        };
      };
    }

    const double = multiply(2);
    const triple = multiply(3);

    const result = triple(double(4)(5))(1);
    console.log('Here' + result);

    function fetchData1() {
      return new Promise(resolve => setTimeout(() => resolve('Data 1'), 1000));
    }

    function fetchData2() {
      return new Promise(resolve => setTimeout(() => resolve('Data 2'), 1500));
    }

    function fetchData3() {
      return new Promise((resolve, reject) => setTimeout(() => reject('Data 3'), 2000));
    }

    Promise.all([fetchData1, fetchData2])
      .then(([res, res2]) => {
        console.log(res, res2)
      })
      .catch(() => {
        console.log("Error on Promise.all");
      });

    Promise.allSettled([fetchData1, fetchData3])
      .then(([res, res2]) => {
        console.log(res, res2)
      })
      .catch(() => {
        console.log("Error on Promise.allSettled");
      });

    Promise.race([fetchData1, fetchData3])
      .then((res) => {
        console.log(res)
      })
      .catch(() => {
        console.log("Error on Promise.race");
      });
  }

  // Return the observable from the method
  usingRxjsOperators(): Observable<any> {
    const numbers$: Observable<number> = of(1, 2, 3, 4, 5);

    // Example of using pipe with map and filter operators
    return numbers$.pipe(
      map(x => x * 2), // Multiply each number by 2
      filter(x => x > 5) // Filter out numbers less than or equal to 5
    );
  }

  findDuplicates(numbers: number[]): Map<number, number> {
    const countMap = new Map<number, number>();
    numbers.forEach(num => {
      if (countMap.has(num)) {
        countMap.set(num, countMap.get(num)! + 1);
      } else {
        countMap.set(num, 1);
      }
    });
    return countMap;
  }

  findDuplicateNames(names: string[]): Map<string, number> {
    const stringCount = new Map<string, number>();
    names.forEach(name => {
      if (stringCount.has(name)) {
        stringCount.set(name, stringCount.get(name)! + 1);
      }
      else {
        stringCount.set(name, 1)
      }
    })
    return stringCount;
  }

  searchDupes(numbers: number[]): Map<number, number> {
    const returnArray = new Map<number, number>();

    numbers.forEach(numb => {
      if (returnArray.has(numb)) {
        returnArray.set(numb, returnArray.get(numb)! + 1);
      } else {
        returnArray.set(numb, 1);
      }
    })
    return returnArray;
  }


  searchingDupes(dupes: (string | number)[]): Map<string | number, number> {
    const stringCount = new Map<string | number, number>();

    dupes.forEach(dup => {
      if (stringCount.has(dup)) {
        stringCount.set(dup, stringCount.get(dup)! + 1);
      }
      else {
        stringCount.set(dup, 1);
      }
    }
    )
    return stringCount;
  }

  ngOnInit() {
    this.usingRxjsOperators().subscribe(result => {
      this.results.push(result);
      // console.log(result);
    })
    // forEach():
    // The forEach() method executes a provided function once for each array element.
    // It does not return a new array; instead, it iterates over each element and performs an action.
    // It does not modify the original array.
    // Typically used when you want to perform a side effect for each element in the array.
    const numbers = [1, 2, 3, 4, 5];
    const forEachResult = numbers.forEach((num) => {
      // console.log(num * 2);
    });
    // map():
    // The map() method creates a new array with the results of calling a provided function on every element in the array.
    // It returns a new array containing the results of applying the provided function to each element of the original array.
    // It does not modify the original array.
    // Typically used when you want to transform each element of an array into something else.
    const numbersForMap = [1, 2, 3, 4, 5];
    const doubledNumbers = numbersForMap.map((num) => {
      return num * 2;
    });
    // console.log(doubledNumbers);

    const DuplicateArray = [1, 2, 3, 5, 5, 7, 6, 7, 1, 0, 0, 0];
    const duplicateNumbers = this.searchDupes(DuplicateArray);
    // console.log(duplicateNumbers);
    duplicateNumbers.forEach((count, num) => {
      if (count > 1) {
        console.log(`Number ${num} occurs ${count} times.`);
      }
    });

    const findDups: (string | number)[] = [1, 'sai', 1, 'sai', 1, 2];
    const dupes = this.searchingDupes(findDups);
    dupes.forEach((count, value) => {
      if (count > 1) {
        // console.log(`String ${value} occurs ${count} times.`);
      }

    });

    const DuplicateNamesArray = ['saiteja', 'sahithya', 'sahithi', 'sunny', 'saiteja', 'saibabu', 'daggubati', 'saiteja', 'sunny', 'sunny', 'sweety', 'sweet'];
    const duplicateNames = this.findDuplicateNames(DuplicateNamesArray);
    duplicateNames.forEach((count, num) => {
      if (count >= 1) {
        // console.log(`Names ${num} occurs ${count} times.`);
      }
    });
  }

  ngAfterViewInit() {
    const myMap: Map<number, number> = new Map();

    // Adding key-value pairs to the Map
    myMap.set(1, 10);
    myMap.set(2, 20);
    myMap.set(3, 30);

    // Accessing values from the Map
    // console.log(myMap.get(1)); // Output: 10
    // console.log(myMap.get(2)); // Output: 20

    // Checking if a key exists in the Map
    // console.log(myMap.has(3)); // Output: true
    // console.log(myMap.has(4)); // Output: false

    // Getting the size of the Map
    // console.log(myMap.size); // Output: 3

    // Deleting a key-value pair from the Map
    myMap.delete(1);
    // console.log(myMap.get(1)); // Output: undefined

    // Iterating over the Map using forEach
    myMap.forEach((value, key) => {
      // console.log(`Key: ${key}, Value: ${value}`);
    });

    // Clearing all key-value pairs from the Map
    myMap.clear();
    // console.log(myMap.size);
  }


  firstName: string = '';
  lastName: string = '';
  phoneNumber: string = '';
  submittedDetails: any[] = [];

  submitForm() {
    if (this.firstName && this.lastName && this.phoneNumber) {
      this.submittedDetails.push({
        firstname: this.firstName,
        lastname: this.lastName,
        phonenumber: this.phoneNumber
      });
      // Sort submitted details by last name
      this.submittedDetails.sort((a, b) => {
        const lastNameA = a.lastName.toLowerCase();
        const lastNameB = b.lastName.toLowerCase();
        return lastNameA.localeCompare(lastNameB);
      });
      // Clear input fields after submission
      this.firstName = '';
      this.lastName = '';
      this.phoneNumber = '';
    }
  }



}
