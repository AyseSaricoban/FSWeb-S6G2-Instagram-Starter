import React from "react";
import Gonderi from "./Gonderi";
import "./Gonderiler.css";

const Gonderiler = (props) => {
  // 🔥 Gönderiler'in ebeveyninin doğru değişkenleri doğru şekilde ilettiğine emin olun!
  const { gonderiyiBegenFnProp, gonderilerProp } = props;

  return (
    <div className="posts-container-wrapper">
      {/* gönderiler dizisini işleyip her döngüde bir Gönderi bileşeni çağırın*/}
      {gonderilerProp.map((postData, indeks) => {
        console.log(postData);
        return (
          <Gonderi
            key={postData.id} //1. çözüm
            // key={indeks} //2. çözüm key erroru için
            gonderi={postData}
            gonderiyiBegen={gonderiyiBegenFnProp}
          />
        );
      })}

      {/* Gönderi'nin çağırılmasında hangi propları kullanmanız gerektiğine dikkat edin! */}
    </div>
  );
};

export default Gonderiler;
