const axios = require("axios");

async function hitApi() {
  try {
    let hitData = await axios({
      method: "get",
      url: "https://jsonplaceholder.typicode.com/users",
      responseType: "json",
    });

    console.log(hitData.data);
  } catch (error) {
    console.log(error);
  }
}

hitApi();
