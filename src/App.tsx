import { FC } from "react";
import "semantic-ui-css/semantic.min.css";
import { Container, Input, List, Segment } from "semantic-ui-react";
import "./App.css";

const App: FC = () => {
  return (
    <div className="App">
      <Container text>
        <Segment>
          <Input placeholder="search" />
          <List
            divided
            items={[
              { header: "Title 1", content: "Content 1" },
              { header: "Title 2", content: "Content 2" },
            ]}
          />
        </Segment>
      </Container>
    </div>
  );
};

export default App;
