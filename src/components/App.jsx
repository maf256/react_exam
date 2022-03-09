import Form from './Form'
import styled from 'styled-components'
import UserList from './UserList';


export default function App(props) {
  return (
    <AppSection>
      <Form />
      <UserList />
    </AppSection>

  );
}

const AppSection = styled.section`
  margin: 0 auto;
  max-width: 800px;
`