const express = require('express')
const app = express()
const port = 3000
const fs = require("fs")
const path = require("path");
app.set('views','./views');
app.set('view engine','ejs');

// print the string
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,"./views/home.html"))
})

app.get('/students', (req, res) => {
  res.render("students", {students: [{ name: "Malo Bonnotte", school:"EPF"}, { name: "Harry Potter", school: "Poudlard"}]})
})


// print student informations
app.get('/api/students', (req, res) => {
  res.send([{ name: "Malo Bonnotte", school: "EPF" }, { name: "Harry Potter", school: "Poudlard"}])

})


// print the csv file 
app.get('/csv_webProgramming', (req, res) => {
  fs.readFile('./web_programming_test.csv', 'utf-8', (err, data) =>{
    res.send(data)
    console.log('Data from csv file is load')
  })
})

// print the csv file structured
app.get("/students-csv-parse", (req, res) => {
  const rowSeparator = "\r\n";
  const cellSeparator = ",";
  fs.readFile("./web_programming_test.csv", "utf8", (err, data) => {
    const rows = data.split(rowSeparator);
    const[headerRow, ...contentRows] = rows;
    const header = headerRow.split(cellSeparator);

    const students = contentRows.map((row) => {
      const cells = row.split(cellSeparator);
      const student = {
        [header[0]]: cells[0],
        [header[1]]: cells[1],
      };
      return student;
    });
    res.send(students);
  });
});

app.use(express.json())

app.post("/api/students/create", (req, res) => {
  console.log(req.body);
  const csvLine =`\r\n${req.body.name};${req.body.school}`;
  const stream = fs.writeFile(
  "./web_programming_test.csv",
    csvLine,{ flag: "a"},
    (err) => {
      if (err){
        res.send(err)
      } else{
  res.send("Student created");
  }
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

