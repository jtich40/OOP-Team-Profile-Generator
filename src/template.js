const renderHtml = (employees) => {
    // string will be filled with html for each chosen team member
    let employeeHtml = ""
    employees.forEach(employee => {
        // html generated for manager when chosen
        if(employee.getRole() === "Manager") {
            employeeHtml += `
            <div>
                <h3>${employee.getName()}</h3>
                <h4>${employee.getRole()}</h4>
                <ul>
                    <li>ID Number: ${employee.getId()}</li>
                    <li>Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                    <li>Office Number: ${employee.getOfficeNumber()}</li>
                </ul>
            </div>
            `
        }

        // html generated for engineer when chosen
        if(employee.getRole() === "Engineer") {
            employeeHtml += `
            <div>
                <h3>${employee.getName()}</h3>
                <h4>${employee.getRole()}</h4>
                <ul>
                    <li>ID Number: ${employee.getId()}</li>
                    <li>Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                    <li>GitHub: <a href="https://github.com/${employee.getGithub()}" target="_blank">${employee.getGithub()}</a></li>
                </ul>
            </div>
            `
        }

        // html generated for intern when chosen
        if(employee.getRole() === "Intern") {
            employeeHtml += `
            <div>
                <h3>${employee.getName()}</h3>
                <h4>${employee.getRole()}</h4>
                <ul>
                    <li>ID Number: ${employee.getId()}</li>
                    <li>Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                    <li>School: ${employee.getSchool()}</li>
                </ul>
            </div>
            `
        }

    });

    // html boilerplate filled with additional html for team members based on user input
    const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        ${employeeHtml}
    </body>
    </html>`
    
    return html 
}

module.exports = renderHtml