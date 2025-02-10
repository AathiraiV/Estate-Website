// /c:/Users/mkniv/OneDrive/Desktop/ESTATE-SITE/Estate-Website/api/controllers/test.controller.js

export const shouldBeLoggedIn = (req, res) => {
    // Example logic to check if the user is logged in
    if (req.user) {
        res.status(200).send("User is logged in");
    } else {
        res.status(401).send("User is not logged in");
    }
};

export const shouldBeAdmin = (req, res) => {
    // Example logic to check if the user is an admin
    if (req.user && req.user.role === 'admin') {
        res.status(200).send("User is an admin");
    } else {
        res.status(403).send("User is not an admin");
    }
};