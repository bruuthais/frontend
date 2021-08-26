import {useState} from "react";
import Swal from "sweetalert2";
import {ToastContainer, toast} from "react-toastify";
import api from "../../../../api/api";
import {NavBarRestaurant} from "../../../../utils/navbar/restaurant-navbar/NavBarRestaurant";
import "./style.scss";

export function ProfilePictureRestaurant() {
  const [logo, setLogo] = useState("");
  const [banner, setBanner] = useState("");

  async function uploadImage(e: any) {
    e.preventDefault();
    await api
      .post(`/api/Restaurant/images`, {
        logoUrl: logo,
        bannerUrl: banner,
      })
      .then(function (resposta) {
        Swal.fire({
          timer: 2800,
          showConfirmButton: false,
          icon: "success",
          text: "As imagens foram alteradas",
        });
      })
      .catch(function (error) {
        toast.error("Ocorreu um problema, tente novamente.");
      });
  }

  return (
    <div className="page-profile-restaurant">
      <NavBarRestaurant />
      <main>
        <div className="profile-restaurant-content">
          <form className="form-profile-restaurant">
            <h3 className="h3-profile-restaurant">Adicionar Logo e Banner</h3>
            <div className="profile-restaurant">
              <p className="p-form-profile">Logo:</p>
              <input
                type="text"
                className="input-img-restaurant"
                placeholder="insira a url da logo"
                required
                value={logo}
                onChange={(e) => setLogo(e.target.value)}
              />

              <p className="p-form-profile">Banner:</p>
              <input
                type="text"
                required
                className="input-img-restaurant"
                placeholder="insira a url do banner"
                value={banner}
                onChange={(e) => setBanner(e.target.value)}
              />
            </div>
            <div className="profile-adress-restaurant"></div>

            <button className="button-profile-restaurant" onClick={uploadImage}>
              adicionar
            </button>
          </form>
        </div>
      </main>
      <ToastContainer />
    </div>
  );
}
