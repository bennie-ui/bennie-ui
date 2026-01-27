import type { Meta, StoryObj } from "@storybook/react";
import { useTable } from "@bennie-ui/tables";

// Sample data types
type User = {
  first_name: string;
  last_name: string;
  email: string;
}

type Product = {
  name: string;
  price: number;
  category: string;
}

// Sample data
const users: User[] = [
  { first_name: "John", last_name: "Doe", email: "john@example.com" },
  { first_name: "Jane", last_name: "Smith", email: "jane@example.com" },
  { first_name: "Bob", last_name: "Johnson", email: "bob@example.com" }
];

const products: Product[] = [
  { name: "Laptop", price: 999, category: "Electronics" },
  { name: "Mouse", price: 29, category: "Electronics" },
  { name: "Keyboard", price: 79, category: "Electronics" }
];

// Wrapper component for the story
const TableWrapper = ({ data, cells }: { data: any[], cells: Array<{ name: string, header?: string }> }) => {
  const { Table, TableCell } = useTable(data);
  
  return (
    <Table>
      {cells.map((cell, idx) => (
        <TableCell key={idx} name={cell.name} header={cell.header} />
      ))}
    </Table>
  );
};

const meta: Meta<typeof TableWrapper> = {
  title: "Components/Composites/Tables/Table",
  component: TableWrapper,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof TableWrapper>;

export const BasicUserTable: Story = {
  args: {
    data: users,
    cells: [
      { name: "first_name", header: "First Name" },
      { name: "last_name", header: "Last Name" },
      { name: "email", header: "Email" }
    ]
  }
};

export const ProductTable: Story = {
  args: {
    data: products,
    cells: [
      { name: "name", header: "Product Name" },
      { name: "price", header: "Price ($)" },
      { name: "category", header: "Category" }
    ]
  }
};

export const MinimalTable: Story = {
  args: {
    data: [
      { id: 1, name: "Item 1" },
      { id: 2, name: "Item 2" }
    ],
    cells: [
      { name: "id", header: "ID" },
      { name: "name", header: "Name" }
    ]
  }
};
