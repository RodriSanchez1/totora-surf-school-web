import React, { useState, useRef, useEffect } from 'react';
import { Calendar as CalendarIcon } from 'lucide-react';

interface DateInputProps {
  value: string;
  onChange: (value: string) => void;
  min?: string;
  max?: string;
  required?: boolean;
  name: string;
  locale: string;
  placeholder?: string;
}

export const DateInput: React.FC<DateInputProps> = ({
  value,
  onChange,
  min,
  max,
  required,
  name,
  locale,
  placeholder
}) => {
  const dateInputRef = useRef<HTMLInputElement>(null);
  const textInputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [error, setError] = useState<string>('');

  // Formatear fecha según el locale para mostrar
  const formatDateForDisplay = (dateString: string, currentLocale: string): string => {
    if (!dateString) return '';

    try {
      const date = new Date(dateString + 'T00:00:00');
      if (isNaN(date.getTime())) return '';

      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const year = date.getFullYear();

      // Formato según idioma
      if (currentLocale === 'en-US') {
        return `${month}/${day}/${year}`;
      } else {
        // Para es, fr, pt-BR usar formato DD/MM/YYYY
        return `${day}/${month}/${year}`;
      }
    } catch {
      return '';
    }
  };

  // Usar un estado que se inicializa con el valor formateado
  const [displayValue, setDisplayValue] = useState(() => formatDateForDisplay(value, locale));

  // Parsear fecha del formato de display a YYYY-MM-DD
  const parseDisplayToDate = (displayStr: string, currentLocale: string): string | null => {
    if (!displayStr) return null;

    // Remover espacios
    const cleaned = displayStr.replace(/\s/g, '');

    // Intentar parsear según el locale
    let day: string, month: string, year: string;

    if (currentLocale === 'en-US') {
      // Formato MM/DD/YYYY
      const match = cleaned.match(/^(\d{1,2})[\/-](\d{1,2})[\/-](\d{4})$/);
      if (!match) return null;
      [, month, day, year] = match;
    } else {
      // Formato DD/MM/YYYY
      const match = cleaned.match(/^(\d{1,2})[\/-](\d{1,2})[\/-](\d{4})$/);
      if (!match) return null;
      [, day, month, year] = match;
    }

    // Validar números
    const dayNum = parseInt(day, 10);
    const monthNum = parseInt(month, 10);
    const yearNum = parseInt(year, 10);

    if (monthNum < 1 || monthNum > 12) return null;
    if (dayNum < 1 || dayNum > 31) return null;
    if (yearNum < 1900 || yearNum > 2100) return null;

    // Formatear a YYYY-MM-DD
    const formattedMonth = monthNum.toString().padStart(2, '0');
    const formattedDay = dayNum.toString().padStart(2, '0');

    return `${yearNum}-${formattedMonth}-${formattedDay}`;
  };

  // Validar la fecha
  const validateDate = (dateString: string, currentLocale: string): boolean => {
    if (!dateString) {
      if (required) {
        setError(currentLocale === 'en-US' ? 'Date is required' : 'La fecha es requerida');
        return false;
      }
      setError('');
      return true;
    }

    // Validar formato YYYY-MM-DD
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(dateString)) {
      setError(currentLocale === 'en-US' ? 'Invalid date format' : 'Formato de fecha inválido');
      return false;
    }

    const date = new Date(dateString + 'T00:00:00');

    // Verificar si la fecha es válida
    if (isNaN(date.getTime())) {
      setError(currentLocale === 'en-US' ? 'Invalid date' : 'Fecha inválida');
      return false;
    }

    // Validar fecha mínima
    if (min) {
      const minDate = new Date(min + 'T00:00:00');
      if (date < minDate) {
        setError(currentLocale === 'en-US' ? 'Date cannot be before minimum date' : 'La fecha no puede ser anterior a la fecha mínima');
        return false;
      }
    }

    // Validar fecha máxima
    if (max) {
      const maxDate = new Date(max + 'T00:00:00');
      if (date > maxDate) {
        setError(currentLocale === 'en-US' ? 'Date cannot be after maximum date' : 'La fecha no puede ser posterior a la fecha máxima');
        return false;
      }
    }

    setError('');
    return true;
  };

  const handleTextInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setDisplayValue(inputValue);

    // Intentar parsear cuando tiene longitud suficiente
    if (inputValue.length >= 8) {
      const parsedDate = parseDisplayToDate(inputValue, locale);
      if (parsedDate) {
        const isValid = validateDate(parsedDate, locale);
        if (isValid) {
          onChange(parsedDate);
        }
      }
    }
  };

  const handleTextInputBlur = () => {
    setIsFocused(false);

    if (displayValue) {
      const parsedDate = parseDisplayToDate(displayValue, locale);
      if (parsedDate) {
        validateDate(parsedDate, locale);
        onChange(parsedDate);
        setDisplayValue(formatDateForDisplay(parsedDate, locale));
      } else {
        setError(locale === 'en-US' ? 'Invalid date format' : 'Formato de fecha inválido');
      }
    } else if (required) {
      setError(locale === 'en-US' ? 'Date is required' : 'La fecha es requerida');
    }
  };

  const handleDateInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    const isValid = validateDate(newValue, locale);

    if (isValid || !newValue) {
      onChange(newValue);
      setDisplayValue(formatDateForDisplay(newValue, locale));
    }
  };

  const handleCalendarClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dateInputRef.current?.showPicker();
  };

  // Actualizar displayValue cuando cambia el value externo o el locale
  useEffect(() => {
    const formatted = formatDateForDisplay(value, locale);
    setDisplayValue(formatted);
    if (value) {
      validateDate(value, locale);
    } else {
      setError('');
    }
  }, [value, locale]);

  // Re-validar cuando cambian min o max
  useEffect(() => {
    if (value) {
      validateDate(value, locale);
    }
  }, [min, max, locale]);

  const getPlaceholder = () => {
    if (placeholder) return placeholder;
    return locale === 'en-US' ? 'MM/DD/YYYY' : 'DD/MM/YYYY';
  };

  return (
    <div className="relative">
      {/* Input de texto visible para el usuario */}
      <input
        ref={textInputRef}
        type="text"
        value={displayValue}
        onChange={handleTextInputChange}
        onFocus={() => setIsFocused(true)}
        onBlur={handleTextInputBlur}
        placeholder={getPlaceholder()}
        className={`w-full px-4 py-3 rounded-lg border ${
          error
            ? 'border-red-500 ring-2 ring-red-500 ring-opacity-50'
            : isFocused
            ? 'border-totora-light ring-2 ring-totora-light ring-opacity-50'
            : 'border-gray-300 hover:border-totora-light'
        } outline-none transition-all duration-200 pr-12 font-medium`}
      />

      {/* Input date oculto para usar el picker nativo */}
      <input
        ref={dateInputRef}
        type="date"
        name={name}
        value={value}
        onChange={handleDateInputChange}
        min={min}
        max={max}
        required={required}
        tabIndex={-1}
        className="absolute opacity-0 pointer-events-none"
        style={{ width: 0, height: 0 }}
      />

      <div
        onClick={handleCalendarClick}
        className={`absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-md transition-all duration-200 cursor-pointer ${
          error
            ? 'bg-red-50'
            : isFocused
            ? 'bg-totora-light/10'
            : 'hover:bg-gray-100'
        }`}
      >
        <CalendarIcon
          size={20}
          className={`transition-all duration-200 ${
            error
              ? 'text-red-500'
              : isFocused
              ? 'text-totora-light scale-110'
              : 'text-gray-400'
          }`}
        />
      </div>

      {error && (
        <p className="mt-1 text-sm text-red-600 animate-in fade-in duration-200">
          {error}
        </p>
      )}
    </div>
  );
};
