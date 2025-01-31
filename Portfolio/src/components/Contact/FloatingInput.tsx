import { motion } from 'framer-motion';

interface FloatingInputProps {
  id: string;
  type: 'text' | 'email' | 'textarea';
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export const FloatingInput = ({ id, type, label, value, onChange }: FloatingInputProps) => {
  const baseClassName = `peer w-full bg-transparent border border-white/20 rounded-xl px-4 pt-6 pb-2 
                        text-white placeholder-transparent focus:outline-none focus:ring-2 
                        focus:ring-white/20 transition-all`;

  return (
    <div className="relative">
      {type === 'textarea' ? (
        <textarea
          id={id}
          rows={4}
          value={value}
          onChange={onChange}
          placeholder={label}
          className={`${baseClassName} resize-none`}
        />
      ) : (
        <input
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          placeholder={label}
          className={baseClassName}
        />
      )}
      <label
        htmlFor={id}
        className="absolute left-4 top-4 text-white/60 text-sm transition-all duration-200
                 peer-placeholder-shown:text-base peer-placeholder-shown:top-4
                 peer-focus:text-sm peer-focus:top-2
                 peer-focus:text-white/80"
      >
        {label}
      </label>
    </div>
  );
};