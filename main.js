import { Liquid } from "liquidjs";
import { writeFileSync } from "fs"
import { globalVariables } from "./variables.js";

const engine = new Liquid({
    root: "template/",
    extname: ".liquid"
});

const filename = 'README';

const writeToMDFile = (data) => {
    let outputFile = `${filename}.md`;
    writeFileSync(outputFile, data);
}


const variables = {
    ...globalVariables,
    'username': "Harshit"
}

engine.renderFile(filename, variables).then(writeToMDFile);