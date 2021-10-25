import React from "react";
import data from "../components/data.json";

interface IDataContext {
  collection: {
    menu: Array<string>;
    subTitle: string;
    title: string;
    description: string;
    discount: string;
    price: Array<number>;
    discountedPrice: Array<number>;
  };
}

export const dataContext = React.createContext<IDataContext>({} as IDataContext);

const DataProvider: React.FC = ({ children }) => {
  const [collection, setCollection] = React.useState(data);
  return <dataContext.Provider value={{ collection }}>{children}</dataContext.Provider>;
};

export { DataProvider };
