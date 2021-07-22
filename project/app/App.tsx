import React, { useMemo } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { Container } from 'reactstrap';
import Spaces from '@availity/spaces';
import PageHeader from '@availity/page-header';
import qs from 'query-string';
// import { avUserApi } from '@availity/api-axios';
import { Request, Response } from './areas';
import { Footer } from './shared';


const App = (): JSX.Element => {
  const { search } = useLocation();

  const spaceId = useMemo(() => qs.parse(search).spaceId, [search]);
  // const [name, setName] = useState(''); // initialize state

//   const fetchData = async () => {
//       const user = await avUserApi.me(); // Request current user

//      // setName(user.firstName); // set the name to state
//   };

//   // Fetch the user on component mount
//   useEffect(() => {
//     fetchData();
// }, []);


  return (
    <>
      <Spaces spaceIds={[spaceId]} clientId="test">
        <Container id="app-container">
          <PageHeader spaceId={spaceId} appName="Appeal Request Form" />
          <Switch>
            <Route exact path="/">
              <Request />
            </Route>
            <Route path="/response">
              <Response />
            </Route>
          </Switch>
          <Footer />
        </Container>
      </Spaces>
    </>
  );
};

export default App;
