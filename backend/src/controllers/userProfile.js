


const getProfile=(req,res)=>{
    res.status(201).json("user profile is obtained")
}

const addProfile=(req,res)=>{
    res.status(201).json("user profile added")
}


const editProfile=(req,res)=>{
    res.status(201).json("user profile is edited")
}

const deleteProfile=(req,res)=>{
    res.status(201).json("user profile deleted")
}

module.exports = {getProfile,addProfile,editProfile,deleteProfile};





