const sandbox = require('./sandbox');
let main = "https://sandbox.primetrust.com";

// sandbox.post(main + "/v2/users", {
    // "data" : {
    //     "type" : "user", 
    //     "attributes" : {
    //         "email" : "ab@gmail.com",
    //         "name" : "tharun a",
    //         "password" : "Qwerty123@"
    //     }
    // }
// }, function(data) {
//     console.log(data);
// });

// sandbox.getuser(main + "/auth/jwts", {}, function(data) {
//     console.log(data);
// });

sandbox.get(main + "/auth/current",  function(data) {
    console.log(data);
});

// sandbox.post(main + "/v2/accounts", {
//     "data" : {
//         "type" : "account",
//         "attributes" : {
//             "account-type" : "custodial",
//             "name" : "John Doe's Account",
//             "authorized-signature" : "John James Doe",
//             "owner" : {
//                         "contact-type" : "natural_person",
//                         "name" : "John James Doe",
//                         "email" : "john@email.in",
//                         "tax-id-number" : "123123123",
//                         "tax-country" : "US",
//                         "date-of-birth" : "1980-06-09",
//                         "sex" : "male",
//                         "primary-phone-number" : {
//                             "country" : "US",
//                             "number" : "1231231231",
//                             "sms" : true
//                         },
//                         "primary-address" : {
//                             "street-1" : "123 MK Road",
//                             "street-2" : "Flat 3",
//                             "postal-code" : "89145",
//                             "city" : "Las Vegas",
//                             "region" : "NV",
//                             "country" : "US"
//                         }
//                     }
//         }
//     }
// }, function(data) {
//     console.log(data);
// });

