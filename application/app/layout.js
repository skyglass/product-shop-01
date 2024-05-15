"use client";
import "./globals.css";
import "bootstrap-material-design/dist/css/bootstrap-material-design.min.css";
import TopNav from "@/components/TopNav";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";
import { SearchProvider } from "@/context/search";
import { CategoryProvider } from "@/context/category";
import { TagProvider } from "@/context/tag";
import { ProductProvider } from "@/context/product";
import { FilterProvider } from "@/context/filter";
import { CartProvider } from "@/context/cart";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <SearchProvider>
            <CategoryProvider>
              <TagProvider>
                <ProductProvider>
                  <FilterProvider>
                    <CartProvider>
                      <Toaster position="top-left" />
                      <TopNav />
                      {children}
                    </CartProvider>
                  </FilterProvider>
                </ProductProvider>
              </TagProvider>
            </CategoryProvider>
          </SearchProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
