"use client";

import { getApiData } from "@/utils/request";
import { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa";

const CategoriesSideMenus = () => {
  const [categories, setCategories] = useState([]);

  const fetchProductsCategories = async () => {
    try {
      const data = await getApiData(
        `${process.env.NEXT_PUBLIC_FAKE_STORE_API}/categories`
      );
      //console.log(data);
      setCategories(
        data.map((item: string) => {
          return item
            .split("")
            .map((letter, i) => (i == 0 ? letter.toUpperCase() : letter))
            .join("");
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProductsCategories();
  }, []);

  return (
    <>
      <div className="">
        {categories &&
          categories.map((category, index) => {
            return (
              <div
                key={index}
                className="py-2 flex items-center justify-between cursor-pointer"
              >
                <div>{category}</div>
                <div>
                  <FaChevronRight />
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default CategoriesSideMenus;
