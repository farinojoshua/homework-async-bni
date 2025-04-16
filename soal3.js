const fs = require("fs");

fs.readFile("./data.json", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  }

  let users = JSON.parse(data);

  const newUser = {
    id: users.length + 1,
    first_name: "Farino",
    last_name: "Joshua",
    email: "farino@example.com",
    gender: "Male",
  };

  users.push(newUser);

  const newJson = JSON.stringify(newUser, null, 2);

  fs.writeFile("./data.json", newJson, (err) => {
    if (err) {
      console.log("gagal");
    } else {
      console.log("success");
    }
  });
});
