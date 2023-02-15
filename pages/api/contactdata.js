import { promises as fs } from 'fs';
import path from 'path';
var fswrite = require('fs');
const prettier = require("prettier");

async function contactdata(req, res) {
  const body = req.body
  if (!body.name || !body.email) {
    // Sends a HTTP bad request error code
    return res.status(400).json({ data: 'First or last name not found' })
  }
 
    

  // Reading existing file
  var jsonBody = JSON.stringify(body)
  const jsonDirectory = path.join(process.cwd(), 'json');
  const fileContents = await fs.readFile(jsonDirectory + '/users.json', 'utf8');
  var fileJson = JSON.parse(fileContents);
  // Appending new data to the object
  fileJson.push(body)

  // after appending the new data writing it back.
  fswrite.writeFileSync(
    './json/users.json',
    prettier.format(JSON.stringify(fileJson), { parser: "json" })

  );

  res.status(200).json({ data: `${body.name} ${body.email}` })
}

export default (contactdata)

