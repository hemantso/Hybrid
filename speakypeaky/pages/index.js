import ItemList from '../../su-fsd/src/components/ItemList';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Items List</h1>
      <ItemList />
    </div>
  );
}
