import React from 'react';
import "../css/Form.css";
import tgcf from "../img/天官赐福——.png";
import jy from "../img/解药——.png";
import rz from "../img/人渣——.jpg";
import sy from "../img//撒野.jpg";
import mdzs from "../img/魔道祖师——.jpg"
import nh from "../img/难哄 _.jpg";

export default function Form() {
  return (
    <div className="wrap">
        <div className="row1">
            <div className="colm1" >
                <img className="img" src={tgcf} alt="tianguancifu" style={{width: 300, display: 'block', cursor: 'pointer'}} />
                <p className="name">天官赐福 - TianGuanCiFu</p>
                <button className="btn">Watch</button>
            </div>          
            <div className="colm2">
                <img className="img" src={jy} alt="jieyao" style={{width: 300, display: 'block', cursor: 'pointer'}}/>
                <p className="name">解药 - JieYao</p>
                <button className="btn">Watch</button>
            </div>
        </div> 
        <div className="row3">
            <div className="colm5">
                <img className="img" src={mdzs} alt="modaozushi" style={{width: 300, display: 'block', cursor: 'pointer'}} />
                <p className="name">魔道祖师 - MoDaoZuShi</p>
                <button className="btn">Watch</button>
            </div>
            <div className="colm6">
                <img className="img" src={nh} alt="nanhong" style={{width: 300, display: 'block', cursor: 'pointer'}} />
                <p className="name">难哄 - NanHong</p>
                <button className="btn">Watch</button>
            </div>
        </div>
        <div className="row2">
            <div className="colm3">
                <img className="img" src={rz} alt="zenzhafanpaozijijiuxitong" style={{width: 300, display: 'block', cursor: 'pointer'}}/>
                <p className="name_rz">人渣反派自救系统 - RenZhaFanPaoZiJiuXiTong</p>
                <button className="btn">Watch</button>
            </div>
            <div className="colm4">
                <img className="img" src={sy} alt="saye" style={{width: 300, display: 'block', cursor: 'pointer'}}/>
                <p className="name_rz">撒野 - SaYe</p>
                <button className="btn">Watch</button>
            </div>
        </div>
    </div>
  )
}
