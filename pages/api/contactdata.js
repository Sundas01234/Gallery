function contactdata(req, res) {
  const body = req.body
  console.log('body: ', body)

  if (!body.first || !body.last) {
    return res.status(400).json({ data: 'First or last name not found' })
  }
 
  
  var fs = require('fs');
  const prettier = require("prettier");

  fs.writeFileSync(
    './json/users.json',
    prettier.format(JSON.stringify(body), { parser: "json" })

  );

  async function read(req, res) {
    const jsonDirectory = path.join(process.cwd(), 'json');
    const fileContents = await fs.readFile(jsonDirectory + './json/users.json', 'utf8');
    res.status(200).json(fileContents);

    var feed = {body};

    var data = [];
    data.push(feed);
    
    console.log(data);


    res.status(200).json({ data: `${body.first} ${body.last}` })
  }
}
export default (contactdata)

