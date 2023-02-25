const renderHtml = (employees) => {
    // string will be filled with html for each chosen team member
    let employeeHtml = ""
    employees.forEach(employee => {
        // html generated for manager when chosen
        if(employee.getRole() === "Manager") {
            employeeHtml += `
            <div class="card m-4 text-center shadow-lg" style="width: 18rem;">
                <div class="card-body bg-warning">
                    <h2 class="card-title">${employee.getName()}</h2>
                    <h3 class="card-title fst-italic">${employee.getRole()}</h3>
                </div>
                <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID Number: ${employee.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                        <li class="list-group-item">Office Number: ${employee.getOfficeNumber()}</li>
                </ul>
            </div>
            `
        }

        // html generated for engineer when chosen
        if(employee.getRole() === "Engineer") {
            employeeHtml += `
            <div class="card m-4 text-center shadow-lg" style="width: 18rem;">
                <div class="card-body bg-warning">
                    <h2 class="card-title">${employee.getName()}</h2>
                    <h3 class="card-title fst-italic">${employee.getRole()}</h3>
                </div>
                <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID Number: ${employee.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                        <li class="list-group-item">GitHub: <a href="https://github.com/${employee.getGithub()}" target="_blank">${employee.getGithub()}</a></li>
                </ul>
            </div>
            `
        }

        // html generated for intern when chosen
        if(employee.getRole() === "Intern") {
            employeeHtml += `
            <div class="card m-4 text-center shadow-lg" style="width: 18rem;">
                <div class="card-body bg-warning">
                    <h2 class="card-title">${employee.getName()}</h2>
                    <h3 class="card-title fst-italic">${employee.getRole()}</h3>
                </div>
                <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID Number: ${employee.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                        <li class="list-group-item">School: ${employee.getSchool()}</li>
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
        <title>Software Dev Team</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
        <link href="./style.css" rel="stylesheet">
  </head>
    </head>
    <body>
        <h1 class="header pb-3">Dev Team</h1>
        <div class="d-flex flex-wrap justify-content-center">
        ${employeeHtml}
        </div>
    </body>
    </html>`
    
    return html 
}

module.exports = renderHtml