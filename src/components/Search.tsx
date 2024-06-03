"use client";

import { ProductTypes } from "@/types/types";
import { getApiData } from "@/utils/request";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const debounce = <T extends (...args: any[]) => any>(fn: T, delay: number) => {
  let timeout: ReturnType<typeof setTimeout>;
  let firstCall = true;
  return (...args: Parameters<T>): void => {
    if (firstCall) {
      firstCall = false;
      fn(...args);
    } else {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        console.log("Function Called!!!");
        fn(...args);
      }, delay);
    }
  };
};

const Search = () => {
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState<ProductTypes[]>([]);

  const handleSearch = async (query: string) => {
    console.log("Search Input:", query);
    try {
      const res = await getApiData(`${process.env.NEXT_PUBLIC_FAKE_STORE_API}`);
      console.log("Api Response:", res);
      const results = res.filter((item: ProductTypes) => {
        const titleWords = item.title.split(" ");
        if (titleWords.length === 1) {
          return item.title.toLowerCase().includes(query.toLowerCase());
        }
        return titleWords.some((word) =>
          word.toLowerCase().includes(query.toLowerCase())
        );
      });
      console.log("Result", results);
      setSuggestions(results);
    } catch (error) {
      console.log(error);
    }
  };

  const debouncedHandleSearch = useRef(debounce(handleSearch, 3000)).current;

  useEffect(() => {
    if (searchQuery !== "") {
      debouncedHandleSearch(searchQuery);
    } else {
      console.log("SearchQuery is Empty:", searchQuery);
    }
  }, [searchQuery, debouncedHandleSearch]);

  return (
    <>
      <div className="relative">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex items-center justify-between rounded-md p-2 bg-[#FAFAFA] "
        >
          <input
            type="text"
            placeholder=""
            className="text-[#7D8184FF] w-full focus:outline-none bg-transparent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(() => e.target.value)}
          />
          {searchQuery ? (
            <IoClose
              onClick={() => {
                setSearchQuery("");
                setSuggestions([]);
              }}
              className="w-7 h-7"
            />
          ) : (
            <FiSearch className="w-7 h-7" />
          )}
        </form>
        {searchQuery && (
          <div className="pr-2 h-[40vh] w-full rounded-b-md absolute z-50 top-full bg-[#FAFAFA] overflow-scroll hide-default-scrollbar">
            <div className="flex flex-col gap-4">
              {suggestions &&
                suggestions.map((item, i) => {
                  return (
                    <div
                      key={i}
                      onClick={() => {
                        router.push(`/product/${item.id}`);
                        setSearchQuery("");
                        setSuggestions([]);
                      }}
                      className=" w-full h-[5vh] flex items-center  hover:bg-[#F5F5F5] cursor-pointer"
                    >
                      <div className="w-[30%] h-full ">
                        <Image
                          src={item.image}
                          alt=""
                          width={100}
                          height={100}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="w-[70%] h-full text-sm text-ellipsis text-nowrap overflow-hidden flex items-center justify-start">
                        <div className=" border-b border-transparent hover:border-[#000000]">
                          {item.title}
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Search;
