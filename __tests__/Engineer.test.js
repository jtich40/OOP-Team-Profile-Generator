const Engineer = require("../lib/Engineer")

test("The Engineer's GitHub username is rendered by getGithub()", () => {
    const username = "testuser"
    const employee = new Engineer("Jared", 2, "engineer@test.com", username)
    expect(employee.getGithub()).toBe(username)
})

test("Employee role of \"Engineer\" is rendered by getRole()", () => {
    const role = "Engineer"
    const employee = new Engineer("Jared", 2, "engineer@test.com", "testuser" )
    expect(employee.getRole()).toBe(role)
})