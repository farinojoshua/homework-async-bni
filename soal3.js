const fs = require("fs");

fs.readFile("./data.json", "utf-8", (err, data) => {
  if (err) {
    console.log("Gagal baca file:", err);
    return;
  }

  let users = JSON.parse(data);

  users[0].first_name = "Farino";
  users[0].last_name = "Joshua";

  let updateJSON = JSON.stringify(users, null, 2);

  fs.writeFile("./data.json", updateJSON, (err) => {
    if (err) {
      console.log("Gagal simpan file:", err);
    } else {
      console.log("Nama berhasil diubah!");
    }
  });
});
