"use client";
import React, { useCallback, useState } from "react";
import Image from "next/image";
import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import { cstDateTimeClient } from "@/backend/helpers";
import { updateRevalidateProduct } from "@/app/[lang]/_actions";
import { usePathname, useRouter } from "next/navigation";
import {
  set_colors,
  productos_altura,
  product_categories,
  genders,
  blog_categories,
} from "@/backend/data/productData";
import MultiselectTagComponent from "@/components/forms/MultiselectTagComponent";
import ToggleSwitch from "@/components/forms/ToggleSwitch";
import Swal from "sweetalert2";
import LocaleToggle from "@/components/layout/LocaleToggle";

const NewProductComp = ({ currentCookies, lang }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [title, setTitle] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [origins, setOrigins] = useState("");
  const [branchAvailability, setBranchAvailability] = useState(false);
  const [instagramAvailability, setInstagramAvailability] = useState(false);
  const [onlineAvailability, setOnlineAvailability] = useState(true);
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);
  const [gender, setGender] = useState("");
  const [featured, setFeatured] = useState(false);
  const [createdAt, setCreatedAt] = useState(
    cstDateTimeClient().toLocaleString()
  );
  const [salePrice, setSalePrice] = useState(0);
  const [salePriceEndDate, setSalePriceEndDate] = useState("");
  const [sizeSelection, setSizeSelection] = useState(productos_altura);
  const [tagSelection, setTagSelection] = useState(blog_categories);
  const [validationError, setValidationError] = useState(null);
  const keywordSelection = [
    { es: "Tendencias de Marketing", en: "Marketing Tendencies" },
    { es: "Tips de Marketing", en: "Marketing Tips" },
    { es: "Campañas Exitosas", en: "Campaign Success" },
    { es: "Estrategias Efectivas", en: "Effective Strategies" },
    { es: "Embudos de Venta", en: "Sales Funnels" },
    { es: "Herramientas IA", en: "AI Tools" },
  ];
  const [categories, setCategories] = useState([
    { es: "Tendencias de Marketing", en: "Marketing Tendencies" },
    { es: "Tips de Marketing", en: "Marketing Tips" },
    { es: "Campañas Exitosas", en: "Campaign Success" },
    { es: "Estrategias Efectivas", en: "Effective Strategies" },
    { es: "Embudos de Venta", en: "Sales Funnels" },
    { es: "Herramientas IA", en: "AI Tools" },
  ]);
  const [category, setCategory] = useState({
    es: "Tendencias de Marketing",
    en: "Marketing Tendencies",
  });
  const [mainImage, setMainImage] = useState(
    "/images/product-placeholder-minimalist.jpg"
  );

  const [mainVariation, setMainVariation] = useState(
    "/images/product-placeholder-minimalist.jpg"
  );

  const [variations, setVariations] = useState([
    {
      size: "",
      color: "",
      colorHex: "",
      colorHexTwo: "",
      colorHexThree: "",
      price: 0,
      cost: 0,
      stock: 1,
      image: "/images/product-placeholder-minimalist.jpg",
    },
  ]);

  const isCombinationUnique = (size, color, index) => {
    return !variations.some(
      (variation, i) =>
        i !== index && variation.size === size && variation.color === color
    );
  };

  const handleSizeChange = (index, newSize) => {
    const color = variations[index].color;
    if (newSize && isCombinationUnique(newSize, color, index)) {
      const newVariations = [...variations];
      newVariations[index].size = newSize;
      setVariations(newVariations);
    } else {
      const newVariations = [...variations];
      newVariations[index].size = "";
      setVariations(newVariations);
      Swal.fire({
        icon: "warning",
        iconColor: "#0D121B",
        background: "#fff5fb",
        color: "#0D121B",
        toast: true,
        text: `Esta combinación de tamaño y color ya existe. Por favor, elija otra talla o color.`,
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  const handleColorChange = (index, newColor, hex, hexTwo, hexThree) => {
    const size = variations[index].size;
    if (newColor && isCombinationUnique(size, newColor, index)) {
      const newVariations = [...variations];
      newVariations[index].color = newColor;
      newVariations[index].colorHex = hex;
      newVariations[index].colorHexTwo = hexTwo;
      newVariations[index].colorHexThree = hexThree;
      setVariations(newVariations);
    } else {
      // Reset the color if the combination is not unique
      const newVariations = [...variations];
      newVariations[index].color = ""; // Reset to empty
      setVariations(newVariations);
      Swal.fire({
        icon: "warning",
        iconColor: "#0D121B",
        background: "#fff5fb",
        color: "#0D121B",
        toast: true,
        text: `Esta combinación de tamaño y color ya existe. Por favor, elija otro color o Medida.`,
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  const handlePriceChange = (index, newPrice) => {
    const newVariations = [...variations];
    newVariations[index].price = newPrice;
    setVariations(newVariations);
  };

  const handleCostChange = (index, newCost) => {
    const newVariations = [...variations];
    newVariations[index].cost = newCost;
    setVariations(newVariations);
  };

  const handleStockChange = (index, newStock) => {
    const newVariations = [...variations];
    newVariations[index].stock = newStock;
    setVariations(newVariations);
  };

  const handleCategoryChange = async (e) => {
    const categoryObject = keywordSelection.find(
      (keyword) => keyword.es === e || keyword.en === e
    );
    if (categoryObject) {
      setCategory({ es: categoryObject.es, en: categoryObject.en });
    }
  };

  const handleAddKeywordField = (newSelectedKeywords) => {
    setKeywords(newSelectedKeywords);
  };

  // generate a pre-signed URL for use in uploading that file:
  async function retrieveNewURL(file, cb) {
    const endpoint = `/api/minio/`;
    fetch(endpoint, {
      method: "PUT",
      headers: {
        "Access-Control-Allow-Origin": "*",
        Name: file.name,
      },
    })
      .then((response) => {
        response.text().then((url) => {
          cb(file, url);
        });
      })
      .catch((e) => {
        console.error(e);
      });
  }

  // *******main images**********  //
  // functions
  const upload = async (e) => {
    // Get selected files from the input element.
    let files = e?.target.files;
    let section = e?.target.id;
    if (files) {
      for (var i = 0; i < files?.length; i++) {
        var file = files[i];
        // Retrieve a URL from our server.
        retrieveNewURL(file, (file, url) => {
          const parsed = JSON.parse(url);
          url = parsed.url;
          // Compress and optimize the image before upload
          compressAndOptimizeMainImage(file, url, section);
        });
      }
    }
  };

  async function compressAndOptimizeMainImage(file, url, section) {
    // Create an HTML Image element
    const img = document.createElement("img");

    // Load the file into the Image element
    img.src = URL.createObjectURL(file);

    // Wait for the image to load
    img.onload = async () => {
      // Create a canvas element
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      // Set the canvas dimensions to the image dimensions
      canvas.width = img.width;
      canvas.height = img.height;

      // Draw the image onto the canvas
      ctx.drawImage(img, 0, 0);

      // Compress and set quality (adjust quality value as needed)
      const quality = 0.8; // Adjust quality value as needed
      const compressedImageData = canvas.toDataURL("image/jpeg", quality);

      // Convert base64 data URL to Blob
      const blobData = await fetch(compressedImageData).then((res) =>
        res.blob()
      );

      // Upload the compressed image
      uploadFile(blobData, url, section);
    };
  }

  // to upload this file to S3 at `https://minio.salvawebpro.com:9000` using the URL:
  async function uploadFile(blobData, url, section) {
    fetch(url, {
      method: "PUT",
      body: blobData,
    })
      .then(() => {
        // If multiple files are uploaded, append upload status on the next line.
        // document.querySelector(
        //   '#status'
        // ).innerHTML += `<br>Uploaded ${file.name}.`;
        const newUrl = url.split("?");
        if (section === "selectorMain") {
          setMainImage(newUrl[0]);
          setVariations([
            {
              size: variations[0].size,
              color: variations[0].color,
              colorHex: variations[0].colorHex,
              colorHexTwo: variations[0].colorHexTwo,
              colorHexThree: variations[0].colorHexThree,
              price: variations[0].price,
              cost: variations[0].cost,
              stock: variations[0].stock,
              image: `${newUrl[0]}`,
            },
          ]);
        }
        if (section === "selectorVarOne") {
          setMainVariation(newUrl[0]);
        }
      })
      .catch((e) => {
        console.error(e);
      });
  }

  const handleAddTagField = (option) => {
    setTags(option);
  };

  // Debounce function
  const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  };

  // Auto-translate function using the API route with debounce
  const handleAutoTranslate = useCallback(
    debounce(async (text, targetLang, fieldSetter, fieldName) => {
      try {
        const response = await fetch("/api/translate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ text, targetLang }),
        });

        if (response.ok) {
          const data = await response.json();
          fieldSetter((prev) => ({ ...prev, [fieldName]: data.translation }));
        } else {
          console.error("Translation API error");
        }
      } catch (error) {
        console.error("Error translating text:", error);
      }
    }, 3000),
    []
  );

  async function hanldeFormSubmit(e) {
    e.preventDefault();
    if (
      !mainImage ||
      mainImage === "/images/product-placeholder-minimalist.jpg"
    ) {
      const noMainImageError = {
        mainImage: { _errors: ["Se requiere una imagen "] },
      };
      setValidationError(noMainImageError);
      return;
    }
    if (!title) {
      const noTitleError = { title: { _errors: ["Se requiere un titulo "] } };
      setValidationError(noTitleError);
      return;
    }
    if (!description) {
      const noDescriptionError = {
        description: { _errors: ["Se requiere descripción "] },
      };
      setValidationError(noDescriptionError);
      return;
    }
    if (!origins) {
      const noBrandError = {
        origins: { _errors: ["Se requiere un origen "] },
      };
      setValidationError(noBrandError);
      return;
    }
    if (!tags) {
      const noTagsError = {
        tags: { _errors: ["Se requiere mínimo una etiqueta "] },
      };
      setValidationError(noTagsError);
      return;
    }
    if (!variations[0].cost) {
      const noCostError = {
        cost: { _errors: ["Se requiere un costo de producto "] },
      };
      setValidationError(noCostError);
      return;
    }
    if (!variations[0].price) {
      const noPriceError = {
        price: { _errors: ["Se requiere un precio de producto "] },
      };
      setValidationError(noPriceError);
      return;
    }
    if (!variations[0].size) {
      const noSizesError = {
        sizes: { _errors: ["Se requiere una medida o tamaño "] },
      };
      setValidationError(noSizesError);
      return;
    }
    if (!variations[0].color) {
      const noColorsError = {
        colors: { _errors: ["Se requiere un color "] },
      };
      setValidationError(noColorsError);
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("featured", featured);
    formData.append("branchAvailability", branchAvailability);
    formData.append("instagramAvailability", instagramAvailability);
    formData.append("onlineAvailability", onlineAvailability);
    formData.append("origins", JSON.stringify(origins));
    formData.append("gender", gender);
    formData.append("mainImage", mainImage);
    formData.append("variations", JSON.stringify(variations));
    formData.append("tags", JSON.stringify(tags));
    formData.append("salePrice", Number(salePrice));
    formData.append("salePriceEndDate", salePriceEndDate);
    formData.append("createdAt", createdAt);
    // write to database using server actions

    //const result = await addVariationProduct(formData);
    // const result = await updateVariationProduct(formData);
    const endpoint = `/api/newproduct`;
    setIsSending(true);
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        Cookie: currentCookies,
      },
      body: formData,
    });

    if (!response?.ok) {
      if (response.status === 409) {
        setValidationError("Este Titulo de producto ya esta en uso");
      }

      setIsSending(false);
    } else if (response?.ok) {
      setValidationError(null);

      await updateRevalidateProduct();
      if (pathname.includes("instagram")) {
        router.push("/instagram/productos");
      } else if (pathname.includes("admin")) {
        router.push("/admin/productos");
      }
    }
  }
  return (
    <main className="w-full p-4 maxsm:p-2 bg-slate-200 text-sm">
      {!isSending ? (
        <form action={hanldeFormSubmit} className="relative w-full h-full">
          <div className="flex items-center justify-between">
            <LocaleToggle />
            <button
              type="submit"
              className="bg-secondary rounded-full text-white px-6 py-2"
            >
              Publicar
            </button>
          </div>

          <div className="flex flex-col items-start gap-5 justify-start w-full">
            <section className={`w-full ${!isSending ? "" : "grayscale"}`}>
              <h1 className="w-full text-xl font-semibold text-black mb-8 font-EB_Garamond">
                Nuevo Producto
              </h1>
              <div className="flex flex-row maxmd:flex-col items-start gap-2 justify-between w-full">
                <div className="flex flex-col items-start justify-center">
                  <div className="flex flex-row maxmd:flex-col items-center justify-between w-full">
                    {/* Availability */}
                    <div className="mb-4 w-full flex flex-row gap-4 items-center pl-3 uppercase">
                      <ToggleSwitch
                        label="Destacado"
                        enabled={featured}
                        setEnabled={setFeatured}
                      />
                      <ToggleSwitch
                        label="WWW"
                        enabled={onlineAvailability}
                        setEnabled={setOnlineAvailability}
                      />
                    </div>
                  </div>
                  {/*  Imagen principal */}
                  <div className="gap-y-1 flex-col flex px-2 w-full">
                    <div className="relative aspect-video hover:opacity-80 bg-white border-4 border-gray-300">
                      <label htmlFor="selectorMain" className="cursor-pointer">
                        <Image
                          id="blogImage"
                          alt="blogBanner"
                          src={mainImage}
                          width={1280}
                          height={1280}
                          className="w-full h-full object-cover z-20"
                        />
                        <input
                          id="selectorMain"
                          type="file"
                          accept=".png, .jpg, .jpeg, .webp"
                          hidden
                          onChange={upload}
                        />

                        {validationError?.mainImage && (
                          <p className="text-sm text-red-400">
                            {validationError.mainImage._errors.join(", ")}
                          </p>
                        )}
                      </label>
                    </div>
                  </div>
                </div>

                <div className="w-full flex-col flex justify-start px-2 gap-y-2">
                  <div className="mb-1">
                    <p className="text-red-700"> {validationError}</p>
                    <input
                      type="text"
                      className="appearance-none border bg-gray-100 rounded-md py-2 px-3 border-gray-300 focus:outline-none focus:border-gray-400 w-full"
                      placeholder="Nombre de Producto"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      name="title"
                      htmlFor="title"
                    />
                    {validationError?.title && (
                      <p className="text-sm text-red-400">
                        {validationError.title._errors.join(", ")}
                      </p>
                    )}
                  </div>
                  <div className="mb-4">
                    <textarea
                      rows="2"
                      className="appearance-none border  bg-gray-100 rounded-md py-2 px-3 border-gray-300 focus:outline-none focus:border-gray-400 w-full"
                      placeholder="Descripción del Producto"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      name="description"
                      htmlFor="description"
                    ></textarea>
                    {validationError?.description && (
                      <p className="text-sm text-red-400">
                        {validationError.description._errors.join(", ")}
                      </p>
                    )}
                  </div>
                  {/* Marca */}
                  <div className=" flex flex-row gap-1 items-center">
                    <div className="mb-1  w-full">
                      <input
                        type="text"
                        className="appearance-none border bg-gray-100 rounded-md py-2 px-3 border-gray-300 focus:outline-none focus:border-gray-400 w-full"
                        placeholder="Marca del Producto"
                        value={origins}
                        onChange={(e) => setBrand(e.target.value)}
                        name="origins"
                        htmlFor="origins"
                      />
                      {validationError?.origins && (
                        <p className="text-sm text-red-400">
                          {validationError.origins._errors.join(", ")}
                        </p>
                      )}
                    </div>
                  </div>
                  {/* Etiquetas y Categoria */}
                  <div className=" flex flex-row gap-1 items-center">
                    <div className="mb-1 w-full">
                      <label className="block mb-1 font-EB_Garamond  text-xs">
                        Etiquetas
                      </label>
                      <div className="relative">
                        <MultiselectTagComponent
                          options={tagSelection}
                          handleAddTagField={handleAddTagField}
                        />
                        {validationError?.tags && (
                          <p className="text-sm text-red-400">
                            {validationError.tags._errors.join(", ")}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="mb-1 w-full">
                      <label className="block mb-1 font-EB_Garamond  text-xs">
                        {" "}
                        Categoría{" "}
                      </label>
                      <div className="relative ">
                        {/* Category select */}
                        <select
                          className={`block appearance-none border dark:bg-dark border-gray-300 cursor-pointer rounded-md py-2 px-3 focus:outline-none focus:border-gray-400 w-full mt-2`}
                          name={`category[${lang}]`}
                          onChange={(e) => handleCategoryChange(e.target.value)}
                        >
                          {categories.map((cat) => (
                            <option
                              className="bg-transparent"
                              key={cat[`${lang}`]}
                              value={cat[`${lang}`]}
                            >
                              {cat[`${lang}`]}
                            </option>
                          ))}
                        </select>
                        {validationError?.category && (
                          <p className="text-sm text-red-400">
                            {validationError.category._errors.join(", ")}
                          </p>
                        )}
                        <i className="absolute inset-y-0 right-0 p-2 text-gray-400">
                          <svg
                            width="22"
                            height="22"
                            className="fill-current"
                            viewBox="0 0 20 20"
                          >
                            <path d="M7 10l5 5 5-5H7z"></path>
                          </svg>
                        </i>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-3 w-full">
                    <div className="mb-4 w-full">
                      <label className="block mb-1 font-EB_Garamond text-xs">
                        Medida
                      </label>
                      <div className="relative">
                        <select
                          value={variations[0].size}
                          onChange={(e) => handleSizeChange(0, e.target.value)}
                          name="size"
                          htmlFor="size"
                          className="appearance-none border border-gray-300 bg-gray-100 rounded-md pl-2 py-1 cursor-pointer focus:outline-none focus:border-gray-400 w-full"
                        >
                          {sizeSelection.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.value}
                            </option>
                          ))}
                        </select>
                        {validationError?.sizes && (
                          <p className="text-sm text-red-400">
                            {validationError.sizes._errors.join(", ")}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="mb-4 w-full">
                      <label className="block mb-1 font-EB_Garamond text-xs">
                        {" "}
                        Color{" "}
                      </label>
                      <div className="relative">
                        <select
                          value={variations[0].color}
                          name="color"
                          htmlFor="color"
                          onChange={(e) => {
                            const selectedOption =
                              e.target.options[e.target.selectedIndex];
                            const hexValue =
                              selectedOption.getAttribute("data-hex");
                            const hexTwoValue =
                              selectedOption.getAttribute("data-hextwo");
                            const hexThreeValue =
                              selectedOption.getAttribute("data-hexthree");
                            handleColorChange(
                              0,
                              e.target.value,
                              hexValue,
                              hexTwoValue,
                              hexThreeValue
                            );
                          }}
                          className="appearance-none border border-gray-300 bg-gray-100 rounded-md pl-2 py-1 cursor-pointer focus:outline-none focus:border-gray-400 w-full"
                        >
                          {set_colors.map((option) => (
                            <option
                              data-hex={option.hex}
                              data-hextwo={option.hexTwo}
                              data-hexthree={option.hexThree}
                              key={option.value}
                              value={option.value}
                            >
                              {option.value}
                            </option>
                          ))}
                        </select>
                        {validationError?.colors && (
                          <p className="text-sm text-red-400">
                            {validationError.colors._errors.join(", ")}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="mb-4 w-full">
                      <label className="block mb-1  font-EB_Garamond text-xs">
                        Precio
                      </label>
                      <div className="relative">
                        <div className="col-span-2">
                          <input
                            type="number"
                            className="appearance-none border border-gray-300 bg-gray-100 rounded-md pl-2 py-1 remove-arrow focus:outline-none focus:border-gray-400 w-full"
                            placeholder="0.00"
                            min="1"
                            value={variations[0].price}
                            onChange={(e) =>
                              handlePriceChange(0, e.target.value)
                            }
                            name="price"
                            htmlFor="price"
                          />
                          {validationError?.price && (
                            <p className="text-sm text-red-400">
                              {validationError.price._errors.join(", ")}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="mb-4 w-full">
                      <label className="block mb-1 font-EB_Garamond text-xs">
                        {" "}
                        Costo{" "}
                      </label>
                      <div className="relative">
                        <div className="col-span-2">
                          <input
                            type="number"
                            className="appearance-none border border-gray-300 bg-gray-100 rounded-md pl-2 py-1 remove-arrow focus:outline-none focus:border-gray-400 w-full"
                            placeholder="0.00"
                            min="1"
                            value={variations[0].cost}
                            onChange={(e) =>
                              handleCostChange(0, e.target.value)
                            }
                            name="cost"
                            htmlFor="cost"
                          />
                          {validationError?.cost && (
                            <p className="text-sm text-red-400">
                              {validationError.cost._errors.join(", ")}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="mb-4 w-full">
                      <label className="block mb-1 font-EB_Garamond text-xs">
                        {" "}
                        Existencias{" "}
                      </label>
                      <div className="relative">
                        <div className="col-span-2">
                          <input
                            type="number"
                            className="appearance-none border border-gray-300 bg-gray-100 rounded-md pl-2 py-1 remove-arrow focus:outline-none focus:border-gray-400 w-full"
                            placeholder="1"
                            min="1"
                            value={variations[0].stock}
                            onChange={(e) =>
                              handleStockChange(0, e.target.value)
                            }
                            name="stock"
                            htmlFor="stock"
                          />
                          {validationError?.stock && (
                            <p className="text-sm text-red-400">
                              {validationError.stock._errors.join(", ")}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </form>
      ) : (
        <section className="w-full min-h-screen">
          <div className="flex flex-col items-center justify-center min-h-screen w-full">
            <span class="loader"></span>
            <h2 className="text-sm">Creando producto...</h2>
          </div>
        </section>
      )}
    </main>
  );
};

export default NewProductComp;
