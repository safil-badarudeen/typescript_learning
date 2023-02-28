class Department {
    private dep: string;
    private employees: string[] = [];
  
    constructor(n: string) {
      this.dep = n;
    }
  
    describe(this: Department) {
      console.log("Department :" + this.dep);
    }
  
    addEmployee(employee:string){
      this.employees.push(employee)
    }
  
    printEmployeeInformation(){
      console.log(this.employees.length);
      console.log(this.employees)
    }
  }
  
  const DepartmentName = new Department("microbiology");
  
  //public aayath namukk ingane maatam
  
  // DepartmentName.dep = "hello" // ith maataan private aakam., private forces to write cleaner code
  
  DepartmentName.addEmployee("safil")
  console.log(DepartmentName);
  DepartmentName.printEmployeeInformation()
  
  
  