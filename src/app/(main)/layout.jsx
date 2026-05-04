import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

const layout = ({children}) => {
    return (
        <div className="main-layout text-mist-800">
            <Navbar />

            <main>
                {children}
            </main>  
            
            <Footer />
        </div>
    );
};

export default layout;