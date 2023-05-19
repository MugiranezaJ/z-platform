const InputField: React.FC<{
  name: string;
  defaultValue?: string | number | undefined;
  label: string;
  type: string;
  handleBlur?: any;
  setField: (email: string) => void;
}> = ({ name, defaultValue, label, type, setField, handleBlur }) => {
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
        onBlur={handleBlur}
        className="px-4 py-2 rounded-md w-full border"
      />
    </div>
  );
};

export default InputField;
