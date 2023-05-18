const express = require('express')
const app = express()
const port = 3000
const fs = require("fs")
const path = require("path");
app.set('views','./views');
app.set('view engine','ejs');
app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// print the string
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,"./views/home.html"))
})

app.get('/students', (req, res) => {
  res.render("students", {students: [{ name: "Malo Bonnotte", school:"EPF"}, { name: "Harry Potter", school: "Poudlard"}]})
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


app.get("/students/create", (req, res) => {
  res.render("create-student");
});

const storeStudentInCsvFile = (student, cb) => {
    const csvLine = `\n${student.name};${student.school}`;
    console.log(csvLine);
    fs.writeFile("./web_programming_test.csv", csvLine, { flag: "a" }, (err) => {
      cb(err, "ok");
    });
  };

app.post("/students/create", (req, res) => {
    console.log(req.body);
    const student = req.body;
    storeStudentInCsvFile(student, (err, storeResult) => {
      if (err) {
        res.redirect("/students/create?error=1");
      } else {
        res.redirect("/students/create?created=1");
      }
    });
  });
  
app.get("/api/students", (req, res) => {
    getStudentsFromCsvfile((err, students) => {
      res.send(students);
    });
  });
  
  app.post("/api/students/create", (req, res) => {
    console.log(req.body);
    const student = req.body;
    storeStudentInCsvFile(student, (err, storeResult) => {
      if (err) {
        res.status(500).send("error");
      } else {
        res.send("ok");
      }
    });
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

