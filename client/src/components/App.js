import '../styles/App.scss';
import { 
  ApolloProvider, 
  ApolloClient, 
  InMemoryCache,
} from '@apollo/client';
import Launches from './Launches';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Launches />
    </ApolloProvider>
  );
}

export default App;
