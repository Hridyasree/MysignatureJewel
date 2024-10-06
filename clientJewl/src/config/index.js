export const registerFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const addProductFormElements = [
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter product description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      { id: "necklaces", label: "Necklaces" },
      { id: "earrings", label: "Earrings" },
      { id: "bracelets", label: "Bracelets" },
      { id: "rings", label: "Rings" },
      { id: "accessories", label: "Accessories" },
    ],
  },
  {
    label: "Material",
    name: "material",
    componentType: "select",
    options: [
      { id: "gold", label: "Gold" },
      { id: "silver", label: "Silver" },
      { id: "platinum", label: "Platinum" },
      { id: "diamonds", label: "Diamonds" },
      { id: "pearls", label: "Pearls" },
      { id: "mixed_metals", label: "Mixed Metals" },
    ],
  },
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price (optional)",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
];

export const shoppingViewHeaderMenuItems = [
  {
    id: "home",
    label: "Home",
    path: "/shop/home",
  },
  {
    id: "products",
    label: "Products",
    path: "/shop/listing",
  },
  {
    id: "necklaces",
    label: "Necklaces",
    path: "/shop/listing",
  },
  {
    id: "earrings",
    label: "Earrings",
    path: "/shop/listing",
  },
  {
    id: "bracelets",
    label: "Bracelets",
    path: "/shop/listing",
  },
  {
    id: "rings",
    label: "Rings",
    path: "/shop/listing",
  },
  {
    id: "accessories",
    label: "Accessories",
    path: "/shop/listing",
  },
  {
    id: "search",
    label: "Search",
    path: "/shop/search",
  },
];

export const categoryOptionsMap = {
  necklaces: "Necklaces",
  earrings: "Earrings",
  bracelets: "Bracelets",
  rings: "Rings",
  accessories: "Accessories",
};

export const brandOptionsMap = {
  gold: "Gold",
  silver: "Silver",
  platinum: "Platinum",
  diamonds: "Diamonds",
  pearls: "Pearls",
  "mixed_metals": "Mixed Metals",
};

export const filterOptions = {
  category: [
    { id: "necklaces", label: "Necklaces" },
    { id: "earrings", label: "Earrings" },
    { id: "bracelets", label: "Bracelets" },
    { id: "rings", label: "Rings" },
    { id: "accessories", label: "Accessories" },
  ],
  material: [
    { id: "gold", label: "Gold" },
    { id: "silver", label: "Silver" },
    { id: "platinum", label: "Platinum" },
    { id: "diamonds", label: "Diamonds" },
    { id: "pearls", label: "Pearls" },
    { id: "mixed_metals", label: "Mixed Metals" },
  ],
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

export const addressFormControls = [
  {
    label: "Address",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Enter your address",
  },
  {
    label: "City",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "Enter your city",
  },
  {
    label: "Pincode",
    name: "pincode",
    componentType: "input",
    type: "text",
    placeholder: "Enter your pincode",
  },
  {
    label: "Phone",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "Enter your phone number",
  },
  {
    label: "Notes",
    name: "notes",
    componentType: "textarea",
    placeholder: "Enter any additional notes",
  },
];
