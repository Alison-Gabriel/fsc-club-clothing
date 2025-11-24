import Categories from "../components/categories";
import Header from "../components/header";

const HomePage = () => {
  return (
    <>
      <Header />
      <main className="p-8">
        <Categories />
      </main>
    </>
  );
};

export default HomePage;
