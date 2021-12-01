// ./middlewares/route-guard.js

// ÁREAS PRIVADAS - EL USUARIO DEBE ESTAR LOGGEADO PARA ACCEDER
const usuarioLoggeado = (req, res, next) => {
    if(!req.session.currentUser){
    res.redirect("/login")
    return
}

next()

}

// ÁREAS DE AUTENTICACIÓN - EL USUARIO YA SE AUTENTICÓ Y QUIERE ENTRAR A LAS ÁREAS DE SIGNUP Y LOGIN. POR LO TANTO LO REDIRIGIMOS AL HOME
const usuarioNoLoggeado = (req, res, next) => {

if(req.session.currentUser){
    return res.redirect("/")
}

next()
}

module.exports = {
usuarioLoggeado,
usuarioNoLoggeado
}