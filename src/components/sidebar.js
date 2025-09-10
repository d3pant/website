import './sidebar.css';
export default function Sidebar(){
    return(
        <nav className="Side">
            <div className="left-align">
                <Bttn text="CHK"/>
            </div>
            <div className="right-align">
                <Bttn text="CHK"/>
                <Bttn text="CHK"/>
                <Bttn text="CHK"/>
            </div>
        </nav>
    );
}
function Bttn({text}){
    return(
        <button className='Button'>
        {text}
        </button>
    );
}