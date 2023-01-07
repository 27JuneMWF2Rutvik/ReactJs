import React from "react";
import CustomCard from "./CompoForCard";
import prod4 from "./prod4.webp";
const PropsInClassCompo = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-3 col-md-4 col-sm-6">
          <CustomCard
            prodTitle="OnePlus Bullets 
          Z2 Bluetooth Wireless in Ear Earphones with Mi"
            imgSrc="https://mdbootstrap.com/img/new/standard/nature/184.webp"/>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <CustomCard
            prodTitle="OnePlus Nord 
          Buds True Wireless in Ear Earbuds with Mic, 12.4mm"
            imgSrc="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/31pAe23ncfL._AC_SR400,600_.jpg" />
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <CustomCard
            prodTitle="Jabra Talk 25
          SE Mono Bluetooth Wireless in Ear Earphones, Wireless"
            imgSrc={process.env.PUBLIC_URL + "/prod3.webp"}/>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <CustomCard
            prodTitle="Jabra Talk 5 
          Bluetooth Headset - Black"
            imgSrc={prod4}/>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <CustomCard
            prodTitle="Jabra Elite 7 
          Active in-Ear Bluetooth True Wireless Waterproof"
            imgSrc={window.location.origin + "/prod3.webp"}/>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <CustomCard
            prodTitle="Jabra Talk 65 
          Mono Bluetooth Wireless in Ear Premium Wireless"
            imgSrc="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/31YS7kV0scL._AC_SR400,600_.jpg"/>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <CustomCard
            prodTitle="Oppo Enco Air 2 
          Bluetooth Truly Wireless in Ear Earbuds with Mic,"
            imgSrc="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/314vZxOio5L._AC_SR400,600_.jpg"/>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <CustomCard
            prodTitle="Oppo Enco X2 with 
          Active Noise Cancellation, Triple Mic for Better"
            imgSrc="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/31wIr9DO-mL._AC_SR400,600_.jpg"/>
        </div>
      </div>
      {/* <div className="card">
            <div className="card-header">Something</div>
            <div className="card-body">Something</div>
        </div> */}
    </>
  );
};

export default PropsInClassCompo;
