const mySqlConnection = require('../connection')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const adminLogin = async (req, res) => {
   try {
      const data = req.body
      const { email, password } = data

      let slqQuery = `SELECT * FROM admin WHERE email = ${ mySqlConnection.escape(email)};`

      mySqlConnection.query(slqQuery, (err, result) => {
         if (err) throw err;
         console.log(err)
         if (!result.length) {
            return res.status(400).send({
               msg: err
            });
         }
         bcrypt.compare(
            password,
            result[0]['password'],
            (bErr, bResult) => {
               // wrong password
               if (bErr) {
                  console.log(bErr)
                  // throw bErr;
                  return res.status(401).send({
                  msg: 'Email or password is incorrect!'
                  });
               }
               if (bResult) {
                  const token = jwt.sign({ id: result[0].id }, 'the-super-strong-secrect-key-e_visa', { expiresIn: '24h' }); 
                  mySqlConnection.query(
                     `UPDATE admin SET last_login = now() WHERE id = '${result[0].id}'`
                  );
                  return res.status(200).send({
                     msg: 'Logged in!',
                     token,
                     admin: result[0]
                  });
               }
               return res.status(401).send({
                  msg: 'Username or password is incorrect!'
               });
            }
         );
      }
      );

      // return res.status(200).send({ msg: "Login Successful", data: result });

      

   } catch (error) {
   console.log(error)
   res.status(500).send({
      status: false,
      msg: error.message
   })
}
   }

// router.post('/login', loginValidation, (req, res, next) => {
//    db.query(
//       `SELECT * FROM users WHERE email = ${db.escape(req.body.email)};`,
//       (err, result) => {
//          // user does not exists
//          if (err) {
//             throw err;
//             return res.status(400).send({
//                msg: err
//             });
//          }
//          if (!result.length) {
//             return res.status(401).send({
//                msg: 'Email or password is incorrect!'
//             });
//          }
//          // check password
//          bcrypt.compare(
//             req.body.password,
//             result[0]['password'],
//             (bErr, bResult) => {
//                // wrong password
//                if (bErr) {
//                   throw bErr;
//                   return res.status(401).send({
//                      msg: 'Email or password is incorrect!'
//                   });
//                }
//                if (bResult) {
//                   const token = jwt.sign({ id: result[0].id }, 'the-super-strong-secrect', { expiresIn: '24h' });
//                   db.query(
//                      `UPDATE users SET last_login = now() WHERE id = '${result[0].id}'`
//                   );
//                   return res.status(200).send({
//                      msg: 'Logged in!',
//                      token,
//                      user: result[0]
//                   });
//                }
//                return res.status(401).send({
//                   msg: 'Username or password is incorrect!'
//                });
//             }
//          );
//       }
//    );
// });

module.exports = { adminLogin }


