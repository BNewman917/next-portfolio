import Theme from "../styles/theme";
import { StateContext } from "../context/StateContext";

function App({ Component, pageProps }) {
    return (
        <StateContext>
            <Theme>
                <Component {...pageProps} />
            </Theme>
        </StateContext>
    );
}

export default App;
