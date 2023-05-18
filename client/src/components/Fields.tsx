const InputField: React.FC<{
  name: string;
  defaultValue?: string | number | undefined;
  label: string;
  type: string;
  setField: (email: string) => void;
}> = ({ name, defaultValue, label, type, setField }) => {
  return (
    <div className="flex flex-col ">
      <label htmlFor={type}>{label}</label>
      <input
        type={type}
        id={name}
        required
        // value={value}
        defaultValue={defaultValue}
        onChange={(e) => setField(e.target.value)}
        className="px-4 py-2 rounded-md w-full border"
      />
    </div>
  );
};

export default InputField;
