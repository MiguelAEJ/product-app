import { PageLayoutProp } from "../../types/products";

export const PageLayout = ({ title, form, list }: PageLayoutProp) => (
  <div className="flex flex-col gap-6 px-4 pb-12">
    <h1>{title}</h1>
    {form}
    {list}
  </div>
);
