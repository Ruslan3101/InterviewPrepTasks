const axios = require("axios");

function request(url, success, error) {
  axios
    .get(url)
    .then((res) => {
      if (res.status !== 200) {
        return error(new Error(res.statusText));
      } else {
        const result = res.data.data[0];
        success(result);
      }
    })
    //  if we need to send default error
    // .catch(err => {
    // error(err)

    .catch(() => {
      const err = new Error("Failed request");
      error(err);
    });
}
// we wanna make 3 requests, where every next one depends on a previous
// 1. https://fakerapi.it/api/v1/addresses?_quantity=1
// 2. https://fakerapi.it/api/v1/custom?_quantity=1&city=city&streetName=streetName
// 3. https://fakerapi.it/api/v1/custom?_quantity=1&phone=phone&

function newGetInfo() {
  return new Promise((res, rej) => {
    request("https://fakerapi.it/api/v1/addresses?_quantity=1", res, rej);
  });
}

newGetInfo()
  .then((result) => {
    console.log(result);

    return new Promise((res, rej) => {
      request(
        "https://fakerapi.it/api/v1/custom?_quantity=1&city=city&streetName=streetName",
        res,
        rej
      );
    });
  })
  .then((result2) => {
    console.log(result2);

    return new Promise((res, rej) => {
      request(
        "https://fakerapi.it/api/v1/custom?_quantity=1&phone=phone&",
        res,
        rej
      );
    });
  })
  .then((result3) => {
    console.log(result3);
  })
  .catch((err) => {
    console.error(err);
  });
// function getInfo() {
//   request(
//     "https://fakerapi.it/api/v1/addresses?_quantity=1",
//     (result) => {
//       console.log(result);
//       request(
//         "https://fakerapi.it/api/v1/custom?_quantity=1&city=city&streetName=streetName",
//         (result2) => {
//           console.log(result2);

//           request(
//             "https://fakerapi.it/api/v1/custom?_quantity=1&phone=phone&",
//             (result3) => {
//               console.log(result3);
//             },
//             (err3) => {
//               console.error(err3);
//             }
//           );
//         },
//         (err2) => {
//           console.error(err2);
//         }
//       );
//     },
//     (err) => {
//       console.error(err);
//     }
//   );
// }

// getInfo();
