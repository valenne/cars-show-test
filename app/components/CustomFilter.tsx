
interface CustomFilterProps {
  title: string;
}

function CustomFilter({title}: CustomFilterProps) {
  return (
    <div>{title}</div>
  );
}

export default CustomFilter;
