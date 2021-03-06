import { GetServerSideProps } from 'next';
import { Fragment, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { membersAdapter } from '../../adapters/members.adapter';
import { Layout } from '@/components/layout/layout';
import { createMemberList } from '../../redux/states/members';
import { SearchMember } from './components/searchMember';
import { RegisterForm } from './components/registerForm';
import getMembers from '@/services/public.services';
import { Container } from '@/components/ui';

const Register = (props: { props: any }) => {
  const [showSearchMembers, setShowSearchMembers] = useState(true);
  const [setMemberSelect, setSetMemberSelect] = useState({});
  const [values, setValues] = useState({
    search: '',
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(createMemberList(props));
  }, []);

  const inputChange = ({ target }: any) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  return (
    <Layout>
      <Container>
        <div className="register">
          {showSearchMembers && (
            <Fragment>
              <h1>Encuentra tu tag</h1>
              <p>
                Antes de continuar con el registro por favor introduce tu nombre
                en el juego.
              </p>
              <p>Selecciona un usuario de la lista para registrarlo.</p>
              <input
                name="search"
                placeholder="Ingresa tu nombre del juego"
                onChange={inputChange}
              />
            </Fragment>
          )}
          {!showSearchMembers && (
            <Fragment>
              <RegisterForm user={setMemberSelect} />
            </Fragment>
          )}
          <section>
            {values.search !== '' && showSearchMembers && (
              <SearchMember
                memberSearch={values.search}
                hideComponent={setShowSearchMembers}
                setMemberSelect={setSetMemberSelect}
              />
            )}
            {}
          </section>
        </div>
      </Container>
    </Layout>
  );
};

export default Register;

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await getMembers();
  const payload = membersAdapter(data);

  return {
    props: {
      payload,
    },
  };
};
