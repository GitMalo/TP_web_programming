const express = require('express')
const port = 3000
const fs = require("fs")
const path = require("path");
const app = require('express')()
const basicAuth = require('express-basic-auth')
const bcrypt = require("bcrypt");

app.set('views','./views');
app.set('view engine','ejs');
app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const clearPasswordAuthorizer = (username, password, cb) => {
  parseCsvWithHeader("./users.csv", (err, users) => {
    console.log(users);
    const storedUser = users.find((possibleUser) => {
      return basicAuth.safeCompare(username, possibleUser.username);
    });
    if (!storedUser || !basicAuth.safeCompare(password, storedUser.password)) {
      cb(null, false);
    } else {
      cb(null, true);
    }
  });
};

const encryptedPasswordAuthorizer = (username, password, cb) => {
  parseCsvWithHeader("./users.csv", (err, users) => {
    const storedUser = users.find((possibleUser) => {
      return basicAuth.safeCompare(possibleUser.username, username);
    });
    if (!storedUser) {
      cb(null, false);
    } else {
      bcrypt.compare(password, storedUser.password, cb);
    }
  });
};

app.use(basicAuth({
    //users: { 'admin': 'supersecret' },
    //users: { [process.env.ADMIN_USERNAME]: process.env.ADMIN_PASSWORD },
    //authorizer: clearPasswordAuthorizer,
    authorizer: encryptedPasswordAuthorizer,
    authorizeAsync: true,
    challenge: true,
}))

app.post("/api/login", (req, res) => {
  console.log("current cookies:", req.cookies);
  const token = "FOOBAR";
  const tokenCookie = {
    path: "/",
    httpOnly: true,
    expires: new Date(Date.now() + 60 * 60 * 1000),
  };
  res.cookie("auth-token", token, tokenCookie);
  res.send("token setted");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/home.html"));
});

// print the csv file 
app.get('/csv_webProgramming', (req, res) => {
  fs.readFile('./web_programming_test.csv', 'utf-8', (err, data) =>{
    res.send(data)
    console.log('Data from csv file is load')
  })
})

function parseCsvWithHeader(filename, callback) {
    const rowSeparator = "\n";
    const cellSeparator = ",";

    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            callback(err);
            return;
        }

        const rows = data.split(rowSeparator);
        // first row is a header I isolate it
        const [headerRow, ...contentRows] = rows;
        const header = headerRow.split(cellSeparator);

        const users = contentRows.map((row) => {
            const cells = row.split(cellSeparator);
            const user = {
                [header[0]]: cells[0],
                [header[1]]: cells[1],
            };
            return user;
        });

        callback(null, users);
        //console.log(users)
    });
}


app.get("/students/create", (req, res) => {
  res.render("create-student");
});

const getStudentsFromCsvfile = (cb) => {
  parseCsvWithHeader("./web_programming_test.csv", cb);
};

const storeStudentInCsvFile = (student, cb) => {
    const csvLine = `\n${student.name},${student.school}`;
    console.log(csvLine);
    fs.writeFile("./web_programming_test.csv", csvLine, { flag: "a" }, (err) => {
      cb(err, "ok");
    });
  };
  
app.get("/students", (req, res) => {
  getStudentsFromCsvfile((err, students) => {
    if (err) {
      console.error(err);
      res.send("ERROR");
    }
    res.render("students", {
      students,
    });
  });
}); 

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

