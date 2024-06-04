import ListProducts from "@/components/products/ListProducts";
import { getCookiesName, removeUndefinedAndPageKeys } from "@/backend/helpers";
import { cookies } from "next/headers";
import ServerPagination from "@/components/pagination/ServerPagination";
import CatCoverComp from "@/components/products/CatCoverComp";

export const metadata = {
  title: "Hudson International Market",
  description:
    "Ven y explora nuestra tienda en linea y descubre modelos exclusivos de marcas de alta gama.",
};

const getAllProducts = async (searchQuery, currentCookies, perPage) => {
  try {
    const URL = `${process.env.NEXTAUTH_URL}/api/products?${searchQuery}`;
    const res = await fetch(URL, {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Cookie: currentCookies,
        perPage: perPage,
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const ProductosPage = async ({ searchParams, params }) => {
  const lang = params.lang;
  const nextCookies = cookies();
  const cookieName = getCookiesName();
  let nextAuthSessionToken = nextCookies.get(cookieName);
  nextAuthSessionToken = nextAuthSessionToken?.value;
  const currentCookies = `${cookieName}=${nextAuthSessionToken}`;
  const urlParams = {
    keyword: searchParams.keyword,
    page: searchParams.page,
    category: searchParams.category,
    brand: searchParams.brand,
    "rating[gte]": searchParams.rating,
    "price[lte]": searchParams.max,
    "price[gte]": searchParams.min,
  };

  // Filter out undefined values
  const filteredUrlParams = Object.fromEntries(
    Object.entries(urlParams).filter(([key, value]) => value !== undefined)
  );

  const searchQuery = new URLSearchParams(filteredUrlParams).toString();

  const queryUrlParams = removeUndefinedAndPageKeys(urlParams);
  const keywordQuery = new URLSearchParams(queryUrlParams).toString();

  const per_page = 15;
  const data = await getAllProducts(searchQuery, currentCookies, per_page);

  //pagination
  let page = parseInt(searchParams.page, 15);
  page = !page || page < 1 ? 1 : page;
  const perPage = 15;
  const itemCount = data?.productsCount;
  const totalPages = Math.ceil(data.filteredProductsCount / perPage);
  const prevPage = page - 1 > 0 ? page - 1 : 1;
  const nextPage = page + 1;
  const isPageOutOfRange = page > totalPages;
  const pageNumbers = [];
  const offsetNumber = 2;

  const products = data?.products.products;

  const filteredProductsCount = data?.filteredProductsCount;
  const search =
    typeof searchParams.search === "string" ? searchParams.search : undefined;
  for (let i = page - offsetNumber; i <= page + offsetNumber; i++) {
    if (i >= 1 && i <= totalPages) {
      pageNumbers.push(i);
    }
  }

  return (
    <div className="relative h-full  overflow-x-hidden">
      <CatCoverComp searchParams={searchParams} lang={lang} />

      <div className="w-full h-full py-16 px-5 bg-dark dark:bg-slate-700">
        <div className="py-14 px-10 maxmd:px-5 bg-white  dark:bg-primary">
          <ListProducts
            lang={lang}
            products={products}
            filteredProductsCount={filteredProductsCount}
          />
          <ServerPagination
            lang={lang}
            isPageOutOfRange={isPageOutOfRange}
            page={page}
            pageNumbers={pageNumbers}
            prevPage={prevPage}
            nextPage={nextPage}
            totalPages={totalPages}
            searchParams={keywordQuery}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductosPage;
