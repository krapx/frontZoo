import "./profile.css"
import {Header} from "../shared/header/header";
import {Button} from "@mui/material";

export const Profile = () => {
    const response = {
        pseudo: "krapx",
        prenom: "ahmedine",
        nom: "ben",
        adresse: "drancy",
        role: "admin",
    }

    return (
        <>
            <Header/>

            <div className="profile">
                <form className="profile__form">
                    <h2 className="profile__title">INFORMATIONS</h2>
                    <div className="profile__props">
                        <span className="profile__subtitle">pseudo :</span>
                        {response.pseudo}
                    </div>
                    <div className="profile__props">
                        <span className="profile__subtitle">prenom :</span>
                        {response.prenom}
                    </div>
                    <div className="profile__props">
                        <span className="profile__subtitle">nom :</span>
                        {response.nom}
                    </div>
                    <div className="profile__props">
                        <span className="profile__subtitle">adresse :</span>
                        {response.adresse}
                    </div>
                    <div className="profile__props">
                        <span className="profile__subtitle">role :</span>
                        {response.role}
                    </div>
                </form>
            </div>

        </>
    );
}


/*
  String getLastname();

  String getFirstname();

  String getLogin();

  UserId getUserId();

  Address getAddress();

  UserRole getUserRole();

  String getMail();
*/