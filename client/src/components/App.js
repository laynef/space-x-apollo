import '../styles/App.scss';
import { 
  ApolloProvider, 
  ApolloClient, 
  InMemoryCache,
} from '@apollo/client';
import Rockets from './Rockets';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Rockets />
    </ApolloProvider>
  );
}

export default App;
