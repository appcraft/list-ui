import { FC } from "react";
import "semantic-ui-css/semantic.min.css";
import { Container, Input, Header, List, Segment, Dropdown, Menu, Icon } from "semantic-ui-react";
import "./App.css";

// Semantic-UI Documentation : https://react.semantic-ui.com/
// Lodash Documentation : https://lodash.com/docs/4.17.15

const orderOptions = [{ key: "lastName", value: "lastName", text: "Nom" }, { key: "firstName", value: "firstName", text: "Prénom" }, { key: "company", value: "company", text: "Société" }]
const groupByOptions = [{ key: "", value: "", text: "Pas de groupe" }, { key: "company", value: "company", text: "Société" }, { key: "jobTitle", value: "jobTitle", text: "Entreprise" }]

const App: FC = () => {
  const handleFilterChange = (_e: any, { value }: { value: string }) => { }

  const handleOrderChange = (_e: any, { value }: { value?: any }) => { }

  const handleGroupByChange = (_e: any, { value }: { value?: any }) => { }

  return (
    <div className="App">
      <Container text>
        <Header> AppCraft List UI</Header>
        <Menu>
          <Menu.Item>
            <Input placeholder="Chercher" onChange={handleFilterChange} icon="search" />
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item >
              <Icon name='sort alphabet down' />
              <Dropdown placeholder="Trier par" options={orderOptions} onChange={handleOrderChange} 
              />
            </Menu.Item>
            <Menu.Item >
              <Icon name='object group' />
              <Dropdown placeholder="Grouper par" options={groupByOptions} onChange={handleGroupByChange}  />
            </Menu.Item>
          </Menu.Menu>
        </Menu>

        <Segment>
          <List
            divided
            items={[
              { header: "John Doe", content: "AppCraft" },
              { header: "Marie Doe", content: "No Name Company" },
            ]}
          />
        </Segment>
      </Container>
    </div>
  );
};

export default App;
