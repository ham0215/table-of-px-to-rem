import { useCallback, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

export const MAX_FONT_SIZE = 32;

function validateFontSize(fontSize: number) {
  return Number.isInteger(fontSize) && fontSize > 0 && fontSize <= MAX_FONT_SIZE;
}

export default function useFontSizeEditor() {
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get('p')) || 1;
  const fontSize = Number(searchParams.get('f')) || 16;

  const handleChangeFontSize = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const fontSize = parseInt(event.target.value);

      if (!validateFontSize(fontSize)) {
        setError(`Please set an integer from 1 to ${MAX_FONT_SIZE} on the font-size.`);
        return;
      }

      setError('');
      navigate(`?p=${page}&f=${fontSize}`);
    },
    [navigate, page]
  );

  return {
    fontSize,
    handleChangeFontSize,
    error,
  };
}
