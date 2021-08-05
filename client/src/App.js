import logo from './logo.svg';
import './App.css';
import Container from './components/Container.js';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
  });

const App = () => <ApolloProvider client={client}>
<Container />
</ApolloProvider>

export default App;
