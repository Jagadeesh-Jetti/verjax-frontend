import { Navbar } from '../globalComponents/Navbar';

export const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="justify-center text-center p-50">
        <h1 className="text-4xl">
          Book trusted and profesionals for all your needs
        </h1>
        <div className="">
          <input
            className=" p-5 bg-yellow"
            type="text"
            placeholder="What do you need help with?"
          />
        </div>
      </div>
    </div>
  );
};
