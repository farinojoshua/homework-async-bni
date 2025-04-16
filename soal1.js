const userDB = {
  username: "farino",
  password: "123",
  role: "admin",
};

function loginUser(inputUsername, inputPassword, callback) {
  setTimeout(() => {
    let user = userDB;
    if (inputUsername === user.username && inputPassword === user.password) {
      callback(user);
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

loginUser("farino", "123", function (user) {
  getRole(user, function (role) {
    getMenu(role, function (hello) {
      console.log(hello);
    });
  });
});
