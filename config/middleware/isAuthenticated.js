// This is middleware for restricting routes a user is not allowed to visit if not logged in
module.exports = function (req, res, next) {
  // If the user is logged in, continue with the request to the restricted route
  if (req.user) {
    console.log("logged in");
    return next();
  }

  // If the user isn't logged in, redirect them to the login page
  console.log("not logged in");
  return res.status(401).json(false);
  // return res.status(401).json({
  //   errors: [
  //     {
  //       msg: "Not logged in",
  //     },
  //   ],
  // });
};
