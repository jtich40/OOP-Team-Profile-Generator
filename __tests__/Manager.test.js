const Manager = require("../lib/Manager")

test("The Manager's office number is rendered by getOfficeNumber()", () => {
    const officeNum = 2
    const employee = new Manager("Jared", 1, "manager@test.com", officeNum)
    expect(employee.getOfficeNumber()).toBe(officeNum)
})

test("Employee role of \"Manager\" is rendered by getRole()", () => {
    const role = "Manager"
    const employee = new Manager("Jared", 1, "manager@test.com")
    expect(employee.getRole()).toBe(role)
})