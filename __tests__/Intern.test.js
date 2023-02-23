const Intern = require("../lib/Intern")

test("The Intern's school is rendered by getSchool()", () => {
    const school = "Harvard"
    const employee = new Intern("Jared", 3, "intern@test.com", school)
    expect(employee.getSchool()).toBe(school)
})

test("Employee role of \"Intern\" is rendered by getRole()", () => {
    const role = "Intern"
    const employee = new Intern("Jared", 3, "intern@test.com", "Harvard" )
    expect(employee.getRole()).toBe(role)
})