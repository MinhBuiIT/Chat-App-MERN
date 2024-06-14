import Title from '../components/Title';
import AppLayout from '../layouts/AppLayout';

const Home = () => {
  return (
    <>
      <Title title={'Chat App'} description={'Chat App UI'} />
      <div>Home</div>
    </>
  );
};
const AppLayoutHome = AppLayout()(Home);
export default AppLayoutHome;
