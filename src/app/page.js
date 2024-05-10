import Image from "next/image";

export default function Home() {
 
 
  return (
           <div>
                <div className="block1">
                    <div className="sideblock1"><img src="./img/rainbow.gif" style={{ width: '100%', height: '100%' }} /></div>
                    <img style={{ width: '50vw', height: '50vw' }} src="" id="pfp" />
                    <div className="sideblock">
                        Your
                        <br />
                        2024
                        <br />
                        Qwrap
                    </div>
                </div>
    
                <div id="json"></div>
    
                <div className="block2">
                    <div className="container">
                        <h1 id="username">......</h1>
                    </div>
    
                    <div className="buttonparent">
                        <hr className="dashed-divider" />
                        <button className="button1" id="newwrapButton">New wrap</button>
                    </div>
                </div>
            </div>
        );
}
