var fs = require('fs');


const generate = async (req, res) => {

    try {
        let errors;

        const controllerName = req.params.controllerName; // get controller Name from user as params

        var routeTemplate = fs.readFileSync("api/templates/routeTemplate.txt").toString(); //  read routeTemplate from files
        let tempFile = routeTemplate.replace(/controllerName/g, controllerName); //  edit routeTemplate 

        /**
         * @description generate route file
         */
        fs.writeFile(`api/routes/${controllerName}.js`, tempFile, 'utf8', (err) => {
            if (err)
                errors.routes = err;
            else
                console.log("routeFile : generated");

        });

        var controllerTemplate = fs.readFileSync("api/templates/controllerTemplate.txt").toString(); //  read controllerTemplate from files

        /**
         * @description generate controller file
         */
        fs.writeFile(`api/controllers/${controllerName}.js`, controllerTemplate, 'utf8', (err) => {
            if (err)
                errors.controller = err;
            else
                console.log("controllerFile : generated");
        });

        /**
         * @description update app.js file 
         */
        fs.appendFile('app.js', `\n app.use('/api/${controllerName}' , require('./api/routes/${controllerName}'));`, (err) => {
            if (err)
                errors.appFile = err;
            console.log('app.js updated!');
        });

        // check if errors exited
        if (errors == null) {

            res.status(201).json({
                details: {
                    routeFile: "generated",
                    controllerFile: "generated",
                    appFile: `updated,line app.use('/api/${controllerName}' , require('./api/routes/${controllerName}' append) `
                }
            });
        }else
        res.status(404).json({
            error:errors
        })

    } catch (error) {
        console.log(errors);
    }
};

module.exports = {
    generate
}