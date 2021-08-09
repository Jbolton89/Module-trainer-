import logo from './logo.svg';
import './App.css';
import Container from './components/Container.js';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// import Home from './pages/Home';
// import Signup from './pages/Signup';
// import Signout from './pages/signout'
// import Login from './pages/Login';
// import Biology from './pages/biology';
// import Physics from './pages/physics'; 
// import Chemistry from './pages/physics'
// import Dashboard from './pages/dashboard';
// import Navbar from './components/navbar';
// import Footer from './pages/footer';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

const App = () => <ApolloProvider client={client}>
<Container />
</ApolloProvider>

export default App;
