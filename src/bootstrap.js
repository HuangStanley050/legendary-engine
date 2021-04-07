import { mount as ProductMount } from "products/ProductsIndex";
import { mount as CartMount } from "cart/CartShow";
console.log("container");
ProductMount(document.getElementById("my-products"));
CartMount(document.getElementById("my-cart"));
