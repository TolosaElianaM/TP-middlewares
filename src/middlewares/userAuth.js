const userAuth = (req, res, next) => {

    let admins = ['Ada','Greta','Vim','Tim']

    if(req.query && admins.find(admin => admin === req.query.user)){
        res.send('Hola Admin: '+ req.query.user);
    }
    else{
        res.send('No tienes los privilegios para ingresar');
    }

}

module.exports = userAuth;