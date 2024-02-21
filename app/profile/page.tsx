import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar"

export default function Profile(){
    let verse=""
    return(
            <div className="flex flex-col justify-between flex-1 h-full">
                <Header verse={verse}/>
                <Footer/>
            </div>

    );
}