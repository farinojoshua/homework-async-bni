const userDB = {
  username: "joko",
  password: "rahasia",
  role: "admin",
};

function loginUser(inputUsername, inputPassword, callback) {
  setTimeout(() => {
    let user = userDB;
    if (inputUsername === user.username && inputPassword === user.password) {
      callback(user);
    } else {
      console.log("username atau password salah");
    }
  }, 500);
}

function getRole(user, callback) {
  setTimeout(() => {
    let userRole = user.role;
    callback(userRole);
  }, 500);
}

function getMenu(role, callback) {
  setTimeout(() => {
    if (role === "admin") {
      callback("dashboard admin");
    } else {
      callback("dashboard");
    }
  }, 500);
}

loginUser("joko", "rahasia", function (user) {
  getRole(user, function (role) {
    getMenu(role, function (text) {
      console.log(text);
    });
  });
});
