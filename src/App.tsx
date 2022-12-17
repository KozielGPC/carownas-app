import './global.css';
import Routes from './routes';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
    return (
        <div className="App">
            <QueryClientProvider client={queryClient}>
                <Routes />
            </QueryClientProvider>
        </div>
    );
}

export default App;
