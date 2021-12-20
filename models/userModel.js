class User{
    constructor(lastname, firstname) {
        this.lastname = lastname;
        this.firstname = firstname;
    }
}

class Formation{
    constructor(idformation, Nom, Prix, Debut, Fin){
        this.idformation = idformation;
        this.Nom = Nom;
        this.Prix = Prix;
        this.Debut = Debut;
        this.Fin = Fin;
    }
}
module.exports = Formation;
module.exports = User;