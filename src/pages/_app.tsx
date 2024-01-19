import '@/styles/index.css';
import { AppProps } from 'next/app';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
      <div className="abc">
        <Component {...pageProps} />
      </div>
  )
};

export default App;
