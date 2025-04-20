import useAuth from '../../../../hooks/useAuth';

const UserHome = () => {
  const {user} = useAuth();

  return (
    <section>
      <h3 className="text-3xl">
        Hello, Welcome {user?.displayName ? user?.displayName : 'Back'}
      </h3>
    </section>
  );
};

export default UserHome;
