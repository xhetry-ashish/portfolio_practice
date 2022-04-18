const  Profile  = require("../models/profile");

const getProfile = (req, res) => {
  res.status(201).json("user profile is obtained");
};

const addProfile = async (req, res) => {
  let profiledata = new Profile({
    name: req.body.name,
    profileRole: req.body.profileRole,
    profileTagline: req.body.profileTagline,
    facebookLink: req.body.facebookLink,
    instagramLink: req.body.instagramLink,
    githubLink: req.body.githubLink,
    linkedinLink: req.body.linkedinLink,
  });

  profiledata = await profiledata.save();
  if (!profiledata) {
    res.status(500).json({
      success: false,
      message: "Profile cannot be created..",
    });
  }

  res.status(200).send(profiledata);
};

const editProfile = (req, res) => {
  res.status(201).json("user profile is edited");
};

const deleteProfile = (req, res) => {
  res.status(201).json("user profile deleted");
};

module.exports = { getProfile, addProfile, editProfile, deleteProfile };
