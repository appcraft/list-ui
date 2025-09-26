/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react';
import { useQuery } from 'react-query';
import 'semantic-ui-css/semantic.min.css';
import { Button, Container, Dropdown, Header, Icon, Input, List, Menu, Segment } from 'semantic-ui-react';
import './App.css';

// Semantic-UI Documentation : https://react.semantic-ui.com/
// Lodash Documentation : https://lodash.com/docs/4.17.15

const userEndpointApi = 'http://localhost:4000/';

const orderOptions = [
  { key: 'lastName', value: 'lastName', text: 'Nom' },
  { key: 'firstName', value: 'firstName', text: 'Prénom' },
  { key: 'company', value: 'company', text: 'Société' },
];

const App: FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data } = useQuery({
    queryKey: ['users'],
    queryFn: () => fetch(userEndpointApi).then((res) => res.text()),
  });

  const handleFilterChange = (_e: any, { value }: { value: string }) => {
    console.log('filter', value);
  };

  const handleOrderChange = (_e: any, { value }: { value?: any }) => {
    console.log('order', value);
  };

  const handleAdd = () => {};

  return (
    <div className="App">
      <Container text>
        <Header>AppCraft List UI</Header>
        <Menu>
          <Menu.Item>
            <Input placeholder="Chercher" onChange={handleFilterChange} icon="search" />
          </Menu.Item>
          <Menu.Item>
            <Icon name="sort alphabet down" />
            <Dropdown placeholder="Trier par" options={orderOptions} onChange={handleOrderChange} />
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              <Button onClick={handleAdd}>Ajouter</Button>
            </Menu.Item>
          </Menu.Menu>
        </Menu>

        <Segment>
          <List
            divided
            items={[
              { header: 'John Doe', content: 'AppCraft' },
              { header: 'Marie Doe', content: 'No Name Company' },
            ]}
          />
        </Segment>
      </Container>
      {/* <AddModal /> */}
    </div>
  );
};

export default App;
