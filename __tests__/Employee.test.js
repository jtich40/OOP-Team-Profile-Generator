const Employee = require('../lib/Employee')

test("Employee name is rendered by getName()", () => {
    const name = "Jared"
    const employee = new Employee(name)
    expect(employee.getName()).toBe(name)
})

test("Employee ID is rendered by getId()", () => {
    const id = 1
    const employee = new Employee("Jared", id)
    expect(employee.getId()).toBe(id)
})

test("Employee email address is rendered by getEmail()", () => {
    const email = "testing@test123.com"
    const employee = new Employee("Jared", 1, email)
    expect(employee.getEmail()).toBe(email)
})

test("Employee role of \"Employee\" is rendered by getRole()", () => {
    const role = "Employee"
    const employee = new Employee("Jared", 1, "testing@test123.com")
    expect(employee.getRole()).toBe(role)
})