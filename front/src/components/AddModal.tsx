/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSetState } from 'react-use';
import { Button, Form, Modal } from 'semantic-ui-react';

const AddModal = () => {
  const [data, setData] = useSetState({ firstName: '', lastName: '', email: '', company: '', jobTitle: '' });

  const handleChange = (_e: any, { name, value }: any) => {
    setData({ [name]: value });
  };

  return (
    <Modal open>
      <Modal.Header>Ajouter un utilisateur</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Input name="firstName" label="Prénom" onChange={handleChange} value={data.firstName} />
          <Form.Input name="lastName" label="Nom" onChange={handleChange} value={data.lastName} />
          <Form.Input name="email" label="Email" onChange={handleChange} value={data.email} />
          <Form.Input name="company" label="Société" onChange={handleChange} value={data.company} />
          <Form.Input name="jobTitle" label="Fonction" onChange={handleChange} value={data.jobTitle} />
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button>Annuler</Button>
        <Button primary>Ajouter</Button>
      </Modal.Actions>
    </Modal>
  );
};

export default AddModal;
