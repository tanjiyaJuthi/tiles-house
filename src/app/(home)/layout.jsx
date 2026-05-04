import Footer from "@/components/shared/Footer";

const layout = ({children}) => {
    return (
        <div>
            
            <main className="text-mist-800">
                {children}
            </main>  
            
            <Footer />

        </div>
    );
};

export default layout;