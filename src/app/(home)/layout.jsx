import Footer from "@/components/shared/Footer";

const layout = ({children}) => {
    return (
        <div>
            
            <main className="">
                {children}
            </main>  
            
            <Footer />

        </div>
    );
};

export default layout;