import { Download, Features, SessionWrapper } from "./components";
import assets from './assets';
import styles from "./styles/Global";

const App = () => {
  return (
    <>
      <SessionWrapper 
        title="You own store of Nifty NFTs. Start selling & Growing"
        description="Buy, store, collect NFTS, exchange & earn crypto. Join 25+ million people using ProNef Marketplace."
        showBtn
        mockupImg={assets.homeHero}
        banner='banner'
       />
      <SessionWrapper 
        title="Smart User Interface Marketplace"
        description="Experience a buttery UI of ProNef NFT Marketplace. Smooth constant colors of a fluent UI design"
        mockupImg={assets.homeCards}
        reverse
       />

       <Features />

      <SessionWrapper 
        title="Deployment"
        description="ProNef is built using Expo which runs natively on all user's devices. You can easily get your app into people's hands"
        mockupImg={assets.feature}
        reverse
       />
      <SessionWrapper 
        title="Creative way to showcase the store"
        description="The app contains two screens. The first screen lists all NFTs while the second one shows the details of a specific NFT."
        mockupImg={assets.mockup}
        banner="banner02"
       />

       <Download />

       <div className={`px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04`}>
        <p className={`${styles.pText} ${styles.whiteText}`}>Made with love by {" "}</p>
        <span className="bold">Ravi Gupta</span>
       </div>
    </>
  );
}

export default App;
