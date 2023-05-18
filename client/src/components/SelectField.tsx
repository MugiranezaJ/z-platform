const SelectField: React.FC<{
  name: string;
  value: string | number;
  label: string;
  options: any;
  setField: (email: string) => void;
}> = ({ name, value, label, options, setField }) => {
  return (
    <div className="flex flex-col ">
      <label>{label}</label>
      <select
        //   type={type}
        id={name}
        required
        // value={name}
        onChange={(e) => setField(e.target.value)}
        className="px-4 py-2 rounded-md w-full border"
      >
        {options.map((option: any) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
